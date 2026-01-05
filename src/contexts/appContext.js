import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { baseApiUrl } from "../data/url";
import { countries } from "../data/countries";
import sortLeaguesByFixtureCount from "../functions/sortLeagues";
import replaceBookingCode from "../functions/replaceBookingCode";
import generateBookingCode from "../functions/generateBookingCode";
import { langs } from "../data/langs";
import { addMatchDetails, addOdds, getCarousel, getFeaturedMatches, getHighlightsDetails, getMatches, parseData, sortMatchesByDate } from "../functions/parseData";
import rawData from "../test3";
import { useNavigate } from "react-router-dom";
import localHighlight from "../test2";

const AppContext = createContext();

const featuresPreset = {
    harry: {
        flauntWin: true,
        cover: true,
        watermark: true,
        shareBet: true,
        selections: true,
        editTicket: true,
        hideTicket: true,
        hasAi: true,
    },
    gadeNew: {
        flauntWin: true,
        cover: true,
        watermark: true,
        shareBet: true,
        selections: true,
        editTicket: true,
        hideTicket: false,
        hasAi: true,
    },
    gade: {
        flauntWin: false,
        cover: false,
        watermark: false,
        shareBet: false,
        selections: false,
        editTicket: false,
        hideTicket: false,
        hasAi: false,
    }
}

const AppProvider = ({ children }) => {

    const [loadStage, setLoadStage] = useState(0);
    const [user, setUser] = useState(null);
    const [balance, setBalance] = useState(0);
    const [popup, setPopup] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const [countryCode, setCountryCode] = useState(null);
    const [dropDown, setDropDown] = useState(null);
    const [loadedTickets, setLoadedTickets] = useState({
        tickets: [],
        openVisited: false,
        settledVisited: false
    });
    const [sportTypes, setSportTypes] = useState([]);
    const [matches, setMatches] = useState(null);
    const [featuredMatches, setFeaturedMatches] = useState(null);
    const [carousel, setCarousel] = useState(null);
    const [subUrl, setSubUrl] = useState('');
    const [features, setFeatures] = useState(featuresPreset.harry);
    const [lastPathName, setLastPathName] = useState(null);
    // const [ME, setME] = useState(null);

    const navigate = useNavigate();

    const loadInterval = useRef(null);


    function init({ full = true } = {}) {

        window.$.ajax({
            url: `${baseApiUrl}/get-tickets.php`,
            dataType: 'JSON',
            type: 'POST',
            data: { user: user },
            success: (data) => {
                // console.log(data)
                if (data.status == 'success') {

                    let tempTickets = data.data;

const computedTickets = [];

                    try {

                        for (let i = 0; i < tempTickets.length; i++) {

                            let ticket = tempTickets[i];
                            if (!ticket.uniqueId) ticket.uniqueId = crypto.randomUUID();

                            if (computeFilter({
                                ticket,
                                tempTickets,
                                i
                            })) {
                                computedTickets.push(tempTickets[i]);

                            } else {
                                continue;
                            }

                            // if (ticket.status == 'open') {

                            // } else {
                            //     let losts = 0;
                            //     let cashouts = 0;
                            //     let winWithVoids = 0;
                            //     let filter;

                            //     try {

                            //         ticket.matches.forEach(match => {
                            //             if (match.winningSelection == '') cashouts++;
                            //             else if (match.winningSelection == 'NotResulted') winWithVoids++;
                            //             else if (match.winningSelection != match.userSelection) losts++;
                            //         })

                            //     } catch (error) {
                            //         console.error("Matches forEach Error. Index: ", i, "Affected Ticket: ", tempTickets[i], "Error: ", error);
                            //         tempTickets = tempTickets.filter((t, j) => j != i)
                            //         continue;
                            //     }


                            //     if (losts > 0) filter = 'Loss';
                            //     else if (cashouts > 0) filter = 'Cash Out'
                            //     else if (winWithVoids > 0) filter = 'Win with void(s)'
                            //     else filter = 'Win'

                            //     tempTickets[i].filter = filter
                            // }
                        };

                    } catch (error) {
                        alert("Ticket error: " + error);
                        console.error("General Tickets Error in forEach: ", error);
                    }

                    tempTickets = computedTickets;

                    console.log("After Compute: ", tempTickets)
                    tempTickets.sort((a, b) => new Date(b.stakeTime) - new Date(a.stakeTime));

                    // if (countries[countryCode]) {
                    //     console.log("Country Selected: ", countryCode);
                    //     tempTickets = tempTickets.map(ticket => ({
                    //         ...ticket,
                    //         bookingCode: ticket.bookingCode ? replaceBookingCode(ticket.bookingCode, countries[countryCode].bookingCodePrefix) : generateBookingCode(countries[countryCode].bookingCodePrefix)
                    //     }))
                    // }

                    setLoadedTickets(prev => ({ ...prev, tickets: tempTickets }));
                } else {
                    console.log(data.message);
                }
            },
            error: (res) => {
                console.log(res)
            }
        })

        if (!full) return;

        getTransactions();

        setTimeout(() => {
            getBalance()
                .then(res => {
                    if (res.status = 'success') setBalance(res.data.balance)
                    else setBalance(400)
                })
                .catch(err => setBalance(400))
        }, 2000)

    }

    function computeFilter({
        ticket,
        tempTickets,
        i,
        single = false
    }) {
        if (ticket.status == 'open') {
            return ticket
        } else {
            let losts = 0;
            let cashouts = 0;
            let winWithVoids = 0;
            let filter;

            try {

                ticket.matches.forEach(match => {
                    if (match.winningSelection == '') cashouts++;
                    else if (match.winningSelection == 'NotResulted') winWithVoids++;
                    else if (match.winningSelection != match.userSelection && !(match.gameType === "1X2" && (match.up2 === true || match.up2 === "true"))) losts++;
                })

            } catch (error) {
                if (single) {
                    alert("Error: ", error);
                    console.error("Matches forEach Error. Single Match: Affected Ticket: ", ticket, "Error: ", error);
                } else {
                    alert("Error: ", error);
                    console.error("Matches forEach Error. Index: ", i, "Affected Ticket: ", tempTickets[i], "Error: ", error);
                    tempTickets = tempTickets.filter((t, j) => j != i)
                }

                console.log(tempTickets);
                return false;
                // continue;
            }


            if (losts > 0) filter = 'Loss';
            else if (cashouts > 0) filter = 'Cash Out'
            else if (winWithVoids > 0) filter = 'Win with void(s)'
            else filter = 'Win'

            if (single) {
                ticket.filter = filter;
                return ticket;
            };

            tempTickets[i].filter = filter
        }

        return true;
    }

    function getBalance() {
        return window.$.ajax({
            url: `${baseApiUrl}/get-balance.php`,
            dataType: 'JSON',
            type: 'POST',
            data: { user: user },
        })
    }

    function getTransactions() {
        window.$.ajax({
            url: `${baseApiUrl}/get-transactions.php`,
            dataType: 'JSON',
            type: 'POST',
            data: { user: user, limit: 1000 },
            success: (res) => {
                console.log(res)
                if (res.status = 'success') setTransactions(res.data.transactions)
                else setBalance(400)
            },
            error: (res) => {
                console.log(res)
            }
        })
    }

    function getHighlights() {

        let data;
        window.$.ajax({
            url: `${baseApiUrl}/get-highlights.php`,
            dataType: 'JSON',
            type: 'POST',
            data: { user: user },
            success: res => {
                // console.log("Response: ", res);
                if (res.status == 'success') {
                    data = parseData(res.data);
                } else {
                    data = parseData(localHighlight);
                }
                console.log("Data: ", data);
            },
            error: error => {
                console.log("Error Fetching Highlights: ", error);
                data = parseData(localHighlight);
            },
            complete: res => {
                // Set <base> to bet365.com
                const base = document.createElement("base");
                base.href = "https://bet365.com";
                document.head.appendChild(base);


                const dataArr = Object.values(data);
                let rest = dataArr.filter((dt, i) => i > 0)
                const styleSection = dataArr.find((dt, i) => dt.tagName == "STYLE");
                if (styleSection) {
                    // const style = document.createElement('style');
                    // style.innerHTML = styleSection;
                    document.head.appendChild(styleSection);
                }
                console.log("Style Section: ", styleSection);
                rest = rest.filter((dt, i) => dt.tagName != "STYLE");
                // console.log("Section: ", dataArr)
                setCarousel(data[0]);
                if (data[3]) setFeaturedMatches(data[3])
                else setFeaturedMatches("test");
                setMatches(rest);
            }
        })

        // console.log(data);

    }

    function getHighlights2() {

        let data;
        window.$.ajax({
            url: `${baseApiUrl}/get-highlights.php`,
            dataType: 'JSON',
            type: 'POST',
            data: { user: user },
            success: res => {
                if (res.status == 'success') {
                    data = parseData(res.data);
                } else {
                    data = parseData(rawData);
                }
            },
            error: error => {
                console.log("Error Fetching Highlights: ", error);
                data = parseData(rawData);
            },
            complete: res => {
                const matchesData = getMatches(data);
                const matchesWithOdds = addOdds(matchesData, data);
                const sortedMatches = sortMatchesByDate(matchesWithOdds);
                setMatches(sortedMatches);

                const featuredMatches = getFeaturedMatches(data);
                const featuredMatchesWithDetails = addMatchDetails(featuredMatches, data);
                setFeaturedMatches(featuredMatchesWithDetails);

                const carousselData = getCarousel(data);
                setCarousel(carousselData);

                // console.log(featuredMatchesWithDetails);
                console.log(sortedMatches);
            }
        })

        console.log(data);

        // setTimeout(() => {
        //     const matchesData = getMatches(data);
        //     const matchesWithOdds = addOdds(matchesData, data);
        //     const sortedMatches = sortMatchesByDate(matchesWithOdds);
        //     setMatches(sortedMatches);

        //     const featuredMatches = getFeaturedMatches(data);
        //     const featuredMatchesWithDetails = addMatchDetails(featuredMatches, data);
        //     setFeaturedMatches(featuredMatchesWithDetails);

        //     const carousselData = getCarousel(data);
        //     setCarousel(carousselData);

        //     // console.log(featuredMatchesWithDetails);
        //     console.log(sortedMatches);
        //     // console.log(carousselData);
        // // }, 1000 + Math.random() * 1000)

    }

    function toggleDropDown(e, dropDownName = null) {
        e.stopPropagation();
        if (dropDown == dropDownName) {
            setDropDown(null);
        } else {
            setDropDown(dropDownName);
        }
    }

    function logout() {

        const ask = window.confirm("Are you sure you want to Logout?");
        if (ask) {
            setUser(null);
            logoutCleanUp();
        }
    }

    function logoutCleanUp() {
        setLoadedTickets({
            tickets: [],
            openVisited: false,
            settledVisited: false
        });

        setPopup(null);

        setBalance(0);
        setTransactions(null);
    }

    useEffect(() => {
        const url = window.location.href;
        const urlParamSide = url.split('?')[1];
        const params = urlParamSide?.split('&');
        const allParams = {};
        if (params) {
            for (const param of params) {
                const paramSplit = param.split('=')
                allParams[paramSplit[0]] = paramSplit[1]
            }
        }
        const localCountryCode = localStorage.getItem('country');
        if (localCountryCode) {
            setCountryCode(localCountryCode);
        } else {
            setCountryCode(0);
        }

        if (allParams.user) {
            setUser(allParams.user);
        } else {
            const localUser = localStorage.getItem('user');
            if (localUser) {
                setUser(localUser);
            }
        }

        getHighlights();
    }, [])

    useEffect(() => {
        if (user) {
            init();
            localStorage.setItem('user', user);
        } else {
            setPopup(null);
            localStorage.removeItem('user');
        }

        setLoadStage(0);

        loadInterval.current = setInterval(() => {
            setLoadStage(prevLoadStage => {
                if (prevLoadStage >= 60) {
                    clearInterval(loadInterval.current)
                }

                return prevLoadStage + 20
            });
        }, 1000)

        return () => clearInterval(loadInterval.current);

    }, [user])

    useEffect(() => {
        if (popup) {
            document.body.classList.add('g5-Application-scrolllock');
        } else {
            document.body.classList.remove('g5-Application-scrolllock');
        }
    }, [popup])

    useEffect(() => {
        if (countryCode !== null) localStorage.setItem("country", countryCode);
        // if (countries[countryCode]) {
        //     setLoadedTickets(prev => ({
        //         ...prev,
        //         tickets: prev.tickets.map(ticket => ({
        //             ...ticket,
        //             bookingCode: ticket.bookingCode ? replaceBookingCode(ticket.bookingCode, countries[countryCode].bookingCodePrefix) : generateBookingCode(countries[countryCode].bookingCodePrefix)
        //         }))
        //     }))
        // }
        if (countryCode == null) return
        // getHighlights();

    }, [countryCode])

    const goBack = useCallback((path) => {
        if (lastPathName === path) {
            navigate(-1)
        } else {
            navigate(path, { replace: true });
        }
    }, [lastPathName])

    const values = useMemo(() => ({
        user,
        setUser,
        popup,
        setPopup,
        loadedTickets,
        setLoadedTickets,
        transactions,
        setTransactions,
        getTransactions,
        balance: balance * countries[countryCode]?.factor,
        setBalance,
        getBalance,
        country: countries[countryCode],
        countryCode,
        setCountryCode,
        dropDown,
        toggleDropDown,
        sportTypes,
        setSportTypes,
        matches,
        setMatches,
        featuredMatches,
        setFeaturedMatches,
        carousel,
        setCarousel,
        subUrl,
        setSubUrl,
        lastPathName,
        setLastPathName,
        features,
        computeFilter,
        goBack,
        init,
        loadStage,
        lang: langs[countries[countryCode]?.lang || "en-US"],
        logout
    }), [
        user,
        popup,
        loadedTickets,
        transactions,
        balance,
        countryCode,
        dropDown,
        sportTypes,
        matches,
        featuredMatches,
        carousel,
        subUrl,
        loadStage,
        lastPathName
    ])

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
export const useApp = () => useContext(AppContext);

