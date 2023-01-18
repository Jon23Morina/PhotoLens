//react components
import { useState } from "react";

import Container from "react-bootstrap/esm/Container";

import MainImage from "../photos/mainBackground.jpeg"

function Home(){
    const mainPageContent={
        mainBackground: MainImage,
    }
    const [mainImages, setImages] = useState(mainPageContent)

    return(
        <Container fluid className="main">         
            <img className="mainImage" src={mainImages.mainBackground} alt="background" />
        </Container>
    );
}

export default Home;