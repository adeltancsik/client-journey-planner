import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignupForm(props) {
  return (
    <div className="signupform">
      <h5>Please sign up:</h5>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Form.Group>
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={props.values.email}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={props.values.password}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                placeholder="Add a username"
                name="username"
                value={props.values.username}
                onChange={props.onChange}
              />
            </Col>
          </Form.Group>
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Submit
        </Button>
      </Form>
      <Link to={`/`}>Back to Homepage</Link>
    </div>
  );
}
