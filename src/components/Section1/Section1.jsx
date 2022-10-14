import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <Container className="py-5 text-center">
      <h1>
        Junk Becho Is A Trustable Leading Waste Management Company Started In
        2022.
      </h1>
      <br />
      <motion.p
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.5, duration: 3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="text-secondary">
        We cherish what we have and hold on to it even if we are not using it.
        It is equally important to understand what and how to yield more from
        your old items.Now, REUSE—is easier because Team Junk Care India is
        proud to announce a change which can bring more transparency and options
        for the users. Our constant focus is on reduce, reuse and recycle
        motivates us to find the way of discovering, giving, swapping or selling
        pre-loved items online.
        <br />
        In our new move users can display/post pictures of their second hand
        products on our website. These items will immediately get a quote from
        us but if as a user you don’t like it then wait because now others are
        open to quote too. If buyers & sellers interact directly and wish to do
        transaction then they can do it. We can also facilitate the process by
        providing transportation facility and in some cases we can pay on their
        behalf and they can pay us at the time of delivery.
        <br />
        Junk Care India inspires and rewards smarter, everyday choices for a
        more sustainable future.We know that it takes a group effort to make a
        positive impact, which is why we bring together communities, businesses
        and people like you.
        <br />
        Now, users will have more power and we also wish to make it a one stop
        shop for trading old items. As we learn to let go, we create space for
        more or make more.
        <br />
        <br />
        The much needed innovative and advanced systems for rapidly growing
        Indian cities to have BEST out of WASTE. India has a population of 1.3
        billion right now and is expected to have 1.6 billion by 2050.Obviously,
        there is going to be a lot of waste generation. But, we have already
        figured out a way to handle it with 3E's- Effectively, Efficiently and
        Economically
        <br />
        "WE OWN A TECHNOLOGY ENABLED SMART MATERIAL RECOVERY FACILITY WHICH
        SOURCES POST CONSUMER WASTE (OF ALL KINDS!) FROM YOU AND PLAY A KEY ROLE
        IN THE CIRCULAR ECONOMY AND SECURE SUSTAINABLE FUTURE"
        <br /> We are a one stop destination to receive, separate and prepare
        recyclable materials for sale to end user manufacturer.
        <br />
        <br />
        The smart city drive is rapidly changing the way urban areas are growing
        in India. With increase in waste generation, its environmental impact
        and the operational cost of managing it smart waste management solutions
        is of utmost importance. Municipal bodies, industries, hospitals and
        other important stakeholders are expected to move beyond traditional
        waste management systems and adopt innovative technologies which result
        in more integrated solutions.
      </motion.p>
    </Container>
  );
};

export default Section1;
