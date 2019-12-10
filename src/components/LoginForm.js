import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import "./styling/LoginForm.css";

export default function LoginForm(props) {
  return (
    <div className="loginform">
      <h5>Please log in:</h5>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <Form.Group controlId="formBasicEmail">
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
          <Form.Group controlId="formBasicPassword">
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
        </Row>
        <Button variant="outline-dark" type="submit" value="Submit" size="sm">
          Log In
        </Button>
      </Form>
    </div>
  );
}
