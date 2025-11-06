import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './About.css'; // Create this CSS file for custom styles

export const About = () => {
  return (
    <Container id="about" className="about-container">
      <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col lg={6} md={6} className='pe-md-4'>
          <h2 className='text-white mb-2'>Hi, I'm <span className='text-info'>Manikandan</span></h2>
           <h2 className='text-white'>i'm a <span className='text-info'>Full Stack Developer</span></h2>
          <p className='text-white mb-2'>
            A MERN Stack Developer with a passion for building dynamic and responsive web applications. 
            Possesses a strong foundation in both client and server side development, with a total of 
            <span className='text-info fw-bold'> 2.5+ Years of Experience</span>
          </p>
          
          <div className="skills-section mb-4">
            <h4 className="text-info mb-3">Technical Expertise</h4>
            
            <div className="mb-3">
              <h5 className="text-white">API Integrations:</h5>
              <ul className="text-white">
                <li>ChatGPT AI (OpenAI API) Integration</li>
                <li>Payment Gateway Integration</li>
                <li>Email Integration (SMTP / Third-Party services)</li>
                <li>Push Notification Integration</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <h5 className="text-white">Authentication & Authorization:</h5>
              <ul className="text-white">
                <li>Using Clerk, Firebase, and custom auth flows</li>
              </ul>
            </div>
          </div>
          
       
          
        </Col>
        
        <Col lg={6} md={6} className='text-center'>
          <div className="about-img">
            <img 
              src={require('../component/assets/Full stack.gif')} 
              className="rounded img-fluid" 
              alt="Full Stack Developer Animation"
            />
          </div>
           <div className="action-buttons">
            <a href="https://mail.google.com/mail/u/0/#search/merndev05%40gmail.com" target='_blank' rel="noreferrer" className="me-3">
              <Button className='btn-info text-dark fw-bold px-4 py-2'>Hire Me</Button>
            </a>
            <a href="https://github.com/Manikandan-5" target='_blank' rel="noreferrer">
              <Button variant="outline-info" className='fw-bold px-4 py-2'>View GitHub</Button>
            </a>
          </div> 
          
        </Col>

      </Row>
    </Container>
  );
}