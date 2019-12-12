import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { loadJourneys } from "../actions/journeys";
import png from "../assets/suitcase.png";

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
                <Link
                  to={`/journey/${journey.id}`}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      minWidth: "18rem",
                      maxWidth: "18rem",
                      margin: "1rem"
                    }}
                    className="text-center"
                    border="warning"
                    key={journey.id}
                    id="card"
                  >
                    <Card.Header>
                      <img src={png} width="30" alt="home" /> to{" "}
                      {journey.country}
                    </Card.Header>

                    <Card.Body style={{ maxHeight: "12rem", overflow: "auto" }}>
                      <Card.Title className="calli">{journey.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {date.includes("in") ? "Starts " : "Ended "}
                        {date}
                      </small>
                    </Card.Footer>
                  </Card>
                </Link>
              );
            })}
          </CardDeck>
        </div>
      )}
    </main>
  );
}
