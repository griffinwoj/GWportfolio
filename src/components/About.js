import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/headsh.png";
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
                <Card.Text>
                As a dedicated husband and father of three, my fervor for music, teaching, and diverse skills like woodworking, electronics, tech, and mechanics drives me. Embracing resourcefulness, I nurture my family, foster creativity, and utilize technology for positive impacts on lives and society, inspiring lifelong learning and personal growth in others.
                </Card.Text>
                <Card.Text>
                    
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
