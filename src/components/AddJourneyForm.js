import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AddJourneyForm(props) {
  return (
    <div className="journeyform">
      {!props.countries ? (
        "Loading..."
      ) : (
        <div>
          <h3>Start to plan a new journey:</h3>
          <Form onSubmit={props.onSubmit} className="container">
            <Row style={{ justifyContent: "center" }}>
              <Form.Group as={Col} md="3">
                <Form.Control
                  type="text"
                  name="name"
                  value={props.name}
                  onChange={props.handleNameInput}
                  placeholder="Name of the journey"
                />
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Control
                  as="select"
                  type="text"
                  name="country"
                  value={props.country}
                  onChange={props.handleCountryInput}
                >
                  <option>Choose a country...</option>
                  {props.countries.map(countryName => {
                    return <option key={countryName}>{countryName}</option>;
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Control
                  type="text"
                  name="startDate"
                  value={props.startDate}
                  onChange={props.handleStartDateInput}
                  placeholder="Starting date"
                />
              </Form.Group>
            </Row>
            <Button
              variant="outline-dark"
              type="submit"
              value="Submit"
              size="sm"
            >
              Plan!
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
}
