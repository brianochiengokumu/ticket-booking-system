import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const element = (
  <h1>
  Feel free to pick from our upcoming Events
  </h1>
)

class buyTicket extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  }
 
  render() {
    return (
      element,
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select which Event</Form.Label>
          <Form.Control as="select">
            <option value="machackos">Machackos</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select how many Tickets</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select The Type of Ticket</Form.Label>
        <Form.Control as="select">
          <option value="regular">Regular</option>
          <option value="vip">V.I.P</option>
        </Form.Control>
      </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control placeholder="0712004625" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default buyTicket;
