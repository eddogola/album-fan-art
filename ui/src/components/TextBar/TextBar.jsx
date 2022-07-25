import React from "react";
import { Link } from 'react-router-dom';
import './TextBar.css';

export default function TextBar({ onAddText, onDelete }) {
    return (
        <div className="text-bar">
            <button onClick={ onAddText }>Add text</button>
            <Link to="covers">Your covers</Link>
            {/* Load fonts */}
            <p style={ {fontFamily: 'cursive'} }>cursive</p>
            <select name="font-families" className="font-families" id="font-families">
                <optgroup style={ {fontFamily: 'cursive'} }>
                    <option value="cursive" >Cursive</option>
                </optgroup>
            </select>
            {/* Load font sizes */}
            {/* Load font weights */}
            {/* Load colors */}
            <button onClick={ onDelete }>Delete</button>
        </div>
    )
}