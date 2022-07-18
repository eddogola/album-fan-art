import React from "react";
import TextBar from "../TextBar/TextBar";
import WorkingArea from "../WorkingArea/WorkingArea";
import Footer from "../Footer/Footer";
import './MainContainer.css';

export default function MainContainer({ onReady, editor }) {
    return (
        <div className="main-container">
            <TextBar />
            <WorkingArea onReady={ onReady } editor={ editor } />
        </div>
    )
}