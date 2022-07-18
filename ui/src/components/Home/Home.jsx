import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import './Home.css';

export default function Home({ auth }) {
    const [activePhoto, setActivePhoto] = useState(null);
    return (
        <div className="home">
            <Sidebar setActivePhoto={ setActivePhoto } />
            <main className="canvas-container">
                <h1>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</h1>
                <h1><a className='App-header' href={ "/auth/logout" }>Logout</a></h1>
                <Canvas activePhoto={ activePhoto } setActivePhoto={ setActivePhoto } />
            </main>
        </div>
    )
}