import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from '../components/SideBar/SideBar'
import About from '../components/About/About'
import Education from '../components/Education/Education'

const Home = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={About} />
                            <Route path="/education" exact component={Education} />
                        </Switch>
                    </Router>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home
