import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { createApi } from 'unsplash-js';
import SearchBar from '../SearchBar/SearchBar';
import ImageGrid from '../ImageGrid/ImageGrid';

const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    }
)

export default function Sidebar({ setActivePhoto }) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        try {
            unsplash.search
                .getPhotos({
                    query: "music",
                })
                .then(result => {
                    photos.length ? 
          setPhotos([...photos, ...result.response.results]) : setPhotos(result.response.results);
                })
        } catch(err) {
            console.log("Unable to retrieve photos. Reason: ", err);
        }
    }, [photos])

    return (
        <div className="sidebar">
            <SearchBar />
            <ImageGrid photos={ photos } setActivePhoto={ setActivePhoto } />
        </div>
    )
}