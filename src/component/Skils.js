import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Skils = () => {
  return (
    <>
    <Container>
        <Row>
            
            <Col lg={6} md={6}>
          <section id='About' className='mt-3 mb-5'>

  <p className='text-white'>
    <strong className='text-info'>2.5+ Years of Professional Experience:</strong>
    A Full Stack Developer with 1 year of experience as a Software Trainer and 1.5 years in full stack development, delivering real-world web solutions.
  </p>

  <p className='text-white'>
    <strong className='text-info'>Full Stack Development Expertise:</strong>
    Hands-on experience building dynamic, user-centric web applications using modern technologies including HTML, CSS, Bootstrap, TailwindCSS, JavaScript, React.js, Redux, Node.js, Express.js, MongoDB, and MySQL.
  </p>

  <p className='text-white'>
    <strong className='text-info'>Software Trainer Experience:</strong>
    Provided technical training and mentorship to aspiring developers, equipping them with the skills needed to succeed in professional software development roles.
  </p>

  <p className='text-white'>
    <strong className='text-info'>End-to-End Application Development:</strong>
    Experienced in delivering complete web solutions — from frontend to backend — aligned with both business goals and technical requirements.
  </p>

  <p className='text-white'>
    <strong className='text-info'>Commitment to Innovation and Growth:</strong>
    Continuously learning and evolving to stay ahead of industry trends and deliver impactful, high-quality solutions.
  </p>

</section>

            </Col>
            <Col lg={5} md={5}>
            <section id="skills">

            <div className="inner_skill  mt-5 mb-5" style={ {fontFamily: 'Cinzel, serif'} }>
            <h3><span class="badge bg-info text-white"> HTML</span></h3>
        <h3><span className="badge bg-info text-white"> CSS</span></h3>
        <h3><span className="badge bg-info text-white">BOOTSTRAP</span></h3>
        <h3><span className="badge bg-info text-white"> JAVASCRIPT</span></h3>
        <h3><span className="badge bg-info text-white"> REACT JS</span></h3>
        {/* <h3><span className="badge bg-info text-white"> VUE JS</span></h3>
        <h3><span className="badge bg-info text-white">INERTIA JS</span></h3> */}
        <h3><span className="badge bg-info text-white"> NODE JS</span></h3>
        <h3><span className="badge bg-info text-white">EXPRESS JS</span></h3>
        {/* <h3><span className="badge bg-info text-white">C</span></h3> */}
        {/* <h3><span className="badge bg-info text-white">C++</span></h3> */}
        {/* <h3><span className="badge bg-info text-white"> PHP</span></h3> */}
        {/* <h3><span className="badge bg-info text-white">LARAVEL</span></h3> */}
        <h3><span className="badge bg-info text-white">MONGO DB</span></h3>
        <h3><span className="badge bg-info text-white">MYSQL</span></h3>
        <h3><span className="badge bg-info text-white">Git And GitHub</span></h3>
        <h3><span className="badge bg-info text-white">API INTEGRATION</span></h3>
        <h3><span className="badge bg-info text-white">REST API</span></h3>
        <h3><span className="badge bg-info text-white">JSON API</span></h3>
        <h3><span className="badge bg-info text-white">POST MAN</span></h3>
  

        </div>
        </section>
            </Col>
        </Row>
    </Container>

    </>
  )
}

export default Skils