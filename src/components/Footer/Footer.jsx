import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5, duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-100 py-5 bg-dark text-light">
      <Container>
        <p className="my-auto text-center">
          © Scrap becho all rights reserved. The Brand Scrap becho belongs to
          Fintech India registered in Delhi, India.
        </p>
      </Container>
    </motion.div>
  );
};

export default Footer;
