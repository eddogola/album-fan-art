import logo from './logo.svg';
import './Home.css';

export default function Home(props) {
    return (
        <div className="Home">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>You are logged in :)</p>
                <a className='App-header' href={ "/auth/logout" }>Logout</a>
            </header>
        </div>
    )
}