import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { whyData } from "../../data/cardData";
import "./why.scss";
const Why = () => {
  return (
    <div className="why-maincontainer">
      <div className="why-container"></div>
      <Container className="py-5">
        <h1>Why Join Us</h1>
        <br />
        <Row className="g-3">
          {whyData.map((items, index) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <Card className="why-card">
                  <Card.Body>
                    <img src={items.img} height={120} alt={items.name} />
                    <h5>{items.name}</h5>
                    <p>{items.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Why;
