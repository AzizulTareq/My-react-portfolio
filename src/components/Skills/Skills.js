import React from 'react'
import { Container } from 'react-bootstrap'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GiThink } from 'react-icons/gi'

const Skills = () => {
    return (
        <Container>
            <br />
            <h5><AiTwotoneSetting /> Skills</h5>
            <ul>
                <h6><strong>Programming Language/ Framework/ Database:</strong></h6>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>C++</li>
                <li>React, Redux</li>
                <li>Nodejs/Express</li>
                <li>Mongodb</li>
                <li>Bootstrap, React Bootstrap, Reactstrap</li>
                <br />
                <h6><strong>Tools & Others:</strong></h6>
                <li>Git</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Postman etc.</li>
            </ul>
            <h5><GiThink /> Competitive Programming/Problem Solving</h5>
            <ul>
                <li>Solved about 400 problems from different online judges.</li>
                <li>Stopstalk username: <a href="https://www.stopstalk.com/user/profile/azizultareq">azizultareq</a></li>
                <li>Codeforces handle : <a href="https://codeforces.com/profile/event_loop">event_loop</a></li>
            </ul>
            
        </Container>
    )
}

export default Skills
