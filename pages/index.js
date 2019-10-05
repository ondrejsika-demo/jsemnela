import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../components/Image";

export default () => {
  return (
    <>
      <Row>
        <Col sm={6}>
          <Image src={require("../data/nela.jpg")} />
        </Col>
        <Col sm={6}>
          <p>Ahoy, I'm Nela,<br/>
          I'm half labrador half swiss shepard.</p><p>I love watter (anytime, anywhere, dirty is better than clean), mud, mountines and play fetch.</p>
          <p>I was born 26th of May 2015 close to Hradec Kralove. Now, I live in Prague with my best owners Ondrej and Zuzka.</p>
          </Col>
      </Row>
    </>
  );
};