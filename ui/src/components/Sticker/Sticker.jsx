import React from "react";
import "./Sticker.css";

export default function Sticker({ sticker, onClick }) {
    return (
        <div className="sticker">
            <img className="sticker-thumbnail" src={ sticker.src } alt={ sticker.alt }
            onClick={ () => onClick(sticker) } />
        </div>
    );
}