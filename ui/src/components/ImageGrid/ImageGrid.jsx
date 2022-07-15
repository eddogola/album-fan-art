import React from "react";
import './ImageGrid.css';
import Image from "../Image/Image";

export default function ImageGrid({ photos }) {
    return (
        <div className="image-grid">
            { photos.map((photo, idx) => <Image photo={ photo } key={`image-${idx}`} />) }
        </div>
    )
}