import React from "react";

export default function Sticker({ sticker }) {
    return (
        <div className="sticker">
            <img src={ sticker.src } alt={ sticker.alt } />
        </div>
    )
}