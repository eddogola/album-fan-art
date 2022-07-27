import React from "react";
import WorkingArea from "../WorkingArea/WorkingArea";
import TextBar from "../TextBar/TextBar";
import './MainContainer.css';

export default function MainContainer({ onReady, editor, onAddText, onDelete, onLogout }) {
    return (
        <div className="main-container">
            <TextBar onAddText={onAddText} onDelete={onDelete} onLogout={ onLogout } />
            <WorkingArea onReady={ onReady } editor={ editor } />
        </div>
    )
}