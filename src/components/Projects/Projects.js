import React from 'react'
import { Card, CardGroup, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import project1 from './project1.PNG'
import project2 from './project2.PNG'
import project3 from './project3.PNG'
import project4 from './project4.PNG'
import { AiTwotoneHeart, AiTwotoneTag } from 'react-icons/ai'

const Projects = () => {
    return (
      <Container>
          <br />
        <h5 style={{paddingBottom: '10px'}}>Projects <AiTwotoneHeart style={{color: '#D22633'}} /></h5> 
      {/***************project 1***********/}
      <CardGroup style={{maxHeight: '100%'}}>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>BD CARs</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          The Car Land is a place for people who want to buy a car or sell his car. Anyone can upload a car with photos and details to sell his car, user must need to sign up or log in to sell his car.
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, Nodejs, Mongodb, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://www.youtube.com/watch?v=9DnZomH0HfA&t=1s" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="light" href="https://github.com/AzizulTareq/BD-CARs" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project1} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      <br />
      {/***************project 2***********/}
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>Tshirt Ecommere Site</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          Features – shopping cart, user rating and comment, product page, quantity select, user profile page, payment system. Admin can add, edit, delete products, delete user, make a user as admin, check orders, and mark orders as delivered.<strong style={{fontSize: '14px'}}> [Feel free to email me to get access as admin]</strong> 
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, Nodejs, Mongodb, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://tareqtboss.herokuapp.com/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="light" href="https://github.com/AzizulTareq/e-commerce" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project2} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      {/***************project 3***********/}
    <br />
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          My portfolio site is another project which is builded by me from scratch. My portfolio site shows information about me, my education, experience, skills, projects and publications.
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://azizultareq.netlify.app/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="light" href="https://github.com/AzizulTareq/My-react-portfolio" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project3} />
        </Col>
        </Row>
      </Card>
    </CardGroup>

      {/***************project 4***********/}
      <br />
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
          <Card.Title>Covid-19 Data Tracker</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          Covid-19 Data Tracker is an app made with React, which track covid -19 data for more than 200 countries and regions. Data is provided by an API. User can search covid-19 data for any country or region.

          <br />
          <AiTwotoneTag/> Stack: Javascript, React, HTML, CSS
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://covid19-tareq.herokuapp.com/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="light" href="https://github.com/AzizulTareq/Covid-19-Data-Tracker-React" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>
        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project4} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
    <br />
        
    </Container>
    )
}

export default Projects

