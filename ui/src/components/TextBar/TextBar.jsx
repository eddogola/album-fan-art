import React, { useEffect } from "react";
import { fabric } from "fabric";
import { ChromePicker } from 'react-color';
import { Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Fonts from './fonts.json';
import './TextBar.css';

export default function TextBar({ onAddText, onDelete, onChangeFontFamily, isText,
    onChangeFontStyle, onChangeFontWeight,
    activeColor, onColorChange, applyFilter }) {
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

    useEffect(() => {
        const colorBtn = document.querySelector('[data-bs-toggle="popover"]');
        if (colorBtn) {
            new Popover(colorBtn);
        }
    }, [])

    return (
        <div className="text-bar row">
            <div className="col-md-1">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        filters
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={ () => applyFilter("sepia") }>Sepia</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("grayscale") }>Grayscale</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("vintage") }>Vintage</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("kodachrome") }>Kodachrome</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("technicolor") }>Technicolor</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("polaroid") }>Polaroid</button></li>
                        <li><button className="dropdown-item" onClick={ () => applyFilter("invert") }>Invert</button></li>
                        <div class="dropdown-divider"></div>
                        <li><button className="dropdown-item" onClick={ () => applyFilter() }>Clear</button></li>
                    </ul>
                </div>
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
                <button className="Btn btn btn-danger" onClick={ onDelete }>Delete</button>
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