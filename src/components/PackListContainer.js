import React from "react";
import { ListGroup, Button } from "react-bootstrap";

export default function PackListContainer() {
  return (
    <div className="packlist">
      <ListGroup>
        <ListGroup.Item>
          <b>My Packing List</b>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button>x</Button> Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
