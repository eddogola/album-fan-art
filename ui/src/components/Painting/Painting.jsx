import React from "react";
import "./Painting.css";

export default function Painting({ painting, onClick }) {
    return (
        <div className="painting">
            <img className="painting-thumbnail img-fluid" src={ painting.src } alt={ painting.alt }
            onClick={ () => onClick(painting) } />
        </div>
    );
}