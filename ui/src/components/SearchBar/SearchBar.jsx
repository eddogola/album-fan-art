import React from "react";
import './SearchBar.css';

export default function SearchBar({ setQuery, setPhotos, setIsLoading }) {
    return (
        <div className="search-bar">
            <form method="get">
                <input type="search" name="search-bar" id="search-bar" placeholder="Search photo"
                onChange={ (event) => {
                    setQuery(event.target.value);
                    setIsLoading(true);
                    setPhotos([]);
                } } />
            </form>
        </div>
    )
}