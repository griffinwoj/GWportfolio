import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";
import gSlogo from "../images/griffinstudio.png"; // Adjust the path as per your project structure

// Header component
function Header() {
  return (
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              {/* <FontAwesomeIcon
                icon={faMusic}
                flip="horizontal"
                className="fa-knight"
                size="xl"
                style={{ color: "#white" }}
              /> */}
              <img src={gSlogo} alt="Griffin Studio Logo" className="gIcon" />
              {/* <FontAwesomeIcon
                icon={faMusic}
                flip="horizontal"
                className="fa-knight"
                size="xl"
                style={{ color: "#white" }}
              /> */}
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}

// Export Header
export default Header;
