import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MainBoat from '../../photos/mainGrid-boat.jpg'
import MainTrain from '../../photos/mainGrid-train.jpg'
import MainBird from '../../photos/mainGrid-bird.jpg'
import MainLake from '../../photos/mainGrid-Lake.jpg'

function MainGrid() {
  return (
    <Container fluid className='mainGrid'>
        <Row>
            <Col><img src={MainBoat} alt="" /></Col>
            <Col><img src={MainTrain} alt="" /></Col>
        </Row>
        <Row>
            <Col><img src={MainBird} alt="" /></Col>
            <Col><img src={MainLake} alt="" /></Col>
        </Row>
    </Container>
  )
}

export default MainGrid