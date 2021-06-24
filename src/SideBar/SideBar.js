import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap'
import myphoto from './myphoto.jpg'

const SideBar = () => (
  <Container id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
      <Image style={{height: '150px', width: '150px'}} src={myphoto} roundedCircle />
      </Link>
      <header>
        <h2>Azizul Hakim Tareq</h2>
      </header>
    </section>

    <section className="blurb">
      <h4>About</h4>
      <p style={{textAlign: 'justify'}}>Hi, I&apos;m Azizul Hakim Tareq. I like building things.
        I am a <a href="https://www.northsouth.edu/">North South University</a> graduate, a passionate software engineer.
      </p>
      
    </section>

    <section id="footer">
      
      <p className="copyright">&copy; Azizul Hakim Tareq</p>
    </section>
  </Container>
);

export default SideBar;