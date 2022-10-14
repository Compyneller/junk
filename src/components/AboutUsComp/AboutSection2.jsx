import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const AboutSection2 = () => {
  return (
    <div className="bg-dark py-5">
      <Container>
        <Row className="g-3">
          <Col xs={12} sm={6} lg={4} className="d-flex justify-content-end">
            <Card
              className="bg-dark shadow text-light text-center"
              style={{ border: "none" }}>
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-mission-business-motivation-wanicon-flat-wanicon.png"
                  height={120}
                  alt=""
                />
                <h5 style={{ fontWeight: "bold" }}>Our Mission</h5>
                <p className="text-center">
                  Scrap Becho only aims to provide best scrap dealing experience
                  to the bestest possible way to ensure you get profit of your
                  scrap and waste materils at the end.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="d-flex justify-content-end">
            <Card
              className="bg-dark shadow text-light text-center"
              style={{ border: "none" }}>
              <Card.Body>
                <img
                  src="https://img.icons8.com/bubbles/344/see-male-account.png"
                  height={120}
                  alt=""
                />
                <h5 style={{ fontWeight: "bold" }}>Our Vision</h5>
                <p className="text-center">
                  Scrap Becho ensures the enviornment cleanliness by
                  transporting your scrap to the recellying hub nearby. Our
                  vision is clear to profit the vendor in dealing the scrap
                  materials at the best price
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} lg={4} className="d-flex justify-content-end">
            <Card
              className="bg-dark shadow text-light text-center"
              style={{ border: "none" }}>
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-value-business-model-canvas-wanicon-flat-wanicon.png"
                  height={120}
                  alt=""
                />
                <h5 style={{ fontWeight: "bold" }}>Our Values</h5>
                <p className="text-center">
                  We work with great honestly unlike other and pay you at the
                  best price and valuate your scrap by visit the site and place
                  for best value price.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection2;
