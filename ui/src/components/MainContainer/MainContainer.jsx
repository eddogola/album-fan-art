import React from "react";
import WorkingArea from "../WorkingArea/WorkingArea";
import TextBar from "../TextBar/TextBar";
import "./MainContainer.css";

export default function MainContainer({ onReady, editor, onAddText, onDelete, isText, activeColor, onColorChange, applyFilter }) {
    return (
        <div className="main-container">
            <TextBar onAddText={onAddText} onDelete={onDelete} isText={ isText } 
                activeColor={ activeColor } onColorChange={ onColorChange } editor={ editor } />
            <WorkingArea onReady={ onReady } editor={ editor } />
        </div>
    );
}