import { useApp } from "../contexts/appContext";

const Search = () => {

    const {lang} = useApp();
    return(
        <div className="wc-SearchBar ">
            <div className="wc-SearchBar_Inner">
                <div className="wc-SearchBar_Icon" />
                <div className="wc-SearchBar_Text ">
                    {lang["Search"]}
                </div>
            </div>
        </div>

    )
}

export default Search;