import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import Sidebar from '../Sidebar/Sidebar';
import TextBar from '../TextBar/TextBar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home({ auth }) {
    const [activePhotoURL, setActivePhotoURL] = useState("");
    // const [activeBackground, setActiveBackground] = useState(null);

    const { editor, onReady } = useFabricJSEditor();

    function onClickImage(photo) {
        // setActivePhotoURL(photo.links.download);
        setActivePhotoURL(photo.urls.full);

        if (activePhotoURL !== "") {

            fabric.Image.fromURL(activePhotoURL, img => {
                img.scaleToWidth(650);
                img.scaleToHeight(800);
                editor.canvas.setBackgroundImage(img);
                editor.canvas.renderAll();
                editor.canvas.add(img);
            }, 
            {
                "crossOrigin": "anonymous",
            }
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
        // editor.canvas.toSVG();
    }

    function onAddText() {
        editor.addText("text");
    }

    function onDelete() {
        editor.canvas.remove(editor.canvas.getActiveObject());
    }

    if (editor) {
        const activeObject = editor.canvas.getActiveObject();
        if (activeObject) {
            console.log(activeObject.get('type'))
        }
    }

    return (
        <div className="home">
            <Sidebar onClickImage={onClickImage} />
            {/* <h1>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</h1>
                <h1><a className='App-header' href={ "/auth/logout" }>Logout</a></h1> */}
            <TextBar onAddText={onAddText} onDelete={onDelete} />
            <MainContainer onReady={onReady} editor={editor} />
            <Footer onClick={onClickSaveImage} />
            <StickerSidebar onClickSticker={onClickSticker} />
        </div>
    )
}