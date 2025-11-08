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
    A passionate Full Stack Developer with 1 year of experience as a MERN Stack Trainer and 1.5 years as a MERN Stack Developer — building and delivering impactful web solutions.
  </p>

  <p className='text-white'>
    <strong className='text-info'>MERN Stack Expertise:</strong>
    Proficient in designing and developing scalable web applications using MongoDB, Express.js, React.js, and Node.js — along with supporting technologies like HTML, CSS, Bootstrap, TailwindCSS, JavaScript,TypeScript, Redux, MySQL.
  </p>

  <p className='text-white'>
    <strong className='text-info'>Trainer & Mentor Experience:</strong>
    Conducted technical training sessions and guided aspiring developers through hands-on MERN stack projects, helping them understand real-world development practices and build confidence in coding.
  </p>

  <p className='text-white'>
    <strong className='text-info'>End-to-End Development:</strong>
    Skilled in managing the complete web development lifecycle — from UI/UX design and responsive frontend implementation to backend logic, database integration, and deployment.
  </p>

  <p className='text-white'>
    <strong className='text-info'>Continuous Learning & Growth:</strong>
    Committed to continuous improvement, staying updated with emerging technologies, and delivering clean, efficient, and innovative web solutions that make a difference.
  </p>

</section>

            </Col>
            <Col lg={5} md={5}>
            <section id="skills">

            <div className="inner_skill  mt-5 mb-5" style={ {fontFamily: 'Cinzel, serif'} }>
            <h3><span class="badge bg-info text-white"> HTML</span></h3>
        <h3><span className="badge bg-info text-white"> CSS</span></h3>
        <h3><span className="badge bg-info text-white">BOOTSTRAP</span></h3>
        <h3><span className="badge bg-info text-white">TAILWIND CSS</span></h3>
        <h3><span className="badge bg-info text-white"> JAVASCRIPT</span></h3>
        <h3><span className="badge bg-info text-white"> TYPESCRIPT</span></h3>
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
        {/* <h3><span className="badge bg-info text-white">CI / CD</span></h3> */}
        {/* <h3><span className="badge bg-info text-white">DOCKER</span></h3> */}
        <h3><span className="badge bg-info text-white">AWS</span></h3>
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