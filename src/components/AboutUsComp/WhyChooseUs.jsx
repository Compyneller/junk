import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <div className="w-100 text-center py-5" style={{ background: "#EDEDED" }}>
      <Container className="py-5">
        <h5 className="text-secondary" style={{ fontWeight: "bold" }}>
          3 Basic Steps
        </h5>
        <h1>Why Choose Us</h1>
        <br />
        <Row className="g-3">
          <Col xs={12} sm={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}>
              <Card
                className="shadow"
                style={{
                  border: "none",
                  background: "#EDEDED",
                  height: "100%",
                }}>
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-sbts2018-flat-sbts2018/344/external-cube-virtual-reality-sbts2018-flat-sbts2018.png"
                    height={150}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "bold" }}>Valuation</h5>
                  <p>
                    Valuate your scrap by sending the WhatsApp and if necessary
                    will visit the site and place at you the exact value price
                    for your scrap.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}>
              <Card
                className="shadow"
                style={{
                  border: "none",
                  background: "#EDEDED",
                  height: "100%",
                }}>
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-payment-black-friday-cyber-monday-flaticons-flat-flat-icons-3.png"
                    height={150}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "bold" }}>Payment</h5>
                  <p>
                    We pay the correct value of your scrap on the completion of
                    the process of evaluating the products through any payment
                    mode.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <motion.div
              whileHover={{ y: -10 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}>
              <Card
                className="shadow"
                style={{
                  border: "none",
                  background: "#EDEDED",
                  height: "100%",
                }}>
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-flat-icons-pause-08/452/external-pickup-farm-and-garden-flat-icons-pause-08.png"
                    height={150}
                    alt=""
                  />
                  <h5 style={{ fontWeight: "bold" }}>Transportation</h5>
                  <p>
                    After evaluation and payment, we collect the scrap from the
                    site and bring it to our scrap yard located neareby for
                    recellying.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
