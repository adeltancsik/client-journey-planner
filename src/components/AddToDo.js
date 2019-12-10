import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AddToDo(props) {
  return (
    <div className="todoform">
      <Form onSubmit={props.onSubmit} className="container">
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Control
              type="text"
              name="name"
              value={props.name}
              onChange={props.handleNameInput}
              placeholder="What to do?"
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Control
              type="text"
              name="description"
              value={props.description}
              onChange={props.handleDescriptionInput}
              placeholder="Add more info"
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Control
              type="text"
              name="time"
              value={props.time}
              onChange={props.handleTimeInput}
              placeholder="Time"
            />
          </Form.Group>
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Add!
        </Button>
      </Form>
    </div>
  );
}
