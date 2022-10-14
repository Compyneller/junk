import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import FormComp from "../components/Hero/FormComp";
import { AnimatePresence, motion } from "framer-motion";
const ContactUsPage = () => {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{ duration: 0.75 }}
      variants={{
        initialState: {
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState: {
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState: {
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },
      }}>
      <Container className="py-5">
        <motion.h1
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 2,
          }}
          className="text-center mb-5">
          Contact Us
        </motion.h1>
        <Row className="g-3">
          <Col sm={12} lg={6}>
            <motion.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 4,
              }}>
              <FormComp />
            </motion.div>
          </Col>
          <Col sm={12} lg={6}>
            <motion.div
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 6,
              }}>
              <Card>
                <Card.Header as="h3" className="text-center">
                  Contact Info
                </Card.Header>
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/fluency/344/location-update.png"
                      height={60}
                      width={60}
                      className="me-3"
                      alt=""
                    />
                    <p className="my-auto">
                      Location : Unit No. 1017-A to 1017-I 10th Floor, JMD
                      Megapolis, Sohna Road, Sector-48, Gurugram, Haryana 122018
                    </p>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-phone-100-most-used-icons-flaticons-flat-flat-icons.png"
                      height={60}
                      width={60}
                      className="me-3"
                      alt=""
                    />
                    <p className="my-auto">Phone : +91-931 149 8997</p>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/fluency/344/circled-envelope.png"
                      height={60}
                      width={60}
                      className="me-3"
                      alt=""
                    />
                    <p className="my-auto">Email : info@scrapcareindia.com</p>
                  </div>
                  <br />
                  <div className="d-flex align-items-center">
                    <img
                      src="https://img.icons8.com/fluency/344/globe.png"
                      height={60}
                      width={60}
                      className="me-3"
                      alt=""
                    />
                    <p className="my-auto">
                      Website : https://www.scrapcareindia.com/
                    </p>
                  </div>
                  <br />
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default ContactUsPage;
