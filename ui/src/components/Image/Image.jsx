import React from "react";
import './Image.css';

export default function Image({ photo, id }) {
    return (
        <div className="image">
            <img className="img-thumbnail" id={ "pic-" + id } src={photo.links.download + "?force=true"} alt={ photo.alt_description } />
        </div>
    )
}