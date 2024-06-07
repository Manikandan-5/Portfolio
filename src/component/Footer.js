import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Footer = () => {
  return (
    <>
    <Container>
      <section id="contact">
        <h1 className='text-white text-center mt-3 mb-3'>Contact <span className='text-info'>Me</span></h1>
      <form >
        <div className="input-box">
          <input type="text" name="text"placeholder='Enter Name' required/>
          <input type="email" name='email' placeholder='Email ID'required/>
          <input type='number' name='number' placeholder='Phone Number'required/>
         <textarea name='text-area'  placeholder='text here...'/>
          <div className="d-flex justify-content-center align-items-center" >
          <a href="https://mail.google.com/mail/u/0/#search/merndev05%40gmail.com" target="_blank" rel="noreferrer" className='text-decoration-none'>
            <Button type="submit" className="btn btn-info p-3 inner-btn text-white d-flex align-items-center">
              Send Message
            </Button>
          </a>
        </div>
        </div>
      </form>
        <footer>
          <h6 className='text-white text-center mt-4 pb-3'>© Manikandan || All Rights Reserved </h6>
        </footer>
        <div>

        </div>
        </section>
    </Container>
    </>
  )
}

export default Footer