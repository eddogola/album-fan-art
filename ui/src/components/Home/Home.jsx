import React, { useState } from 'react';
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import axios from 'axios';
import Sidebar from '../Sidebar/Sidebar';
import MainContainer from '../MainContainer/MainContainer';
import StickerSidebar from '../StickerSidebar/StickerSidebar';
import Footer from '../Footer/Footer';
import './Home.css';

fabric.textureSize = 4096

export default function Home({ auth }) {
    const { editor, onReady } = useFabricJSEditor();
    const [isText, setIsText] = useState(false);
    const [activeColor, setActiveColor] = useState("#fff");

    // utility function to check if active object is a text one
    const isTextObj = () => {
        const activeObj = editor.canvas.getActiveObject();
        // found a text object
        return (activeObj && activeObj.hasOwnProperty('text'))
    }

    const canvasModifiedCallback = () => {
        if (isTextObj()) {
            setIsText(true);
        } else {
            setIsText(false);
        }
    };

    if (editor) {
        editor.canvas.on('object:added', canvasModifiedCallback);
        editor.canvas.on('object:removed', canvasModifiedCallback);
        editor.canvas.on('object:modified', canvasModifiedCallback);
    }

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
        const textbox = new fabric.Textbox('text', {
            fontSize: 50,
            fontFamily: 'Times new roman',
        })
        editor.canvas.add(textbox).setActiveObject(textbox);
    }

    function onDelete() {
        editor.canvas.remove(editor.canvas.getActiveObject());
    }

    function onChangeFontFamily(e) {
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fontFamily", e.target.value);
        editor.canvas.requestRenderAll();
    }

    function onChangeFontStyle(e) {
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fontStyle", e.target.value);
        editor.canvas.requestRenderAll();
    }

    function onChangeFontWeight(e) {
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fontWeight", e.target.value);
        editor.canvas.requestRenderAll();
    }

    function onChangeFontSize(e) {
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fontSize", e.target.value);
        editor.canvas.requestRenderAll();
    }

    function onColorChange(e) {
        setActiveColor(e.hex);
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fill", e.hex);
        editor.canvas.requestRenderAll();
    }

    function applyFilter(filter) {
        let activeFilter;

        switch (filter) {
            case "sepia":
                activeFilter = new fabric.Image.filters.Sepia();
                break;
            case "grayscale":
                activeFilter = new fabric.Image.filters.Grayscale();
                break;
            case "vintage":
                activeFilter = new fabric.Image.filters.Vintage();
                break;
            case "kodachrome":
                activeFilter = new fabric.Image.filters.Kodachrome();
                break;
            case "technicolor":
                activeFilter = new fabric.Image.filters.Technicolor();
                break;
            case "polaroid":
                activeFilter = new fabric.Image.filters.Polaroid();
                break;
            case "invert":
                activeFilter = new fabric.Image.filters.Invert();
                break;
            default:
                activeFilter = null
        }
        editor.canvas.backgroundImage.filters = [activeFilter]
        editor.canvas.backgroundImage.applyFilters();
        editor.canvas.renderAll();
    }

    return (
        <div className="home">
            <div className="row">
                <div className="col-md-3 sidebar-wrapper">
                    <Sidebar onClickImage={onClickImage} />
                </div>
                <div className="col-md-7" style={{ 'padding': '0' }}>
                    <MainContainer onReady={onReady} onAddText={onAddText} onDelete={onDelete} editor={editor}
                        onChangeFontFamily={ onChangeFontFamily } isText={ isText } onChangeFontStyle={ onChangeFontStyle}
                        onChangeFontWeight={ onChangeFontWeight } onChangeFontSize={ onChangeFontSize } 
                        activeColor={ activeColor} onColorChange={ onColorChange } 
                        applyFilter={ applyFilter }/>
                    <Footer onClick={onClickSaveImage} />
                </div>
                <div className="col-md-2" style={{ 'padding': '0' }}>
                    <StickerSidebar onClickSticker={onClickSticker} />
                </div>
            </div>
        </div>
    )
}