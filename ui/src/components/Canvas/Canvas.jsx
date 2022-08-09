import React, { useEffect } from "react";
import { FabricJSCanvas } from "fabricjs-react";
import "./Canvas.css";

export default function Canvas({ onReady, editor }) {
    useEffect(() => {
        if (editor) {
          editor.setFillColor("#FFF");
          editor.canvas.backgroundColor = "white";
        }
      });

    return (
        <div className="inner-canvas-container">
            <FabricJSCanvas className="canvas mx-auto" onReady={ onReady }/>
        </div>
    );
}