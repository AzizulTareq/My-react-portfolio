import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import myphoto1 from './myphoto1.jpg'
import './SideBar.css'

const SideBar = () => (
  <Container id="sidebar" style={{backgroundColor: 'rgb(240, 238, 238)', height: '650px'}}>
    <section id="intro">
      <br />
      <br />
      <br />
      <br />
     
        <div style={{ textAlign: 'center'}}>
      <Image style={{height: '130px', width: '130px'}} src={myphoto1} roundedCircle />
      <header>
        <h2>AZIZUL HAKIM TAREQ</h2>
        <p>A Full-stack Software Engineer <br /><GoLocation /> Dhaka, Bangladesh</p>
      </header>
      </div>
      <br />
    </section>

    <section className="blurb">
      <p>
      <a href = "mailto: azizul.tareq@northsouth.edu"><MdEmail /> Email</a> <br />
      <a href="https://github.com/AzizulTareq"><AiFillGithub /> Github</a> <br />
      <a href="https://www.linkedin.com/in/azizultareq/"><AiFillLinkedin /> Linkedin</a>
      </p>
    </section>
    <br />
  </Container>
);

export default SideBar;