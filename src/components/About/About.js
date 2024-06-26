import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import myphoto from './myphoto.jpg'
import './About.css'


const About = () => {
  return (
   <Container className='my-3 px-6' id='about' style={{backgroundColor: 'white'}}>
     <br />
     <br />
     
     <Row>
       <Col md={7} >
        <br />
        <br />
       <h3>Hi, I'm Azizul Hakim Tareq.</h3>
       <p style={{textAlign: 'justify'}}>I really appreciate the time you took to view my portfolio.<br /><br />
       I'm a passionate, forward-thinking, and solution-oriented full-stack Software Engineer. I'm looking forward to growing my career by experiencing industry challenges. I've professional experiece of working with Nodejs, Express.js, React,js, Next.js, MongoDB, PostgreSQL, etc. </p>
     
     
       </Col>
       <Col md={5}>
         <br />
         <br />
         <div>
         <Image style={{borderRadius: '1.7%'}} src={myphoto} alt={myphoto} fluid />
         </div>
       </Col>
     </Row>
     <br />
   </Container>
  )
}

export default About
