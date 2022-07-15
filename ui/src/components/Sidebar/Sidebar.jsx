import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    }
)

export default function Sidebar(props) {
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
            { photos.map((pic, idx) => <img src={pic.links.download + "?force=true"} alt={ pic.alt_description } key={ idx }/>) }
        </div>
    )
}