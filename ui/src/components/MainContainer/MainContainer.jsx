import React from "react";
import WorkingArea from "../WorkingArea/WorkingArea";
import './MainContainer.css';

export default function MainContainer({ onReady, editor }) {
    return (
        <div className="main-container">
            <WorkingArea onReady={ onReady } editor={ editor } />
        </div>
    )
}