import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import { Popover } from 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Fonts from './fonts.json';
import './TextBar.css';

export default function TextBar({ onAddText, onDelete, onChangeFontFamily, isText,
    onChangeFontStyle, onChangeFontWeight, onChangeFontSize,
    activeColor, onColorChange }) {
    const fontStyles = [
        'normal',
        'italic',
        'oblique',
    ]
    const fontWeights = [
        '100',
        '200',
        '300',
        'normal',
        '500',
        '600',
        'bold',
        '800',
        '900',
    ]
    const fontFamilies = Fonts["font-families"];
    const fontSizes = [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        20,
        24,
        32,
        36,
        40,
        48,
        64,
        96,
        128,
    ]

    useEffect(() => {
        const colorBtn = document.querySelector('[data-bs-toggle="popover"]');
        if (colorBtn) {
            new Popover(colorBtn);
        }
    }, [])

    return (
        <div className="text-bar row">
            <div className="col-md-1">
                <Link className="btn btn-secondary" to="covers">Covers</Link>
            </div>
            <div className="col-md-1">
                <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={ !isText }>
                    color
                </button>
            </div>
            {/* <div className="col-md-1">
                <select name="font-size" defaultValue="12" id="" className="form-select"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Font Size"
                    onChange={ onChangeFontSize }
                    disabled={ !isText }>
                    { fontSizes.map((size, idx) => <option key={ 'fontSize-' + idx } value={ size }>{ size }</option> ) }
                </select>
            </div> */}
            <div className="col-md-3">
                <select name="font-family" defaultValue="Times, Times New Roman, serif" id="" className="form-select"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Font Family"
                onChange={ onChangeFontFamily }
                disabled={ !isText }>
                    { fontFamilies.map((family, idx) => <option key={ 'fontFamily-' + idx } value={ family }>{ family }</option> ) }
                </select>
            </div>
            <div className="col-md-2">
                <select name="font-style" defaultValue="normal" id="" className="form-select"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Font Style"
                    onChange={ onChangeFontStyle }
                    disabled={ !isText }>
                    { fontStyles.map((style, idx) => <option key={ 'fontStyle-' + idx } value={ style }>{ style }</option> ) }
                </select>
            </div>
            <div className="col-md-2">
                <select name="font-weight" defaultValue="normal" id="" className="form-select"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Font Weight"
                    onChange={ onChangeFontWeight }
                    disabled={ !isText }>
                    { fontWeights.map((weight, idx) => <option key={ 'fontWeight-' + idx } value={ weight }>{ weight }</option> ) }
                </select>
            </div>
            <div className="col-md-3">
                <button className="Btn btn btn-light" onClick={ onAddText }>Add text</button>
                {/* Load colors */}
                <button className="Btn btn btn-danger" onClick={ onDelete }>Delete</button>
                <a className="btn btn-primary" 
                    href="http://localhost:3001/auth/logout"
                    data-bs-toggle="tooltip" 
                    data-bs-placement="bottom"
                    data-trigger="hover" 
                    title="Sign Out">
                        <i className="bi bi-box-arrow-right"></i>
                </a>
            </div>
            
            <div className="modal" tabIndex="-1" id="exampleModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Pick text color</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body mx-auto">
                        <ChromePicker
                            color={ activeColor }
                            onChange={ onColorChange } />
                    </div>
                    <div className="modal-footer mx-auto">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}