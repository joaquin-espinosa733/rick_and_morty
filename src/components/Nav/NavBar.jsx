import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

export default function NavBar({onSearch, logout}) {
    return(
        <div className={styles.container}>
            <Link to="/">
            <button onClick={logout} className={styles.inputss}>login in</button>
            </Link>
            <Link to="/home">
            <button>Home</button>
            </Link>
            <Link to="/About">
            <button className={styles.inputss}>About</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}