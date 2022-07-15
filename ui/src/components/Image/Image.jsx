import React from "react";
import './Image.css';

export default function Image({ photo }) {
    return (
        <div className="image">
            <img className="img-thumbnail" src={photo.links.download + "?force=true"} alt={ photo.alt_description } />
        </div>
    )
}