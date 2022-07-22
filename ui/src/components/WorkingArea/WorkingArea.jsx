import React from "react";
import Canvas from "../Canvas/Canvas";

export default function WorkingArea({ onReady, editor }) {
    return (
        <div className="working-area">
            <Canvas onReady={ onReady } editor={ editor } />
        </div>
    )
}