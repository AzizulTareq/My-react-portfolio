import React from 'react'
import { Container } from 'react-bootstrap'
import { AiTwotoneSetting } from 'react-icons/ai'
import { GiThink, GiSkills } from 'react-icons/gi'
import { BiLinkExternal } from 'react-icons/bi'

const Skills = () => {
    return (
        <Container className='my-3 px-6' style={{backgroundColor: 'white'}}>
            <br />
            <h5><AiTwotoneSetting /> Skills</h5>
            <ul>
                <li><strong>Programming Languages:</strong> Javascript, C++</li>
                <li><strong>Frontend:</strong> React, Redux, HTML, CSS, SCSS, Bootstrap</li>
                <li><strong>Backend:</strong> Nodejs/Express, WebRtc, Socket.io</li>
                <li><strong>Database:</strong> MongoDB</li>
                <li><strong>Others:</strong> Git, Github, Bitbucket, Heroku, Netlify, Postman etc.</li>
                <br />
            </ul>
            <h5><GiThink /> Competitive Programming/Problem Solving</h5>
            <ul>
                <li>Solved 500+ coding problems from various online judges like codeforces, codechef, hackerrank, LightOJ, CSES etc.</li>
                <li>Participated in 70+ codeforces, codechef, atcoder contests.</li>
                <li>Skilled in Data Structure, Algorithm, OOP etc.</li>
            </ul>
            <br />
            <h5><GiSkills /> Personal Skills</h5>
            <ul>
                <li>Have leadership skill.</li>
                <li>Can learn and implement any technology within the shortest possible time.</li>
                <li>Ability to take initiative to solve problems.</li>
                <li>Ability to work under pressure.</li>
                <br />
            </ul>
            <br />
            <br />
        </Container>
    )
}

export default Skills
