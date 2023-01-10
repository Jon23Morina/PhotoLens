import { Link } from "react-router-dom";

function Header (){
    return(
        <header className="header">
            <nav>
                <ul>
                    <Link to="/" className="navLinks">Home</Link>
                    <Link to="/post" className="navLinks">Post</Link>
                    <Link to="/album" className="navLinks">Album</Link>
                </ul>
            </nav>
        </header>
    )
    
}

export default Header;