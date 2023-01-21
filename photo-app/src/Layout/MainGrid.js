import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainBoat from '../photos/mainGrid-boat.jpg'
import MainTrain from '../photos/mainGrid-train.jpg'
import MainBird from '../photos/mainGrid-bird.jpg'
import MainLake from '../photos/mainGrid-Lake.jpg'
import MainSimple from '../photos/mainGrid-simple.jpg'
import MainCrowd from '../photos/mainGrid-crowd.jpg'

function MainGrid() {
  return (
    <Container fluid className='mainGrid'>
        <Row>
            <Col><img className='GridImages' src={MainBoat} alt={MainBoat} /></Col>
            <Col><img className='GridImages' src={MainTrain} alt={MainTrain} /></Col>
        </Row>
        <br /><br /><br />
        <Row>
            <Col><img className='GridImages' src={MainBird} alt={MainBird} /></Col>
            <Col><img className='GridImages' src={MainLake} alt={MainLake} /></Col>
        </Row>
        <br /><br /><br />
        <Row>
            <Col><img className='GridImages' src={MainSimple} alt={MainSimple} /></Col>
            <Col><img className='GridImages' src={MainCrowd} alt={MainCrowd}/></Col>
        </Row>
        <h3>Some beautiful pictures that were captured.</h3>
        <h4>, John Doe</h4>
    </Container>
  )
}

export default MainGrid