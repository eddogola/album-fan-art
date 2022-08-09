import React from "react";
import WorkingArea from "../WorkingArea/WorkingArea";
import TextBar from "../TextBar/TextBar";
import "./MainContainer.css";

export default function MainContainer({ onReady, editor, onAddText, onDelete, onChangeFontFamily, isText,
    onChangeFontStyle, onChangeFontWeight, onChangeFontSize, activeColor, onColorChange, applyFilter }) {
    return (
        <div className="main-container">
            <TextBar onAddText={onAddText} onDelete={onDelete} onChangeFontFamily={ onChangeFontFamily } 
                isText={ isText } onChangeFontStyle={ onChangeFontStyle } onChangeFontWeight={ onChangeFontWeight }
                onChangeFontSize={ onChangeFontSize } activeColor={ activeColor } onColorChange={ onColorChange }
                applyFilter={ applyFilter } />
            <WorkingArea onReady={ onReady } editor={ editor } />
        </div>
    );
}