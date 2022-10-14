import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const AboutSection3 = () => {
  return (
    <div className="py-5" style={{ background: "#6200EA" }}>
      <Container className="text-light">
        <h5 style={{ fontWeight: "bold" }}>WE ARE DEDICATED FOR SCRAP</h5>
        <h1>Guarantee for the Best Competative Price for your Scrap!</h1>
        <br />
        <p>
          The Scrap Becho ensures by giving gurantee to pay you the best price
          for your scrap which includes the to and fro charges for Mumbai
          Region. Thus most of the scrap seller give us the chance to serve them
          with our best competative price. Now you look at our list of what
          scrap you are selling at the section of scrap buyer menu! Hope it is
          listed your scrap. We have a unique way of handling the scrap and
          recellying it with eco-friendly environment.
        </p>
        <Row className="g-3">
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ background: "none", border: "none" }}>
              <Card.Body>
                <h1>10+</h1>
                <h5>Business Year</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ background: "none", border: "none" }}>
              <Card.Body>
                <h1>240+</h1>
                <h5>Satiesfied Clients</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ background: "none", border: "none" }}>
              <Card.Body>
                <h1>2000+</h1>
                <h5>Successfull Deals</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card style={{ background: "none", border: "none" }}>
              <Card.Body>
                <h1>20+</h1>
                <h5>Associated with Skilled Professionals</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection3;
