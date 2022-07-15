import './Home.css';
import Sidebar from '../Sidebar/Sidebar';

export default function Home({ auth }) {
    return (
        <div className="home">
            <Sidebar />
            <main className="canvas-container">
                <h1>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</h1>
                <h1><a className='App-header' href={ "/auth/logout" }>Logout</a></h1>
            </main>
        </div>
    )
}