import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import './SearchBar.css';

export default function SearchBar({ setQuery, setPhotos, setIsLoading, formRef }) {

    return (
        <div className="search-bar">
            <form method="get" ref={ formRef }>
                <div className="input-group ">
                    <input type="search" className="form-control border-end-0 border" name="search-bar" id="search-bar" placeholder="Search photo ..."
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
                    <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                    </span>
                </div>
            </form>
        </div>
    )
}