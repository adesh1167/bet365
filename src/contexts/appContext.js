import { createContext, useContext, useEffect, useState } from "react";
import { baseApiUrl } from "../data/url";
import { countries } from "../data/countries";
import sortLeaguesByFixtureCount from "../functions/sortLeagues";
import replaceBookingCode from "../functions/replaceBookingCode";
import generateBookingCode from "../functions/generateBookingCode";
import { langs } from "../data/langs";

const AppContext = createContext();

const AppProvider = ({children}) => {
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
    const [highlights, setHighlights] = useState(null);
    const [subUrl, setSubUrl] = useState('');

    function init({full= true} = {}){
    
        window.$.ajax({
          url: `${baseApiUrl}/get-tickets.php`,
          dataType: 'JSON',
          type: 'POST',
          data: {user: user},
          success: (data)=>{
            console.log(data)
            if(data.status == 'success'){
    
              let tempTickets = data.data;
    
              tempTickets.forEach((ticket,i)=>{
    
                  if(ticket.status == 'open'){
    
                  } else{
                      let losts = 0;
                      let cashouts = 0;
                      let winWithVoids = 0;
                      let filter;
    
                      ticket.matches.forEach(match=>{
                          if(match.winningSelection == '') cashouts++;
                          else if(match.winningSelection == 'NotResulted') winWithVoids++;
                          else if(match.winningSelection != match.userSelection) losts++;
                      })
    
                      if(losts > 0) filter = 'Loss';
                      else if(cashouts > 0) filter = 'Cash Out'
                      else if(winWithVoids > 0) filter = 'Win with void(s)'
                      else filter = 'Win'
    
                      tempTickets[i].filter = filter
                  }
              });
    
              tempTickets.sort((a,b) => Number(b.id) - Number(a.id));

                if(countries[countryCode]){
                    console.log("Country Selected: ", countryCode);
                    tempTickets = tempTickets.map(ticket => ({
                        ...ticket,
                        bookingCode: ticket.bookingCode ? replaceBookingCode(ticket.bookingCode, countries[countryCode].bookingCodePrefix) : generateBookingCode(countries[countryCode].bookingCodePrefix)
                    }))
                }
    
              setLoadedTickets(prev=>({...prev, tickets: tempTickets}));
            } else{
              console.log(data.message);
            }
          },
          error: (res)=>{
            console.log(res)
          }
        })

        if(!full) return;

        setTimeout(()=>{
            window.$.ajax({
              url: `${baseApiUrl}/get-balance.php`,
              dataType: 'JSON',
              type: 'POST',
              data: {user: user},
              success: (res)=>{
                // console.log(res)
                if(res.status = 'success') setBalance(res.data.balance)
                else setBalance(400)
              },
              error: (res)=>{
                // console.log(res)
                setBalance(400)
              }
            })
          }, 2000)
    
    }

    function getTransactions(){
        window.$.ajax({
            url: `${baseApiUrl}/get-transactions.php`,
            dataType: 'JSON',
            type: 'POST',
            data: {user: user, limit: 100},
            success: (res)=>{
              console.log(res)
              if(res.status = 'success') setTransactions(res.data.transactions)
              else setBalance(400)
            },
            error: (res)=>{
              console.log(res)
            }
        })
    }

    function getSportTypes(){
        console.log(`https://config.betwayafrica.com/cron/sports/${countries[countryCode].code}/${countries[countryCode].lang}`);
        window.$.ajax({
            url: `https://config.betwayafrica.com/cron/sports/${countries[countryCode].code}/${countries[countryCode].lang}`,
            type: 'GET',
            dataType: 'JSON',
            success: (res)=>{
                console.log(res)
                if(res){
                    setSportTypes(res.sports)
                }
            },
            timeout: 10000,
            error: (res)=>{
                setSportTypes([])
                console.log(res)
            },
            complete: (res)=>{
                // console.log(res)
            }
        })
    }

    function getHighlights(){
        window.$.ajax({
            url: countries[countryCode].highlightsLink,
            type: 'GET',
            dataType: 'JSON',
            success: (res)=>{
                // setHighlights(res.data.replace(/\x3C/gm, '<'))
                if(res){
                    console.log(res);
                    let structuredHighlights = res.events.reduce((acc, fixture) => {
                        const leagueId = fixture.leagueId;
                        const league = fixture.league;
                        const region = fixture.region;
                        const regionId = fixture.regionId;
            
                        // Initialize league array if it doesn't exist
                        if (!acc[leagueId]) {
                            acc[leagueId] = {
                                leagueId,
                                league,
                                region,
                                regionId,
                                fixtures: []
                            };
                        }
            
                        // Add fixture to the league's fixtures array
                        const straightWinMarket = res.markets.find(market => market.eventId == fixture.eventId && market.name == '[Win/Draw/Win]') || {};
                        const straightWinOutcomes = res.outcomes.filter(outcome => outcome.marketId == straightWinMarket.marketId);
                        straightWinOutcomes.map(swo => {
                            swo.odds = res.prices.find(price => price.outcomeId == swo.outcomeId).priceDecimal;
                        });
                        fixture.outcomes = straightWinOutcomes;


                        acc[leagueId].fixtures.push(fixture);
                        return acc;
                    }, {});
                    
                    console.log(structuredHighlights);
                    // structuredHighlights = sortLeaguesByFixtureCount(structuredHighlights);
                    
                    console.log(structuredHighlights);
                    setHighlights(Object.values(structuredHighlights));
                }
            },
            timeout: 10000,
            error: (res)=>{
                setHighlights([])
                console.log(res)
            },
            complete: (res)=>{
                // console.log(res)
            }
        })
    }

    function toggleDropDown(e, dropDownName = null){
        e.stopPropagation();
        if(dropDown == dropDownName){
            setDropDown(null);
        } else{
            setDropDown(dropDownName);
        }
    }

    function logout(){

        const ask = window.confirm("Are you sure you want to Logout?");
        if(ask){
            setUser(null);
            logoutCleanUp();
        }
    }

    function logoutCleanUp(){
        setLoadedTickets({
            tickets: [],
            openVisited: false,
            settledVisited: false
        });

        setBalance(0);

        setTransactions(null);
    }

    useEffect(()=>{
        const url = window.location.href;
        const urlParamSide = url.split('?')[1];
        const params = urlParamSide?.split('&');
        const allParams = {};
        if(params){
            for(const param of params){
                const paramSplit = param.split('=')
                allParams[paramSplit[0]] = paramSplit[1]
            }
        }
        const localCountryCode = localStorage.getItem('country');
        if(localCountryCode){
            setCountryCode(localCountryCode);
        } else{
            setCountryCode(0);
        }

        if(allParams.user){
            setUser(allParams.user);
        } else{
            const localUser = localStorage.getItem('user');
            if(localUser){
                setUser(localUser);
            }
        }
    }, [])

    useEffect(()=>{
        if(user){
            init();
            localStorage.setItem('user', user);
        } else{
            localStorage.removeItem('user');
        }
    }, [user])

    useEffect(()=>{
        if(popup){
            document.body.classList.add('scroll-lock');
        } else{
            document.body.classList.remove('scroll-lock');
        }
    }, [popup])

    useEffect(()=>{
        if(countryCode !== null) localStorage.setItem("country", countryCode);
        if(countries[countryCode]){
            setLoadedTickets(prev => ({
                ...prev,
                tickets: prev.tickets.map(ticket => ({
                    ...ticket,
                    bookingCode: ticket.bookingCode ? replaceBookingCode(ticket.bookingCode, countries[countryCode].bookingCodePrefix) : generateBookingCode(countries[countryCode].bookingCodePrefix)
                }))
            }))
        }
        if(countryCode == null) return
        getSportTypes();
        getHighlights();
    }, [countryCode])
    
    return (
        <AppContext.Provider value={{
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
            country: countries[countryCode],
            setCountryCode,
            dropDown,
            toggleDropDown,
            sportTypes,
            setSportTypes,
            highlights,
            setHighlights,
            subUrl,
            setSubUrl,
            init,
            lang: langs[countries[countryCode]?.lang || "en-US"],
            logout
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
export const useApp = () => useContext(AppContext);

