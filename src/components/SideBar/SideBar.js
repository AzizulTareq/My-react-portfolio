import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap'
import myphoto1 from './myphoto1.jpg'
import './SideBar.css'

const SideBar = () => (
  <Container id="sidebar">
    <section id="intro">
      <br />
      <br />
     
        <div style={{ textAlign: 'center'}}>
      <Image style={{height: '130px', width: '130px'}} src={myphoto1} roundedCircle />
      <header>
        <h2>AZIZUL HAKIM TAREQ</h2>
      </header>
      </div>
      <br />
    </section>

    <section className="blurb">
      <p style={{textAlign: 'justify'}}>Hi, I&apos;m Azizul Hakim Tareq. I like building things.
        I am a North South University graduate, a passionate software engineer.
      </p>
    </section>
    <br />
  </Container>
);

export default SideBar;