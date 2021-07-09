import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container } from 'react-bootstrap'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { ImFlickr } from 'react-icons/im'
import myphoto from './myphoto.PNG'
import './SideBar.css'

const SideBar = () => (
  <Container id="sidebar" style={{backgroundColor: 'rgb(240, 238, 238)', height: '650px'}}>
    <section id="intro">
      <br />
      <br />
      <br />
      <br />
     
        <div style={{ textAlign: 'center'}}>
      <Image style={{height: '130px', width: '130px'}} src={myphoto} roundedCircle />
      <header>
        <br />
        <h4 className="sidebar_name">AZIZUL HAKIM TAREQ</h4>
        <p>A Full-stack Software Engineer <br /><GoLocation /> Dhaka, Bangladesh</p>
      </header>
      </div>
      <br />
    </section>

    <section className="blurb">
      <p>
      <a className="all_links" href = "mailto: azizul.tareq@northsouth.edu" target="__blank"><MdEmail /> Email</a> <br />
      <a className="all_links" href="https://github.com/AzizulTareq" target="__blank"><AiFillGithub /> Github</a> <br />
      <a className="all_links" href="https://www.linkedin.com/in/azizultareq/" target="__blank"><AiFillLinkedin /> Linkedin</a> <br />
      <a className="all_links"  href="https://www.flickr.com/photos/193326444@N02/" target="__blank"><ImFlickr /> Flickr</a>
      </p>
    </section>
    <br />
  </Container>
);

export default SideBar;