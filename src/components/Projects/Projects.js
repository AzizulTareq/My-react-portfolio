import React from 'react'
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap'
import project0 from './images/rentabode.PNG'
import project1 from './images/project1.PNG'
import project2 from './images/project2.PNG'
import project3 from './images/project3.PNG'
import project4 from './images/project4.PNG'
import project5 from './images/project5.PNG'

import { AiTwotoneHeart, AiTwotoneTag } from 'react-icons/ai'

const Projects = () => {
    return (
      <Container>
          <br />
        <h5 style={{paddingBottom: '10px'}}>Projects <AiTwotoneHeart style={{color: '#D22633'}} /></h5> 
    {/***************project 0***********/}
      <CardGroup style={{maxHeight: '100%'}}>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
        <Card.Title>Rent Abode</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
Anyone can post his property like home, apartment, hotel, resort etc. on the platform and any user can have
booking on those abodes by searching and selecting his preferred abode. Multiple users can’t book an abode
on same data.
    <br />
          <AiTwotoneTag/> Stack: Nextjs, Mongodb, Prisma, TailwindCSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://tareq-rent-abode.vercel.app/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="dark" href="https://github.com/AzizulTareq/rent-abode" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project0} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
        {/***************project 1***********/}
      <CardGroup style={{maxHeight: '100%'}}>
      <Card>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
        <Card.Title>Place Review</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          User can select any plaec from the map and can give review and rating about that place, user need to register and signin to be able to do this. Users data and places data are stored in mongoDB.
          <br />
          <AiTwotoneTag/> Stack: React, Nodejs, Mongodb, React Bootstrap, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://www.youtube.com/watch?v=qY2zSlf3vGs&t=1s" target="__blank">VIDEO</Button> &nbsp;
          <Button variant="dark" href="https://github.com/AzizulTareq/Place-Review" target="__blank">CODE</Button>
          </div>
          </Card.Text>
        </Card.Body>
        </Col>

        <Col md={6}>
        <Card.Img style={{padding: '20px', paddingTop: '35px'}} variant="top" src={project5} />
        </Col>
        </Row>
      </Card>
    </CardGroup>
      
      {/***************project 2***********/}
    <CardGroup style={{maxHeight: '100%'}}>
      <Card style={{maxHeight: '100%'}}>
        <Row>
          <Col md={6}>
        <Card.Body style={{position: 'relative'}}>
        <Card.Title>Ecommere Site</Card.Title>
          <Card.Text style={{textAlign: 'justify'}}>
          Features – shopping cart, user rating and comment, product page, quantity select, user profile page, payment system. Admin can add, edit, delete products, delete user, make a user as admin, check orders, and mark orders as delivered.<strong style={{fontSize: '14px'}}> [Feel free to email me to get access as admin]</strong> 
          <br />
          <AiTwotoneTag/> Stack: Javascript, React, React Bootstrap, Nodejs, Mongodb, HTML, CSS etc.
          <br />
          <br />
          <div>
          <Button variant="danger" href="https://tareqtboss.herokuapp.com/" target="__blank">LIVE</Button> &nbsp;
          <Button variant="dark" href="https://github.com/AzizulTareq/e-commerce" target="__blank">CODE</Button>
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
          <Button variant="dark" href="https://github.com/AzizulTareq/BD-CARs" target="__blank">CODE</Button>
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
      {/***************project 4***********/}
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
          <Button variant="dark" href="https://github.com/AzizulTareq/My-react-portfolio" target="__blank">CODE</Button>
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

      {/***************project 5***********/}
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
          <Button variant="dark" href="https://github.com/AzizulTareq/Covid-19-Data-Tracker-React" target="__blank">CODE</Button>
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

