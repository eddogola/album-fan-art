import React from "react";
import './SignIn.css';
import pic from "./undraw_happy_music_g6wc.svg";

export default function SignIn(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <h1 className="display-1">Feeling inspired?</h1>
                    <h2 className="display-2">channel it to making an album cover :-)</h2>
                    <p className="lead muted">for your own</p>
                    <a href="/auth/login" className="getStartedBtn btn btn-lg btn-primary mt-4">Get started</a>
                </div>
                <div className="col-md-4 m-2">
                    <img src={ pic } alt="" srcset="" />
                </div>
            </div>
            <div className="sign-in">
        </div>
        </div>
    )
}