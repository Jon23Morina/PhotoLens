//react components
import { useState } from "react";

import Container from "react-bootstrap/esm/Container";

import MainImage from "../photos/mainBackground.jpeg"

import SpringImage from "../photos/springtree.jpg"
import SummerImage from "../photos/summertree.jpg"
import AutumnImage from "../photos/Autumn.jpg"
import WinterImage from "../photos/winter.jpeg"

import MainGrid from "../components/Layout/MainGrid";

function Home(){
    const mainPageContent={
        mainBackground: MainImage,
        mainTitle: "One click to save a beautiful memory!",
        mainWeatherImages: [
            SpringImage, SummerImage, AutumnImage, WinterImage
        ]
    }
    const [mainContent, setContent] = useState(mainPageContent)
   

    return(
        <Container fluid className="main">
            <Container fluid className="mainBlock">            
                <img className="mainImage" src={mainContent.mainBackground} alt="background" />
                <h1 className="mainTitle">{mainContent.mainTitle}</h1>
                <div className="mainVerticalImages">
                    {
                    mainContent.mainWeatherImages.map(im => <img className="gridImage" src={im} alt={im} />)
                    }
                </div>
            </Container>         
            <div className="spaceBackground"></div>
            <MainGrid></MainGrid>
        </Container>
    );
}

export default Home;