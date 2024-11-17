import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export const About = () => {
  return (
    <Container>
    <Row className='d-flex justify-content-center align-items-center mt-5 mb-5 p-3'>
      <Col lg={6} md={6}className='mt-5'>
        <h1 className='text-white'>Hi i'm <span className='text-info'>Manikandan</span></h1>
        <h2 className='text-white'>i'm a <span className='text-info'>Full Stack Developer</span></h2>
        <p className='text-white'>A Full Stack Developer with a passion for building dynamic and responsive web applications. Possesses a strong foundation in both client and server side development, with a total of 
        <span className='text-info font-bold'> 1.5 Years of Experience</span></p>
    <a href="https://mail.google.com/mail/u/0/#search/merndev05%40gmail.com" target='_blank'  rel="noreferrer"> <Button className='bg-info text-black '>Hire</Button></a>
     <a href="https://github.com/Manikandan-5" target='_blank'  rel="noreferrer"> <Button variant="outline-info">Github</Button> </a>
      </Col>
      <Col lg={6} md={6} className='mt-5 mb-5'>
      <div className="about-img">
        <img src={require('../component/Full stack.gif') }  className="rounded img-fluid" alt='full-stack.gif'/>
        </div>
      </Col>
    </Row>
  </Container>
  )
}
