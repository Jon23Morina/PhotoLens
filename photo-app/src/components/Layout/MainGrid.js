import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainBoat from '../../photos/mainGrid-boat.jpg'
import MainTrain from '../../photos/mainGrid-train.jpg'
import MainBird from '../../photos/mainGrid-bird.jpg'
import MainLake from '../../photos/mainGrid-Lake.jpg'
import MainSimple from '../../photos/mainGrid-simple.jpg'
import MainCrowd from '../../photos/mainGrid-crowd.jpg'

function MainGrid() {
  return (
    <Container fluid className='mainGrid'>
        <Row>
            <Col><img className='GridImages' src={MainBoat} alt="" /></Col>
            <Col><img className='GridImages' src={MainTrain} alt="" /></Col>
        </Row>
        <br /><br /><br />
        <Row>
            <Col><img className='GridImages' src={MainBird} alt="" /></Col>
            <Col><img className='GridImages' src={MainLake} alt="" /></Col>
        </Row>
        <br /><br /><br />
        <Row>
            <Col><img className='GridImages' src={MainSimple} alt="" /></Col>
            <Col><img className='GridImages' src={MainCrowd} alt="" /></Col>
        </Row>
    </Container>
  )
}

export default MainGrid