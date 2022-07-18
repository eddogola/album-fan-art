import React from "react";
import { FabricJSCanvas } from "fabricjs-react";
import './Canvas.css';

export default function Canvas({ onReady }) {
    return (
        <div className="inner-canvas-container">
            <FabricJSCanvas className="canvas" onReady={ onReady }/>
        </div>
    )
}