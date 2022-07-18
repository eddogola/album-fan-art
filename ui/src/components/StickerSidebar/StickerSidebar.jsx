import React from "react";
import barcode from './barcode.png';
import parentalAdvisory from './parental-advisory.png';
import Sticker from "../Sticker/Sticker";

export default function StickerSidebar({  }) {
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
        <div className="sticker-sidebar">
            { stickers.map((sticker, idx) => <Sticker sticker={ sticker } key={ "sticker-" + idx } />) }
        </div>
    )
}