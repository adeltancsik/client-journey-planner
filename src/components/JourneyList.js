import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardDeck, Button } from "react-bootstrap";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { loadJourneys } from "../actions/journeys";
import png from "../assets/suitcase.png";
import bin from "../assets/bin-icon.png";

export default function JourneyList(props) {
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
                  border="warning"
                  key={journey.id}
                  id="card"
                >
                  {" "}
                  <Link
                    to={`/journey/${journey.id}`}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Header>
                      <img src={png} width="30" alt="home" /> to{" "}
                      {journey.country}
                    </Card.Header>

                    <Card.Body style={{ maxHeight: "12rem", overflow: "auto" }}>
                      <Card.Title className="calli">{journey.name}</Card.Title>
                    </Card.Body>
                  </Link>
                  <Card.Footer>
                    <small className="text-muted">
                      {date.includes("in") ? "Starts " : "Ended "}
                      {date}
                    </small>
                    <Button
                      variant="outline-light"
                      size="sm"
                      style={{ float: "right" }}
                      key={journey.id}
                      onClick={() => props.onDelete(journey.id)}
                    >
                      <img src={bin} alt={"icon"} width="20" />
                    </Button>
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
