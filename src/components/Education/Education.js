import React from 'react'
import { Container } from 'react-bootstrap'
import { FaGraduationCap } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import './Education.css'

const Education = () => {
    return (
        <Container>
            <h3><BsFillBriefcaseFill/> Experience</h3>
            <ul>
            <li>
                <p> <strong>Frontend Developer (Contract)</strong>
                <br />Prodealz
                <br />December 2020 to February 2021
                <br />Dhaka, Bangladesh</p>
                </li>

            </ul>
            <h3><FaGraduationCap /> Education</h3>
            <ul>
                <li>
                <p> <strong>North South University</strong>
                <br />B.Sc in Computer Science & Engineering
                <br />January 2017 to May 2021
                <br />Dhaka, Bangladesh</p>
                </li>

                <li>
                <p> <strong>Govt. City College</strong>
                <br />Higher Secondary School Certificate (HSC)
                <br />June 2014 to June 2016
                <br />Chattogram, Bangladesh </p>
                </li>

                <li>
                <p> <strong>Haji Mohammad Mohsin Govt. High School</strong>
                <br />Secondary School Certificate
                <br />January 2009 to December 2013
                <br />Chattogram, Bangladesh</p>
                </li>
            </ul>
            
        </Container>
    )
}

export default Education
