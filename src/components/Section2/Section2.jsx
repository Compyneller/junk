import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { secondCardData } from "../../data/cardData";
import { motion } from "framer-motion";
import "./section2.scss";
const Section2 = () => {
  return (
    <Container className="py-5 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5, duration: 3 }}
        viewport={{ once: true, amount: 0.1 }}>
        How can you get our services?
      </motion.h1>
      <br />
      <Row className="g-3">
        {secondCardData.map((items, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: `${items.delay}`,
                }}
                viewport={{ once: true, amount: 0.1 }}>
                <Card className="section2-card shadow">
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img src={items.img} height={250} alt="" />
                    <h5>{items.name}</h5>
                    <p className="text-secondary">{items.text}</p>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Section2;
