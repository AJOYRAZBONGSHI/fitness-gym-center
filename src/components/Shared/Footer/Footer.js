import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
      <div>
        <Navbar bg="dark">
          <Container>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae aut voluptas nesciunt cupiditate sint blanditiis quod expedita. Veritatis, sed.</p>
          </Container>
        </Navbar>
      </div>
    );
};

export default Footer;