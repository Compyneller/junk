import React from "react";
import CardComp from "../components/CardsComp/CardComp";
import ContactUs from "../components/ContactUs/ContactUs";
import Hero from "../components/Hero/Hero";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import SellYourScrap from "../components/SellYourScrap/SellYourScrap";
import SplideComp from "../components/Splide/SplideComp";
import Why from "../components/Why/Why";
import { AnimatePresence, motion } from "framer-motion";
const Home = () => {
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
      <Hero />
      <Section1 />
      <CardComp />
      <Section2 />
      <Why />
      <SellYourScrap />
      <SplideComp />
      <ContactUs />
    </motion.div>
  );
};

export default Home;
