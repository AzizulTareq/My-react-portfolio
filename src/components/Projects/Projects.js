import React from 'react'
import { Card, CardGroup, Container, Row, Col } from 'react-bootstrap'
import project1 from './project1.PNG'
import { AiTwotoneHeart } from 'react-icons/ai'

const Projects = () => {
    return (
      <Container>
        <br />
        <h5 style={{paddingBottom: '10px'}}>Projects <AiTwotoneHeart style={{color: '#D22633'}} /></h5>
      <CardGroup>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px'}} variant="top" src={project1} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
    </Container>
    )
}

export default Projects
