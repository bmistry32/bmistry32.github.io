import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";

function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">👋🏽</span>Hey!
                <br></br>Looks Like You've Stumbled Across My Website!
              </h1>

              <Aboutcard />

            </Col>
            <Col md={4} style={{ padding: 70 }} className="home-about-social">
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/bmistry12"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons btn-github"
                  >
                    <FaGithub />
                  </a>
                </li><br /><br />
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/bhavina-mistry/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons btn-linkedin"
                  >
                    <FaLinkedinIn />
                  </a>
                </li><br /><br />
                <li className="social-icons">
                  <a
                    href="https://twitter.com/bmistry13"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons btn-twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
