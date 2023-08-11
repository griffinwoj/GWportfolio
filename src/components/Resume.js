// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../images/Resume.pdf";

// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Griffin Wojtowicz</h1>
            <p>Grosse Pointe Woods, MI | Griffinw@protonmail.com</p>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
            <ul>
              <li>
                Experienced Full Stack Developer with a passion for leveraging technology to drive positive impacts in society.
              </li>
              <li>
                Seeking a role in Full Stack Development to contribute to innovative and user-friendly applications using HTML/CSS, JavaScript, MongoDB, Express, React, Node.js, and SQL.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Work Experience</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>Director of Band & Orchestra</h4>
              <h5>O.L. SMITH MIDDLE SCHOOL, Dearborn Public Schools</h5>
              <h5>2021 - Present</h5>
              <ul>
                <li>Revitalized music programs at 5 elementary schools and O.L. Smith Middle School.</li>
                <li>Enhanced student engagement through a successful annual band trip to Cedar Point.</li>
                <li>Strengthened community relations and achieved remarkable recognition for the middle school program.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Director of Instrumental Music</h4>
              <h5>ARTS ACADEMY IN THE WOODS</h5>
              <h5>2018 - 2021</h5>
              <ul>
                <li>Prioritized instrument security and asset acquisition in rebuilding the music program.</li>
                <li>Managed public relations efforts to secure funding and support program rebuilding.</li>
                <li>Successfully collaborated with diverse student groups to rebuild the program.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Project Manager</h4>
              <h5>IDEATION ORANGE</h5>
              <h5>2011 - 2013</h5>
              <ul>
                <li>Streamlined product-to-client efficiency, delivery, and installation within tight deadlines.</li>
                <li>Managed multiple interpersonal client relationships.</li>
                <li>Gained experience in branding, design, typography, and web development.</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Education</h3>
            <hr className="star-secondary" />
            <div className="resume-item">
              <h4>MICHIGAN STATE UNIVERSITY</h4>
              <h5>Full Stack Development (MERN)</h5>
              <h5>Jan 2023 - July 2023</h5>
            </div>
            <div className="resume-item">
              <h4>OAKLAND UNIVERSITY</h4>
              <h5>BA in Music Education and Performance</h5>
              <h5>2013 - 2018</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Skills/Accolades</h3>
            <ul>
              <li>HTML/CSS, JavaScript, MongoDB, Express, React, Node.js, SQL</li>
              <li>Certificate of Appreciation, Dearborn Public Schools 21’</li>
              <li>Construction Technology Certification 05’</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export Resume
export default Resume;
