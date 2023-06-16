import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar({onSearch}) {
    return(
        <div>
            <Link to="/About">
            <button>About</button>
            </Link>
            <Link to="/home">
            <button>Home</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}