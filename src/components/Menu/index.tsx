import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <header>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/about' state={`This is state from ABOUT`}>ABOUT</Link>
                <Link to='/post'>POST</Link>
                <Link to='/redirect'>REDIRECT</Link>
            </nav>
        </header>
    )
}