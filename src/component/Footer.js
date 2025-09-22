import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import contact from '../component/assets/undraw_success-factors_i417.png'
const Footer = () => {
  return (
    <>
      <Container className='mt-5'>
        <section id="contact">
          <h1 className='text-white text-center mb-5'>Contact <span className='text-info'>Me</span></h1>
          
          <Row className="justify-content-between">
            {/* Left Side - Contact Info & Links */}
            <Col lg={5} className="mb-4">
              <div className="text-white">
                <h4 className="text-info mb-4">Get In Touch</h4>
                <p className="mb-4">
                  I'm always open to discussing new opportunities and interesting projects. 
                  Feel free to reach out if you want to collaborate or just say hello!
                </p>
                
                <div className="contact-info mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <FaEnvelope className="text-info me-3" size={20} />
                    <span>merndev05@gmail.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaGithub className="text-info me-3" size={20} />
                    <span>github.com/Manikandan-5</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                  <h6 className="text-info mb-3">Follow Me</h6>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/Manikandan-5" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-white text-decoration-none">
                      <Button variant="outline-info" size="sm" className="d-flex align-items-center">
                        <FaGithub className="me-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href="mailto:merndev05@gmail.com" 
                       className="text-white text-decoration-none">
                      <Button variant="outline-info" size="sm" className="d-flex align-items-center">
                        <FaEnvelope className="me-2" />
                        Email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Side - Content/Image */}
            <Col lg={6} className="mb-4">
              <div className="text-center">
                {/* You can replace this with your actual image */}
                <div className="bg-info bg-opacity-10 rounded p-5 mb-4">
                  <h5 className="text-white mb-3">Let's Work Together!</h5>
<p className="text-white-50 mb-4">
  I'm passionate about creating amazing web experiences. 
  Whether you need a website, web application, or just want to connect, 
  I'd love to hear from you.
</p>

                  
                  {/* Optional: Add your photo or illustration here */}
                  <div className="placeholder-image bg-dark rounded d-flex align-items-center justify-content-center mx-auto" 
                       style={{width: '200px', height: '150px'}}>
                        <img src={contact} alt="Contact Me" className="img-fluid rounded"/>
            
                  </div>
                  <p className="text-white fst-italic mt-3">
  "I focus on delivering value, not just code. Let's create something that works for you"
</p>

                </div>

                {/* Quick Contact Button */}
                <a href="mailto:merndev05@gmail.com" className="text-decoration-none">
                  <Button variant="info" size="lg" className="px-4 py-2">
                    <FaEnvelope className="me-2" />
                    Send Quick Email
                  </Button>
                </a>
              </div>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <footer className="mt-5 pt-4 border-top border-secondary">
            <h6 className='text-white text-center pb-2'>
              © {new Date().getFullYear()} Manikandan || All Rights Reserved
            </h6>
          </footer>
        </section>
      </Container>
    </>
  )
}

export default Footer