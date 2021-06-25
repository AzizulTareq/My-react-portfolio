import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import SideBar from '../components/SideBar/SideBar'
import About from '../components/About/About'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'

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
                            <Route path="/skills" exact component={Skills} />
                            <Route path="/projects" exact component={Projects} />
                        </Switch>
                    </Router>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home
