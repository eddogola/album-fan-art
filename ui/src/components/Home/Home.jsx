import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import './Home.css';

export default function Home({ auth }) {
    const [activePhotoURL, setActivePhotoURL] = useState("");

    const { editor, onReady } = useFabricJSEditor();

    function onClickImage(photo) {
        setActivePhotoURL(photo.links.download);
        if (activePhotoURL !== "") {
            fabric.Image.fromURL(activePhotoURL, img => {
                // editor.canvas.setBackgroundImage(img);
                // editor.canvas.renderAll();
                // img.scaleToHeight(3000);
                // img.scaleToWidth(3000);
                editor.canvas.add(img);
            })
        }
    }

    function onClickSticker(sticker) {
        setActivePhotoURL(sticker.src);
        if (activePhotoURL !== "") {
            fabric.Image.fromURL(activePhotoURL, img => {
                img.scaleToHeight(900);
                img.scaleToWidth(1200);
                editor.canvas.add(img);
            });
        }
    }

    return (
        <div className="home">
            <Sidebar onClickImage={onClickImage} />
            {/* <h1>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</h1>
                <h1><a className='App-header' href={ "/auth/logout" }>Logout</a></h1> */}
            <MainContainer onReady={onReady} editor={editor} />
            <StickerSidebar onClickSticker={ onClickSticker } />
        </div>
    )
}