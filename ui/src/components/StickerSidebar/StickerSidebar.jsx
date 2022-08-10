import React from "react";
import { Link } from "react-router-dom";
import barcode from "./barcode.png";
import parentalAdvisory from "./parental-advisory.png";
import monaLisa from "./mona_lisa.jpg";
import starryNight from "./starry_night.jpeg";
import kanagawa from "./kanagawa.jpg";
import screamingMan from "./screaming-man.jpeg";
import acrylicPainting from "./acrylic-painting.jpg";
import fragonard from "./fragonard.jpg";
import Sticker from "../Sticker/Sticker";
import Painting from "../Painting/Painting";
import "./StickerSidebar.css";

export default function StickerSidebar({ onClickSticker, onClickPainting }) {
    const stickers = [
        {
            "src": barcode,
            "alt": "barcode",
        },
        {
            "src": parentalAdvisory,
            "alt": "parental-advisory",
        }
    ];

    const paintings = [
        {
            "src": monaLisa,
            "alt": "mona lisa",
        },
        {
            "src": starryNight,
            "alt": "starry night - van Gogh"
        },
        {
            "src": kanagawa,
            "alt": "the great wave of kanagawa",
        },
        {
            "src": screamingMan,
            "alt": "screaming man by edvard munch"
        },
        {
            "src": acrylicPainting,
            "alt": acrylicPainting,
        }, {
            "src": fragonard,
            "alt": "Fragonard painting"
        }
    ];

    return (
        <div className="sticker-sidebar col-md-10 mx-auto overflow-auto">
            <div className="row">
                <div className="col-md-6">
                    <Link className="btn btn-secondary" to="covers">Covers</Link>
                </div>
                <div className="col-md-6">
                <a className="btn btn-primary" 
                    href="/auth/logout"
                    data-bs-toggle="tooltip" 
                    data-bs-placement="bottom"
                    data-trigger="hover"  
                    title="Sign Out">
                        <i className="bi bi-box-arrow-right"></i>
                </a>
                </div>
            </div>
            <nav className="pt-2">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="stickers-tab" data-bs-toggle="tab" data-bs-target="#stickers" type="button" role="tab" aria-controls="nav-stickers" aria-selected="true">Stickers</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#paintings" type="button" role="tab" aria-controls="nav-paintings" aria-selected="false">Paintings</button>
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="stickers" role="tabpanel" aria-labelledby="stickers" tabIndex="0">
                { stickers.map((sticker, idx) => <Sticker sticker={ sticker } onClick={ onClickSticker } key={ "sticker-" + idx } />) }
            </div>
            <div className="tab-pane fade" id="paintings" role="tabpanel" aria-labelledby="stickers" tabIndex="0">
                <div className="text-dark">Apply neural style transfer to your images</div>
                { paintings.map((painting, idx) => <Painting painting={ painting } onClick={ onClickPainting } key={ "painting-" + idx } />) }
            </div>
            </div>
        </div>
    );
}