import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/AboutUsComp/WhyChooseUs";
import AboutUsHeader from "../components/AboutUsComp/AboutUsHeader";
import AboutUsSection1 from "../components/AboutUsComp/AboutUsSection1";
import AboutSection2 from "../components/AboutUsComp/AboutSection2";
import AboutSection3 from "../components/AboutUsComp/AboutSection3";
import SplideComp from "../components/Splide/SplideComp";
import ContactUs from "../components/ContactUs/ContactUs";
const About = () => {
  return (
    <div className="About-mainContainer">
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 2,
        }}>
        <AboutUsHeader />
      </motion.div>
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 4,
        }}>
        <AboutUsSection1 />
      </motion.div>
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 6,
        }}>
        <WhyChooseUs />
      </motion.div>
      <motion.div
        initial={{ y: 500 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 3 }}
        viewport={{ once: true, amount: ".1" }}>
        <AboutSection2 />
      </motion.div>
      <motion.div
        initial={{ y: 500 }}
        whileInView={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 3 }}
        viewport={{ once: true, amount: ".1" }}>
        <AboutSection3 />
      </motion.div>
      <SplideComp />
      <ContactUs />
    </div>
  );
};

export default About;
