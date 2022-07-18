import React from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import './Canvas.css';

export default function Canvas({  }) {
    return (
        <div className="inner-canvas-container">
            <FabricJSCanvas className="canvas" />
        </div>
    )
}