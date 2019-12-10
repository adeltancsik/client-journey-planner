import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SignupForm(props) {
  return (
    <div className="signupform">
      <h5>Sign up here:</h5>
      <Form onSubmit={props.onSubmit} className="container">
        <Row style={{ justifyContent: "center" }}>
          <Form.Group>
            <Col>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={props.email}
                onChange={props.handleEmailInput}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={props.password}
                onChange={props.handlePasswordInput}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Col>
              <Form.Control
                type="text"
                placeholder="Add a username"
                name="username"
                value={props.username}
                onChange={props.handleUsernameInput}
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
