import React from 'react'
import { Card, CardGroup, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import project1 from './project1.PNG'
import { AiTwotoneHeart, AiTwotoneTag } from 'react-icons/ai'

const Projects = () => {
    return (
      <Container>
        <br />
        <h5 style={{paddingBottom: '10px'}}>Projects <AiTwotoneHeart style={{color: '#D22633'}} /></h5>
      <CardGroup>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>BD CARs</Card.Title>
          <Card.Text>
          The Car Land is a place for people who want to buy a car or sell his car. Anyone can upload a car with photos and details to sell his car, user must need to sign up and log in to sell his car.
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, Nodejs, Mongodb etc.

          </Card.Text>
          
          <div style={{position: 'absolute', buttom:'0px'}}>
          <Button variant="danger" href="http://www.youtube.com" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="light">CODE</Button>
          </div>

        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project1} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      <br />
    <CardGroup>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>T-shirt Ecommere</Card.Title>
          <Card.Text>
          Features – redux shopping cart, rating & comments by customers, product page, admin dashboard, payment system, admin dashboard etc.
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, Nodejs, Mongodb etc.

          </Card.Text>
          
          <div style={{position: 'absolute', buttom:'0px'}}>
          <Button variant="danger" href="http://www.youtube.com" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="light">CODE</Button>
          </div>

        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project1} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
    </Container>
    )
}

export default Projects
