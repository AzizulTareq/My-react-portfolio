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
                <li><strong>Frontend:</strong> React, Redux, HTML, CSS, Bootstrap</li>
                <li><strong>Backend:</strong> Nodejs/Express</li>
                <li><strong>Database:</strong> MongoDB</li>
                <li><strong>Others:</strong> Git, Github, Bitbucket, Heroku, Netlify, Postman etc.</li>
                <br />
            </ul>
            <h5><GiThink /> Competitive Programming/Problem Solving</h5>
            <ul>
                <li>Solved 400+ coding problems from various online judges like codeforces, codechef, hackerrank, LightOJ, CSES etc.</li>
                <li>Participated in codeforces, codechef, atcoder contests.</li>
                <li>Stopstalk username: <a style={{textDecoration: 'none'}} href="https://www.stopstalk.com/user/profile/azizultareq" target="__blank"><span style={{color: '#08B9CD', fontWeight: 'bold'}}>azizultareq <BiLinkExternal/></span></a></li>
                <li>Codeforces handle : <a style={{textDecoration: 'none'}} href="https://codeforces.com/profile/event_loop" target="__blank"><span style={{color: '#08B9CD', fontWeight: 'bold'}}>event_loop <BiLinkExternal/></span></a></li>
            </ul>
            <br />
            <h5><GiSkills /> Personal Skills</h5>
            <ul>
                <li>Have leadership skill.</li>
                <li>Can learn and implement any technology in the shortest possible time.</li>
                <li>ability to take initiative to solve problems.</li>
                <li>ability to work under pressure.</li>
                <br />
            </ul>
            <br />
            <br />
        </Container>
    )
}

export default Skills
