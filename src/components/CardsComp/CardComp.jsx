import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { cardData } from "../../data/cardData";
import "./CardComp.scss";
import { motion } from "framer-motion";
const CardComp = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {cardData.map((items, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: `${items.delay}`,
                }}
                viewport={{ once: true, amount: 0.1 }}>
                <Card className="shadow card-comp" style={{ height: "100%" }}>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img src={items.image} height={100} alt="" />

                    <h5>{items.name}</h5>
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

export default CardComp;
