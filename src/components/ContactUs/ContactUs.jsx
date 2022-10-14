import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "../../assets/mailbox-hologram-close-up-4k-2021-08-31-09-18-15-utc.mp4";
import "./Contactus.scss";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <video src={video} muted loop autoPlay />
      <Container>
        <Row>
          <Col sm={12} lg={7}>
            <h1 className="text-light text-center">Contact Us</h1>
            <br />
            <h3>Make best environment with recycle your scrap at low cost. </h3>
            <br />
            <h5>Track where is your pickup reached </h5>
            <p>
              Scrap Care India Traders a leading scrap buyer, purchaser in the
              city. We are the best because we give best price for your old &
              waste scrap. We buy or purchase all kind of scrap like : DG Set,
              Electrical Scrap, Ferrous & Nonferrous Scrap, GI Scrap, Iron
              Scrap, Iron & Steel Pipes Scrap, Lead Scrap, Motor Parts Scrap,
              Nickel Scrap, Office Furnitures, Old Air Condition, Old Machinery,
              Old Vehicles, Plastic Scrap, Solar Scrap, Stainless Steel, Tmt
              Steel Scrap, Wooden Scrap, Aluminium Scrap, Battery Scrap, Brass
              Scrap, Computer Scrap Buyer, Copper Scrap, Demolishing Work Scrap
              Etc.
            </p>
            <Link to="/contact-us">
              <Button variant="outline-light">Contact Us</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
