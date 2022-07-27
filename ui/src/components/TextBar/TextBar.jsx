import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './TextBar.css';

export default function TextBar({ onAddText, onDelete, onLogout }) {
    return (
        <div className="text-bar row">
            <div className="col-md-4">
                <Link className="btn btn-secondary" to="covers">Your covers</Link>
            </div>
            <div className="col-md-4 offset-md-4">
                <button className="Btn btn btn-light" onClick={ onAddText }>Add text</button>
                {/* Load fonts */}
                {/* Load font sizes */}
                {/* Load font weights */}
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
            
        </div>
    )
}