import React, { useState, useEffect } from "react";
import axios from "axios";
import Cover from '../Cover/Cover';

export default function CoverGrid({ auth }) {
    const [covers, setCovers] = useState([]);

    const getCovers = (nickname) => {
        axios.get('http://localhost:3001/covers', {
            params: {
                nickname: nickname,
            },
        })
            .then((response) => {
                setCovers(response.data);
            }).catch(err => console.log("Error retrieving user covers:", err))
    }

    useEffect(
        () => getCovers(auth.nickname),
        [auth]
    )

    return (
        <div className="cover-grid">
            {/* return user covers */}
            {/* hit `covers` endpoint */}
            <h1>Your covers</h1>
            {
                covers.map((cover, idx) => <Cover b64Img={ cover.body } key={'cover' + idx} />)
            }
        </div>
    )
}