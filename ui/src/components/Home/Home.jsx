import React, { useState } from "react";
import { fabric } from "fabric";
import { useFabricJSEditor } from "fabricjs-react";
import * as mi from "@magenta/image";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import MainContainer from "../MainContainer/MainContainer";
import StickerSidebar from "../StickerSidebar/StickerSidebar";
import Footer from "../Footer/Footer";
import "./Home.css";

fabric.textureSize = 4096;

export default function Home({ auth }) {
    const { editor, onReady } = useFabricJSEditor();
    const [isText, setIsText] = useState(false);
    const [activeColor, setActiveColor] = useState("#fff");

    // utility function to check if active object is a text one
    const isTextObj = () => {
        const activeObj = editor.canvas.getActiveObject();
        // found a text object
        return (activeObj && activeObj.hasOwnProperty("text"));
    };

    const canvasModifiedCallback = () => {
        if (isTextObj()) {
            setIsText(true);
        } else {
            setIsText(false);
        }
    };

    if (editor) {
        editor.canvas.on("object:added", canvasModifiedCallback);
        editor.canvas.on("object:removed", canvasModifiedCallback);
        editor.canvas.on("object:modified", canvasModifiedCallback);
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
        );
    }

    function onClickSticker(sticker) {
        fabric.Image.fromURL(sticker.src, img => {
            img.scaleToHeight(90);
            img.scaleToWidth(160);
            editor.canvas.setActiveObject(img);
            editor.canvas.add(img);
        },
            {
                "crossOrigin": "anonymous",
            });
    }

    function onClickPainting(painting) {
        if (editor.canvas.backgroundImage) {
            fabric.Image.fromURL(painting.src, img => {
                img.scaleToHeight(90);
                img.scaleToWidth(160);
                model.initialize().then(() => { stylize(painting.src); });
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
        axios.post("/save-image", { data: base64, auth: auth })
            .then(response => {
                console.log("saved to database");
            }).catch(err => {
                console.log("error trying to save to database:", err);
            });
    }

    function onAddText() {
        const textbox = new fabric.Textbox("text", {
            fontSize: 50,
            fontFamily: "Times new roman",
        });
        editor.canvas.add(textbox).setActiveObject(textbox);
    }

    function onDelete() {
        editor.canvas.remove(editor.canvas.getActiveObject());
    }

    function onColorChange(e) {
        setActiveColor(e.hex);
        const textObject = editor.canvas.getActiveObject();
        textObject.set("fill", e.hex);
        editor.canvas.requestRenderAll();
    }

    const model = new mi.ArbitraryStyleTransferNetwork();

    function stylize(paintingSrc) {
        const contentImg = new Image();
        contentImg.width = 650;
        contentImg.height = 800;
        contentImg.crossOrigin = "anonymous";
        contentImg.src = editor.canvas.backgroundImage.getSrc();
        const styleImg = new Image();
        styleImg.width = 256;
        styleImg.height = 256;
        styleImg.crossOrigin = "anonymous";
        styleImg.src = paintingSrc;

        if (contentImg.src !== "" && styleImg.src !== "") {
            setTimeout(()=> {model.stylize(contentImg, styleImg).then((imgData) => {
                let c = document.createElement("canvas");
                c.setAttribute("id", "stylized");
                c.width = 650;
                c.height = 800;
                c.getContext("2d").putImageData(imgData, 0, 0);
                console.log(imgData);
                fabric.Image.fromURL(c.toDataURL(), (img) => {
                    editor.canvas.setBackgroundImage(img);
                    c = null;
                    editor.canvas.renderAll();
                });
            });}, 50);
            
        }
    }

    return (
        <div className="home">
            <div className="row">
                <div className="col-md-3 sidebar-wrapper">
                    <Sidebar onClickImage={onClickImage} />
                </div>
                <div className="col-md-7" style={{ "padding": "0" }}>
                    <MainContainer onReady={onReady} onAddText={onAddText} onDelete={onDelete} editor={editor}
                        isText={ isText } activeColor={ activeColor} onColorChange={ onColorChange } />
                    <Footer onClick={onClickSaveImage} />
                </div>
                <div className="col-md-2" style={{ "padding": "0" }}>
                    <StickerSidebar onClickSticker={onClickSticker} onClickPainting={ onClickPainting } />
                </div>
            </div>
        </div>
    );
}