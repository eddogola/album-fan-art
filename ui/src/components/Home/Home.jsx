import logo from './logo.svg';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';

export default function Home({ auth }) {
    return (
        <div className="Home">
            <Sidebar />
            <main className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>You are logged in as {auth && auth.nickname ? auth.nickname : null} :)</p>
                <a className='App-header' href={ "/auth/logout" }>Logout</a>
            </main>
        </div>
    )
}