import React from "react";
import './SearchBar.css';

export default function SearchBar({ setQuery, setPhotos, setIsLoading, formRef }) {

    return (
        <div className="search-bar">
            <form method="get" ref={ formRef }>
                <div className="input-group">
                    <input type="search" name="search-bar" id="search-bar" placeholder="Search photo ..."
                    onChange={ (event) => {
                        if (event.target.value !== "") {
                            setQuery(event.target.value);
                            setIsLoading(true);
                            setPhotos([]);
                        } else {
                            setQuery("album");
                            setPhotos([]);
                        }
                    } } />
                </div>
            </form>
        </div>
    )
}