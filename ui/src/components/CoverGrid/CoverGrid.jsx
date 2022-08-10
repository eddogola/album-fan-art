import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cover from "../Cover/Cover";

export default function CoverGrid({ auth }) {
    const [covers, setCovers] = useState([]);

    const getCovers = (nickname) => {
        axios.get("/covers", {
            params: {
                nickname: nickname,
            },
        })
            .then((response) => {
                setCovers(response.data);
            }).catch(err => console.log("Error retrieving user covers:", err));
    };

    useEffect(
        () => getCovers(auth.nickname),
        [auth]
    );

    return (
        <div className="cover-grid container">
            <h1 className="display-1">Your covers</h1>
            <p className="lead">
                Here are some of the cool album covers you've made!
            </p>
            <p className="muted">
                <Link to="/" style={{"textDecoration": "none"}}>(go back home)</Link>
            </p>
            <div className="row">
                {
                    covers.map((cover, idx) => ( 
                        <div className="col-md-4" key={"cover" + idx}>
                            <Cover b64Img={ cover.body } />
                        </div>
                        
                        )
                    )
                }
            </div>
        </div>
    );
}