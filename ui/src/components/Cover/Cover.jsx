import React from "react";
import './Cover.css';

export default function Cover({ b64Img }) {
    return (
        <div className="cover">
            <img src={ b64Img } alt="" />
        </div>
    )
}