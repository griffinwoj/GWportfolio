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
                  As a dedicated and devoted husband, father of three, my fervor for music, teaching, and diverse skills like woodworking, electronics, tech, and mechanics drives me. Embracing resourcefulness, I nurture my family, foster creativity, and utilize technology for positive impacts of inspiring lifelong learning and personal growth in others.
                </Card.Text>
                <Card.Text>
                  I'm a dedicated Christian husband and father of three, passionate about music, teaching, and a range of skills in woodworking, electronics, tech, and mechanics. I thrive on being resourceful to nurture my family, foster creativity, and use technology for positive impacts inspiring lifelong learning and personal growth. A true jack of all trades, my life is a symphony of various interests. With the soul of a jazz enthusiast, I bring spontaneity and structure to everything I do. From exploring machines to crafting furniture, each endeavor is enriched by the love and support of my family—the chord that ties together the melodies of my diverse pursuits.
                  <p>

                  </p>
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
