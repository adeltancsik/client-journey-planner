import React from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import moment from "moment";
// import "./styling/EventList.css";

export default function JourneyList(props) {
  return (
    <main>
      {!props.journeys ? (
        "Loading..."
      ) : (
        <div
          className="container"
          style={{
            maxWidth: "70rem"
          }}
        >
          <CardDeck className="container">
            {props.journeys.map(journey => {
              const date = moment(journey.startDate, "YYYY-MM-DD").fromNow();
              return (
                <Card
                  style={{
                    minWidth: "18rem",
                    maxWidth: "18rem",
                    margin: "1rem"
                  }}
                  className="text-center"
                  border="info"
                  key={journey.id}
                >
                  <Link to={`/journey/${journey.id}`} className="link">
                    {/* <Card.Img
                      variant="top"
                      src={journey.url}
                      alt={journey.name}
                    /> */}
                    <Card.Header>{journey.country}</Card.Header>
                  </Link>
                  <Card.Body style={{ maxHeight: "12rem", overflow: "auto" }}>
                    <Link to={`/journey/${journey.id}`} className="link">
                      <Card.Title>{journey.name}</Card.Title>
                    </Link>
                    {/* <Card.Text>{journey.country}</Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      {date.includes("in") ? "Starts " : "Ended "}
                      {date}
                    </small>
                  </Card.Footer>
                </Card>
              );
            })}
          </CardDeck>
        </div>
      )}
    </main>
  );
}
