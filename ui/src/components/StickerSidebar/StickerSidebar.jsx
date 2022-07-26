import React from "react";
import barcode from './barcode.png';
import parentalAdvisory from './parental-advisory.png';
import Sticker from "../Sticker/Sticker";
import './StickerSidebar.css';

export default function StickerSidebar({ onClickSticker }) {
    const stickers = [
        {
            'src': barcode,
            'alt': 'barcode',
        },
        {
            'src': parentalAdvisory,
            'alt': 'parental-advisory',
        },
    ];

    return (
        <div className="sticker-sidebar col-md-10 mx-auto">
            <h2 className="text-center">Stickers</h2>
            { stickers.map((sticker, idx) => <Sticker sticker={ sticker } onClick={ onClickSticker } key={ "sticker-" + idx } />) }
        </div>
    )
}