import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home({ auth }) {
    const { editor, onReady } = useFabricJSEditor();

    function onClickImage(photo) {
        fabric.Image.fromURL(photo.urls.full, img => {
            img.scaleToWidth(650);
            img.scaleToHeight(800);
            editor.canvas.setBackgroundImage(img);
            editor.canvas.renderAll();
        },
            {
                "crossOrigin": "anonymous",
            }
        )
    }

    function onClickSticker(sticker) {
        fabric.Image.fromURL(sticker.src, img => {
            img.scaleToHeight(90);
            img.scaleToWidth(160);
            editor.canvas.add(img);
        },
            {
                "crossOrigin": "anonymous",
            });
    }

    function onClickSaveImage() {
        // downloads the image to local storage
        const ext = "png";
        const base64 = editor.canvas.toDataURL({
            format: ext,
            enableRetinaScaling: true
        });
        const link = document.createElement("a");
        link.href = base64;
        link.download = `album-art.${ext}`;
        link.click();

        // save base64 string to database
        axios.post('http://localhost:3001/save-image', { data: base64, auth: auth })
            .then(response => {
                console.log("saved to database");
            }).catch(err => {
                console.log("error trying to save to database:", err);
            })
    }

    function onAddText() {
        editor.addText("text");
    }

    function onDelete() {
        editor.canvas.remove(editor.canvas.getActiveObject());
    }

    function onLogout() {
        axios.get('http://localhost:3001/auth/logout')
            .then(response => {
                console.log("logged out");
            }).catch(err => {
                console.log("error trying to log out:", err);
            })
    }

    return (
        <div className="home">
            <div className="row">
                <div className="col-md-3 sidebar-wrapper">
                    <Sidebar onClickImage={onClickImage} />
                </div>
                <div className="col-md-7" style={{ 'padding': '0' }}>
                    <MainContainer onReady={onReady} onAddText={onAddText} onDelete={onDelete} editor={editor} onLogout={onLogout} />
                    <Footer onClick={onClickSaveImage} />
                </div>
                <div className="col-md-2" style={{ 'padding': '0' }}>
                    <StickerSidebar onClickSticker={onClickSticker} />
                </div>
            </div>
        </div>
    )
}