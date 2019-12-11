import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { loadJourneys } from "../actions/journeys";
import png from "../assets/suitcase.png";
// import "./styling/EventList.css";

export default function JourneyList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJourneys());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const journeys = useSelector(state => state.journeys);

  return (
    <main>
      {!journeys ? (
        "Loading..."
      ) : (
        <div
          className="journeyList"
          style={{
            maxWidth: "70rem"
          }}
        >
          <CardDeck className="container">
            {journeys.map(journey => {
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
                    <Card.Header>
                      <img
                        // src="https://image.flaticon.com/icons/png/512/25/25694.png"
                        src={png}
                        width="30"
                        alt="home"
                      />{" "}
                      to {journey.country}
                    </Card.Header>
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
