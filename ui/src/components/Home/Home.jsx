import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import Footer from '../Footer/Footer';
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
                img.scaleToHeight(800);
                img.scaleToWidth(650);
                editor.canvas.add(img);
            }
            // , {"crossOrigin": "anonymous",}
            )
        }
    }

    function onClickSticker(sticker) {
        setActivePhotoURL(sticker.src);
        if (activePhotoURL !== "") {
            fabric.Image.fromURL(activePhotoURL, img => {
                img.scaleToHeight(90);
                img.scaleToWidth(160);
                editor.canvas.add(img);
            }, 
            {
                "crossOrigin": "anonymous",
            });
        }
    }

    function onClickSaveImage() {
        const ext = "png";
        const base64 = editor.canvas.toDataURL({
            format: ext,
            enableRetinaScaling: true
        });
        const link = document.createElement("a");
        link.href = base64;
        link.download = `album-art.${ext}`;
        link.click();
    }

    return (
        <div className="home">
            <Sidebar onClickImage={onClickImage} />
            {/* <h1>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</h1>
                <h1><a className='App-header' href={ "/auth/logout" }>Logout</a></h1> */}
            <MainContainer onReady={onReady} editor={editor} />
            <Footer onClick={onClickSaveImage} />
            <StickerSidebar onClickSticker={onClickSticker} />
        </div>
    )
}