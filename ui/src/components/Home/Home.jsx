import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import TextBar from '../TextBar/TextBar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import Footer from '../Footer/Footer';
import './Home.css';

export default function Home({ auth }) {
    const [activePhotoURL, setActivePhotoURL] = useState("");

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

    return (
        <div className="home">
            <div className="row">
                <div className="col-md-3 sidebar-wrapper">
                    <Sidebar onClickImage={onClickImage} />
                </div>
                <div className="col-md-7" style={{'padding': '0'}}>
                    {/* <TextBar onAddText={onAddText} onDelete={onDelete} /> */}
                    <MainContainer onReady={onReady} editor={editor} />
                    {/* <Footer onClick={onClickSaveImage} /> */}
                </div>
                <div className="col-md-2"  style={{'padding': '0'}}>
                    <StickerSidebar onClickSticker={onClickSticker} />
                </div>
            </div>
        </div>
    )
}