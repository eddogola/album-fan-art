import React from "react";
import './ImageGrid.css';
import Image from "../Image/Image";

export default function ImageGrid({ photos, onClickImage }) {
    return (
        <div className="image-grid">
            { photos.map((photo, idx) => <Image onClick={ onClickImage } photo={ photo } id={idx} key={`image-${idx}`} />) }
        </div>
    )
}