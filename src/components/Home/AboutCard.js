import React from "react";
import Card from "react-bootstrap/Card";
// import Type from "./Type";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ fontSize: "1.5rem" }}>
          I'm <strong className="main-name"> Bhavina Mistry</strong><br /><br />
          {/* <span style={{ fontSize: "0.75rem" }}><Type /></span><br /> */}
            Feel free to reach out!
          </ p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
