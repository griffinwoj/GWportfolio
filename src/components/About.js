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
                My life is a beautiful synthesis of several endeavors, a complicated symphony of interests and passions. I find comfort and inspiration in the rich melodies and improvisational rhythms that music provides because I have the soul of a jazz enthusiast. I apply this attitude to all facets of my life, just how jazz bridges the gap between spontaneity and structure.
                <p>
                Since a young age, my interest in mechanics has stoked my curiosity, inspiring me to investigate machines' inner workings and appreciate their elegant designs. In a similar spirit, I've immersed myself in the realm of networking and coding, appreciating the chance to build digital environments that reflect the complexity of the real world.
                </p>
                <p>
Away from the digital realm, I find myself drawn to the timeless art of carpentry. The process of shaping raw materials into functional and beautiful creations aligns seamlessly with my appreciation for both aesthetics and craftsmanship. The tactile nature of carpentry provides a grounding contrast to my other interests, reminding me of the tangible beauty that can emerge from skillful hands.
</p>
<p>
Amidst these passions, the cornerstone of my world is my devotion to family life. Just as music weaves together different notes to create harmony, my family is the chord that ties together the various melodies of my interests. Every endeavor, whether it's exploring the intricacies of a musical composition, deciphering the complexities of a machine, crafting a piece of furniture, or writing lines of code, is enriched by the love and support of my family.
</p>
<p>
I'm constantly motivated by the connections that appear between seemingly unrelated interests in this complex tapestry of interests. I conduct the symphony of my life with a balance of the technical and the creative, much how jazz musicians improvise within a set structure. The harmony of the various notes of music, mechanics, programming, carpentry, and the unwavering love of family into a musical and meaningful existence is where I find my true self.
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
