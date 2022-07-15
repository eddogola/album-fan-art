import React from "react";
import './SearchBar.css';

export default function SearchBar({  }) {
    return (
        <div className="search-bar">
            <form method="get">
                <input type="search" name="search-bar" id="search-bar" placeholder="Search photo" />
            </form>
        </div>
    )
}