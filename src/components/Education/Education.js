import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import './Education.css'

const Education = () => {
    return (
        <Container className='my-3 px-6' style={{backgroundColor: 'white'}}>
            <h3><BsFillBriefcaseFill/> Experience</h3>
            <ul>
            <li>
                <p> <strong>Full Stack Developer</strong>
                <br />Eucaps
                <br /> Developing frontend of a SaaS based product using nextjs.
                <br /> Developing API using nodejs
                <br /> - Stack: Nodejs, AWS, React, Nextjs, Material UI etc.
                <br /><span className="date-place">December 2021 - Current</span>
                <br /><span className="date-place">Stockholm, Sweden (Remote)</span></p>
                </li>
            <li>
                <p> <strong>Software Engineer</strong>
                <br />Najj Technologies Ltd.
                <br /> - Managing servers and database, designing and developing APIs, building frontend with React
                <br /> - Currently developing both frontend and backend of an application where tutors can offer courses/classes and students can enroll in the course. The system will block course fees while enrolling in a course.
                <br /> - Other features - live class, screen sharing, whiteboard, assign and submit assignments, different functionalities for different users, etc.
                <br /> - Stack: Nodejs, React, Redux, MongoDB, Bootstrap etc.
                <br /><span className="date-place">September 2021 - November 2021</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>
            </ul>
            <h3><FaGraduationCap /> Education</h3>
            <ul>
                <li>
                <p> <strong>North South University</strong>
                <br />B.Sc in Computer Science & Engineering
                <br /><span className="date-place">January 2017 - May 2021</span>
                <br /><span className="date-place">Dhaka, Bangladesh</span></p>
                </li>

                <li>
                <p> <strong>Govt. City College</strong>
                <br />Higher Secondary School Certificate (HSC)
                <br /><span className="date-place">June 2014 - June 2016</span>
                <br /><span className="date-place">Chattogram, Bangladesh</span> </p>
                </li>

                <li>
                <p> <strong>Haji Mohammad Mohsin Govt. High School</strong>
                <br />Secondary School Certificate
                <br /><span className="date-place">January 2009 - December 2013</span>
                <br /><span className="date-place">Chattogram, Bangladesh</span></p>
                </li>
            </ul>
            <br />
            <br />
        </Container>
    )
}

export default Education
