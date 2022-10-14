import React from "react";
import { Card, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const FormComp = () => {
  return (
    <Card className="w-100 shadow" style={{ height: "100%", border: "none" }}>
      <Card.Header as="h3" className="text-center bg-light">
        Get in touch with us
      </Card.Header>
      <Card.Body>
        <p className="text-secondary text-center">
          Any question or remarks? Just write us a message
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter Contact Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
          </Form.Group>
          <Form.Label>Message</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormComp;
