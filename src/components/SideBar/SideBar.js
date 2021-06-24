import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap'
import myphoto from './myphoto.jpg'

const SideBar = () => (
  <Container id="sidebar">
    <section id="intro">
      <br />
      <br />
      <Link to="/" className="logo">
      <Image style={{height: '150px', width: '150px'}} src={myphoto} roundedCircle />
      </Link>
      <header>
        <h5>Azizul Hakim Tareq</h5>
      </header>
      <br />
    </section>

    <section className="blurb">
      <p style={{textAlign: 'justify'}}>Hi, I&apos;m Azizul Hakim Tareq. I like building things.
        I am a <a href="https://www.northsouth.edu/">North South University</a> graduate, a passionate software engineer.
      </p>
    </section>
    <br />
  </Container>
);

export default SideBar;