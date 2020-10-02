import React from "react";
import { Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Form
      style={{
        flexDirection: "column",
        marginTop: "100px",
        marginLeft: "20px",
        maxWidth: "500px",
      }}
    >
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="Please enter you name..." />
      <Form.Label>Subject</Form.Label>
      <Form.Control placeholder="Let us know what you are inquiring about..." />
      <Form.Label>Message</Form.Label>
      <Form.Control
        as="textarea"
        rows="5"
        placeholder="Type your message here..."
      />
      <br />
      <Button variant="primary" type="submit" style={{ maxWidth: "100px" }}>
        Submit
      </Button>
    </Form>
  );
}

export default Contact;
