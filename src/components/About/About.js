import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import myphoto from './myphoto.jpg'
import './About.css'

const About = () => {
  return (
   <Container className='my-3 px-6' id='about'>
     <br />
     <br />
     
     <Row>
       <Col md={6}>
       <h2>About Me</h2>
       A passionate, forward thinking and solution oriented full-stack software Engineer who is looking forward to grow career by experiencing industry challenges.
        <div>
          <br />
        <Button variant="outline-info">Download Resume</Button>{' '}
        </div>
       </Col>
       <Col md={6}>
       <Image src={myphoto} alt={myphoto} fluid />
       </Col>
     </Row>
     
   </Container>
  )
}

export default About
