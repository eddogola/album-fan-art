import React from "react";
import './TextBar.css';

export default function TextBar({ onAddText, onDelete }) {
    return (
        <div className="text-bar">
            <button onClick={ onAddText }>Add text</button>
            <button onClick={ onDelete }>Delete</button>
        </div>
    )
}