import React from "react";
import './ImageGrid.css';
import Image from "../Image/Image";

export default function ImageGrid({ photos, setActivePhoto }) {
    return (
        <div className="image-grid">
            { photos.map((photo, idx) => <Image setActivePhoto={ setActivePhoto } photo={ photo } id={idx} key={`image-${idx}`} />) }
        </div>
    )
}