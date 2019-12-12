import React from "react";
import { Form, Button, Row, Col, Accordion } from "react-bootstrap";
import { InputMoment } from "react-input-moment";

export default function AddToDo(props) {
  return (
    <div className="todoform">
      <Form onSubmit={props.onSubmit} className="container">
        <Row>
          <Col md="5">
            <Accordion>
              <Accordion.Toggle as={Form.Group} eventKey="0">
                <Form.Control
                  className="output"
                  type="text"
                  value={props.time.format("MMMM Do YYYY, h:mm:ss a")}
                  readOnly
                />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Form.Group>
                  <div className="wrapper small">
                    <InputMoment
                      moment={props.time}
                      locale="en"
                      showSeconds="true"
                      onChange={mom => props.setTime(mom)}
                    />
                  </div>
                </Form.Group>
              </Accordion.Collapse>
            </Accordion>
          </Col>
        </Row>
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
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Add!
        </Button>
      </Form>
    </div>
  );
}
