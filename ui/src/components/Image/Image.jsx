import React from "react";
import './Image.css';

export default function Image({ photo, id, onClick }) {
    return (
        <div className="image col-md-6">
            <div className="card mb-2">
                <img className="img-fluid" id={ "pic-" + id } src={photo.links.download + "?force=true"} alt={ photo.alt_description }
                onClick={ () => {
                    onClick(photo);
                } } />
            </div>
        </div>
    )
}