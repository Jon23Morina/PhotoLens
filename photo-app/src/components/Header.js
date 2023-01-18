import { Link } from "react-router-dom";

//Import css file
import '../Css/MainComponents.css'

//Bootstrap Components
import Container from 'react-bootstrap/Container';

function Header (){
    return(
        <Container fluid className="header">
            <h1 className="headerTitle">PhotoLens</h1>
            <nav>
                <ul>
                    <Link to="/" className="navLinks">Home</Link>
                    <Link to="/post" className="navLinks">Post</Link>
                    <Link to="/album" className="navLinks">Album</Link>
                </ul>
            </nav>
        </Container>
    )
    
}

export default Header;