//React Methods
import { useState } from "react";

//react bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Images Importation
import MainImage from "../photos/mainBackground.jpeg"
import SpringImage from "../photos/springtree.jpg"
import SummerImage from "../photos/summertree.jpg"
import AutumnImage from "../photos/Autumn.jpg"
import WinterImage from "../photos/winter.jpeg"

//Components Importations
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
                <Row lg={4} className="mainVerticalImages justify-content-lg-center">
                    {
                    mainContent.mainWeatherImages.map
                        (im =>
                            <Col className="gridMainBlock">
                             <img className="gridImage" src={im} alt={im} />
                            </Col>
                        )
                    }
                </Row>
            </Container>         
            <div className="spaceBackground"></div>
            <MainGrid></MainGrid>
        </Container>
    );
}

export default Home;