import React from "react";
import { Link } from 'react-router-dom';
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
            <h2 className="text-center">Stickers</h2>
            { stickers.map((sticker, idx) => <Sticker sticker={ sticker } onClick={ onClickSticker } key={ "sticker-" + idx } />) }
        </div>
    )
}