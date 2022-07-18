import React from "react";
import './Sticker.css';

export default function Sticker({ sticker }) {
    return (
        <div className="sticker">
            <img className="sticker-thumbnail" src={ sticker.src } alt={ sticker.alt } />
        </div>
    )
}