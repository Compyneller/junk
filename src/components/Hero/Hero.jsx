import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import video from "../../assets/190802_17a_HD_36.mp4";
import image1 from "../../assets/heather-zabriskie-yBzrPGLjMQw-unsplash.jpg";
import image2 from "../../assets/beth-macdonald-a1O67ZQmaYc-unsplash.jpg";
import image3 from "../../assets/camille-villanueva-5IJ9UaT6tLk-unsplash.jpg";
import screw from "../../assets/icons8-screw-100.png";
import bolt from "../../assets/icons8-bolt-100.png";
import hazard from "../../assets/icons8-electricity-hazard-100.png";
import bin from "../../assets/icons8-empty-trash-100.png";
import FormComp from "./FormComp";
import "./Hero.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero-container">
      {/* <video src={video} autoPlay muted loop />
      <Container> */}

      <Container>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <Row className="g-3">
              <div className="col-6">
                <motion.div
                  initial={{ scale: 5, opacity: 0, y: 200 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    duration: 3,
                    bounce: 0.5,
                  }}>
                  <Card
                    className="w-100 shadow"
                    style={{ height: "100%", border: "none" }}>
                    <Card.Body>
                      <motion.img
                        initial={{ scale: 5, opacity: 0, y: 200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          duration: 3,
                          bounce: 0.5,
                        }}
                        src={screw}
                        className="screw w-100"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
              <div className="col-6">
                <motion.div
                  initial={{ scale: 5, opacity: 0, y: 200 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    type: "spring",
                    duration: 3,
                    bounce: 0.5,
                  }}>
                  <Card
                    className="w-100 shadow"
                    style={{ height: "100%", border: "none" }}>
                    <Card.Body>
                      <motion.img
                        initial={{ scale: 5, opacity: 0, y: -200 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{
                          delay: 1.5,
                          type: "spring",
                          duration: 3,
                          bounce: 0.5,
                        }}
                        src={bolt}
                        className="bolt w-100"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
              <div className="col-6">
                <motion.div
                  initial={{ scale: 5, opacity: 0, y: 200 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    duration: 3,
                    bounce: 0.5,
                  }}>
                  <Card
                    className="w-100 shadow"
                    style={{ height: "100%", border: "none" }}>
                    <Card.Body>
                      <motion.img
                        initial={{ scale: 5, opacity: 0, x: -200 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{
                          delay: 2.5,
                          type: "spring",
                          duration: 3,
                          bounce: 0.5,
                        }}
                        src={hazard}
                        className="w-100"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
              <div className="col-6">
                <motion.div
                  initial={{ scale: 5, opacity: 0, y: 200 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    delay: 2.5,
                    type: "spring",
                    duration: 3,
                    bounce: 0.5,
                  }}>
                  <Card
                    className="w-100 shadow"
                    style={{ height: "100%", border: "none" }}>
                    <Card.Body>
                      <motion.img
                        initial={{ scale: 5, opacity: 0, x: 200 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{
                          delay: 3,
                          type: "spring",
                          duration: 3,
                          bounce: 0.5,
                        }}
                        src={bin}
                        className="w-100"
                        alt=""
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </div>
            </Row>
          </Col>
          <Col sm={12} lg={6}>
            <motion.div
              style={{ height: "100%" }}
              initial={{ x: -500, scale: 1.2, opacity: 0 }}
              animate={{ x: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 3,
              }}>
              <FormComp />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
