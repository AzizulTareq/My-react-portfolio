import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import myphoto from './myphoto.jpg'
import './About.css'
import resume from './resume of Tareq.pdf'

const About = () => {
  return (
   <Container className='my-3 px-6' id='about'>
     <br />
     <br />
     
     <Row>
       <Col md={7}>
       <h3>Hi, I'm Azizul Hakim Tareq.</h3>
       <p style={{textAlign: 'justify'}}>I really appreciate the time you took to view my portfolio.<br />
       I'm a passionate, forward-thinking, and solution-oriented full-stack Software Engineer. I'm looking forward to growing my career by experiencing industry challenges. <br /> <br />
       I've worked as a frontend developer in a startup for few months where I was responsible for building the frontend of a multi-users and multi-sellers e-commerce site.<br /> <br />
       I've completed my B.Sc in Computer Science & Engineering from North South University. During my university time, I always focused on developing skills and building projects. I believe software engineering is full of challenges, and to overcome those challenges one need to have passion in coding, ability to research, and solve problems. I enjoy writing code, solving problems by using google, stackoverflow, and learning new things. Besides software development I've solved about 400 coding problems from codeforces and other online judges. I learned a lot of technologies but tried to be a master in MERN stack development.</p>
        <div>
        <a href={resume} download><Button variant="outline-info">Download Resume</Button>{' '}</a>

        </div>
       </Col>
       <Col md={5}>
         <br />
         <br />
         <div>
         <Image style={{borderRadius: '1.7%'}} src={myphoto} alt={myphoto} fluid />
         </div>
       </Col>
     </Row>
     
   </Container>
  )
}

export default About
