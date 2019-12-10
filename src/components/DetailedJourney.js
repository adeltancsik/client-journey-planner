import React from "react";
import { Badge, Accordion, Card } from "react-bootstrap";
import moment from "moment";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import AddToDoContainer from "./AddToDoContainer";
import png from "../assets/plus-icon.png";

export default function DetailedJourney(props) {
  const date = moment(props.journey.startDate, "YYYY-MM-DD").fromNow();

  // sorting todos by time (also in backend), so when adding a new todo it renders correctly
  let sortedToDos = [];
  if (props.todos) {
    sortedToDos = props.todos.sort((a, b) => {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    });
  }

  return (
    <div className="detailedjourney">
      {!props.journey || !props.todos ? (
        "Loading..."
      ) : (
        <div className="journeydetails">
          <h1>
            <Badge variant={"light"}>{props.journey.name}</Badge>
          </h1>
          <h4>Journey to {props.journey.country}</h4>
          {/* <img
            src={props.journey.url}
            alt={props.journey.id}
            style={{ width: 220, borderRadius: 40 }}
          /> */}
          <div className="details">
            <p>
              <b>Date: {props.journey.startDate}</b>
              <br />
              <i>
                {date.includes("in") ? "Starts " : "Ended "}
                {date}
              </i>
            </p>
          </div>
          <div>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <img src={png} alt={"plus-icon"} width="30" /> Add new event
                  on my timeline!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <AddToDoContainer />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Timeline lineColor={"#E4592F"}>
              {sortedToDos.map(todo => {
                const formattedTime = moment(todo.time).format(
                  "MMMM Do, h:mm a"
                );
                return (
                  <TimelineItem
                    key={todo.id}
                    dateText={formattedTime}
                    dateInnerStyle={{
                      background: "#FDBE01",
                      color: "#FFFFFF"
                    }}
                    bodyContainerStyle={{
                      background: "#FDBE01",
                      padding: "10px",
                      borderRadius: "8px",
                      boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.3)"
                    }}
                    style={{ color: "#FDBE01" }}
                  >
                    <h3 style={{ color: "#FFFFFF" }}>
                      <b>{todo.name}</b>
                    </h3>
                    <p>{todo.description}</p>
                  </TimelineItem>
                );
              })}
            </Timeline>
          </div>
        </div>
      )}
    </div>
  );
}
