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
                <p> <strong>Software Engineer</strong>
                <br />Insidemaps Inc. 
                <br /> - Wrote queries in Parse Server based on the requirements to create REST APIs in a Node.js/Express application.
                <br /> - Wrote and executed scripts to update, migrate, and correct database records based on requirements.
                <br /> - Created documentation for API endpoints and backend processes for easier team onboarding and knowledge sharing.
                   <br /><span className="date-place">September 2024 - Current</span>
                <br /><span className="date-place">Redwood City, California, USA (Remote)</span></p>
                </li>
            <li>
    <li>
                <p> <strong>Software Engineer</strong>
                <br />Technonext - US Bangla Group 
                <br /> - Working on a full stack OTA (Online Travel Agency) project using latest technologies.
                <br /> - Fixed existing bugs and warnings and made the build successful.
                <br /> - Working on building a multi-vendor e-commerce application.
                   <br /><span className="date-place">October 2023 - Current</span>
                <br /><span className="date-place">Dhaka, Bangladesh (On-site)</span></p>
                </li>
            <li>
                <p> <strong>Full Stack Developer</strong>
                <br />Eucaps
                <br /> - Worked at an international fintech company and build product which is currently used by 1 million users.
                <br /> - Worked from start to finish of a SaaS product and worked both on frontend and backend of the application.
                <br /> - Responsible for writing API, writing complex database query, building interactive user interface etc.
                <br /> - Responsible for doing frontend code review and provide feedback to team mates.
                <br /><span className="date-place">December 2021 - September 2023</span>
                <br /><span className="date-place">Stockholm, Sweden (Remote)</span></p>
                </li>
            <li>
                <p> <strong>Software Engineer</strong>
                <br />Najj Technologies Ltd.
                <br /> - Managing servers and database, designing and developing APIs, building frontend with React
                <br /> - Currently developing both frontend and backend of an application where tutors can offer courses/classes and students can enroll in the course. The system will block course fees while enrolling in a course.
                <br /> - Other features - live class, screen sharing, whiteboard, assign and submit assignments, different functionalities for different users, etc.
                <br /><span className="date-place">June 2021 - November 2021</span>
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
