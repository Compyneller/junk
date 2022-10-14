import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const AboutUsSection1 = () => {
  return (
    <Container className="py-5">
      <Row className="g-5">
        <Col
          sm={12}
          lg={7}
          className="d-flex flex-column justify-content-center">
          <p>
            Scrap Becho is in business of scrap dealer, scrap buyer, scrap
            purchaser, scrap merchant and scrap trader of scrap and old stuff
            which includes paper scrap, cardboard scrap, computer scrap, IT
            scrap, metal scrap, Aluminium scrap, plastic scrap, laptop scrap,
            car scrap, cable wire scrap, construction and demolition scrap,
            wooden scrap, building construction scrap, furniture scrap, ferrous
            scrap, non-ferrous scrap based in Mumbai, Maharashtra, India since
            last many years.
          </p>
          <p>
            We deal in all type of recycleable scrap. We offer best price at
            your convenient for your scrap which include metals scrap, Aluminium
            scrap, computer scrap and IT scrap, paper scrap, car scrap, cable
            scrap, plastic scrap etc.
          </p>
          <Row className="g-3">
            <Col xs={6} sm={4} lg={3}>
              <motion.div whileHover={{ y: -10 }}>
                <Button
                  className="w-100 d-flex justify-content-center align-items-center"
                  style={{
                    background: "#4267B2",
                    border: "none",
                    gap: ".5rem",
                  }}>
                  <img
                    src="https://img.icons8.com/ios/344/facebook-new.png"
                    height={20}
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  Share
                </Button>
              </motion.div>
            </Col>
            <Col xs={6} sm={4} lg={3}>
              <motion.div whileHover={{ y: -10 }}>
                <Button
                  className="w-100 d-flex justify-content-center align-items-center"
                  style={{
                    background: "#55ACEE",
                    border: "none",
                    gap: ".5rem",
                  }}>
                  <img
                    src="https://img.icons8.com/ios/344/twitter--v1.png"
                    height={20}
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  Tweet
                </Button>
              </motion.div>
            </Col>
            <Col xs={6} sm={4} lg={3}>
              <motion.div whileHover={{ y: -10 }}>
                <Button
                  className="w-100 d-flex justify-content-center align-items-center"
                  style={{
                    background: "#25D366",
                    border: "none",
                    gap: ".5rem",
                  }}>
                  <img
                    src="https://img.icons8.com/material-outlined/344/whatsapp--v1.png"
                    height={20}
                    alt=""
                    style={{ filter: "invert(1)" }}
                  />
                  Share
                </Button>
              </motion.div>
            </Col>
            <Col xs={6} sm={4} lg={3}>
              <Row className="g-3">
                <Col xs={6} sm={4} lg={3}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%",
                    }}>
                    <Button
                      className="w-100 d-flex justify-content-center align-items-center"
                      style={{
                        background: "#FFFC00",
                        border: "none",
                      }}>
                      <img
                        src="https://img.icons8.com/ios-filled/344/bell.png"
                        height={22}
                        alt=""
                      />
                    </Button>
                  </motion.div>
                </Col>
                <Col xs={6} sm={4} lg={3}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%",
                    }}>
                    <Button
                      className="w-100 d-flex justify-content-center align-items-center"
                      style={{
                        background: "#FFBD00",
                        border: "none",
                      }}>
                      <img
                        src="https://img.icons8.com/ios-glyphs/344/sms.png"
                        height={22}
                        alt=""
                      />
                    </Button>
                  </motion.div>
                </Col>
                <Col xs={6} sm={4} lg={3}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%",
                    }}>
                    <Button
                      className="w-100 d-flex justify-content-center align-items-center"
                      style={{
                        background: "#7D7D7D",
                        border: "none",
                      }}>
                      <img
                        src="https://img.icons8.com/ios-filled/344/circled-envelope.png"
                        height={22}
                        alt=""
                      />
                    </Button>
                  </motion.div>
                </Col>
                <Col xs={6} sm={4} lg={3}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: -90,
                      borderRadius: "100%",
                    }}>
                    <Button
                      className="w-100 d-flex justify-content-center align-items-center"
                      style={{
                        background: "#000",
                        border: "none",
                      }}>
                      <img
                        src="https://img.icons8.com/ios-filled/344/print.png"
                        height={22}
                        style={{ filter: "invert(1)" }}
                        alt=""
                      />
                    </Button>
                  </motion.div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={5}>
          <img
            src="https://images.unsplash.com/photo-1531700986483-75a9b25ab322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="w-100"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsSection1;
