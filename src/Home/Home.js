import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from '../SideBar/SideBar'
import About from '../About/About'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>
                    <About />
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home
