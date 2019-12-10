import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AddEventForm(props) {
  return (
    <div className="journeyform">
      <h3>Start to plan a new journey:</h3>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="name"
                value={props.name}
                onChange={props.handleNameInput}
                placeholder="Name of the journey"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="country"
                value={props.country}
                onChange={props.handleCountryInput}
                placeholder="Country"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                name="startDate"
                value={props.startDate}
                onChange={props.handleStartDateInput}
                placeholder="Starting date"
              />
            </Col>
          </Form.Group>
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Plan!
        </Button>
      </Form>
    </div>
  );
}
