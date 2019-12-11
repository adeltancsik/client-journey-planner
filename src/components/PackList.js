import React from "react";
import { ListGroup, Button, Form, Row, Col } from "react-bootstrap";
import png from "../assets/check-icon.png";
import img from "../assets/plus-icon.png";

export default function PackList(props) {
  return (
    <div className="packlist">
      <ListGroup>
        <ListGroup.Item style={{ textAlign: "center" }}>
          <b style={{ textDecoration: "underline", fontSize: "22px" }}>
            My Packing List
          </b>
        </ListGroup.Item>
        <ListGroup.Item as={Form} sm="1" onSubmit={props.onSubmit}>
          <Row sm="1">
            <Col sm="9">
              <Form.Control
                type="text"
                name="name"
                value={props.name}
                onChange={props.handleNameInput}
                placeholder="What to pack?"
              />
            </Col>
            <Col sm="1" style={{ padding: 0 }}>
              <Button
                variant="outline-light"
                type="submit"
                value="Submit"
                size="sm"
              >
                <img src={img} alt={"check-icon"} width="25" />
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
        {props.packlist.map(item => {
          return (
            <ListGroup.Item
              key={item.id}
              style={
                item.done
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              <Button
                key={item.id}
                variant={item.done ? "success" : "outline-success"}
                style={{ marginRight: "10px" }}
                size="sm"
                onClick={() => props.toggleDone(item.id)}
              >
                <img src={png} alt={"check-icon"} width="13" key={item.id} />
              </Button>

              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
