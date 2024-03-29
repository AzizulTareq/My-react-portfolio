import React, {useState, useEffect} from 'react';
import { Image, Container, Button } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { ImFlickr } from 'react-icons/im'
import myphoto from './myphoto.PNG'
import axios from 'axios'
import './SideBar.css'
import resume from './tareqresumefile.pdf'

const SideBar = () => {

  return (
  <Container id="sidebar" style={{backgroundColor: 'rgb(240, 238, 238)', height: '650px'}}>
    <section id="intro">
      <br />
      <br />
      <br />
     
        <div style={{ textAlign: 'center'}}>
      <Image style={{height: '130px', width: '130px'}} src={myphoto} roundedCircle />
      <header>
        <br />
        <h5 className="sidebar_name">AZIZUL HAKIM TAREQ</h5>
        <p>A Full-stack Software Engineer <br /><br /> <MdEmail /> azizultareq7@gmail.com <br /> <GoLocation /> Dhaka, Bangladesh <br/> <div style={{paddingTop: '12px'}}><a href={resume} download><Button variant="outline-dark">Download Resume</Button>{' '}</a></div></p>
      </header>
      </div>
      <br />
    </section>

    <section className="blurb">
      <p>
      <a className="all_links" href = "mailto: azizultareq7@gmail.com" target="__blank"><GoLocation /> Email</a> <br />
      <a className="all_links" href="https://github.com/AzizulTareq" target="__blank"><AiFillGithub /> Github</a> <br />
      <a className="all_links" href="https://www.linkedin.com/in/azizultareq/" target="__blank"><AiFillLinkedin /> Linkedin</a> <br />
      <a className="all_links"  href="https://www.flickr.com/photos/193326444@N02/" target="__blank"><ImFlickr /> Flickr</a>
      </p>
    </section>
    <br />
  </Container>
);
  }

export default SideBar;
