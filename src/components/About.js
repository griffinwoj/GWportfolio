import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/headsh.png";
import interestImage1 from "../images/"; // Import additional images
import interestImage2 from "../images/interest2.jpg";
// Add more imports for other images

import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Griffin Wojtowicz
                </Card.Title>
                {/* Add additional Image components for more interests */}
                <Image src={interestImage1} rounded fluid className="mb-3" />
                <Image src={interestImage2} rounded fluid className="mb-3" />
                {/* Add more Image components for other interests */}
                <Card.Text>
                  {/* Your existing text content */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;