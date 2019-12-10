import React from "react";
import { Badge } from "react-bootstrap";
import moment from "moment";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

export default function DetailedJourney(props) {
  const date = moment(props.journey.startDate, "YYYY-MM-DD").fromNow();
  return (
    <div className="detailedjourney">
      {!props.journey || !props.todos ? (
        "Loading..."
      ) : (
        <div className="journeydetails">
          <h2>
            <Badge variant={"light"}>{props.journey.name}</Badge>
          </h2>
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
            <Timeline lineColor={"#E4592F"}>
              {props.todos.map(todo => {
                return (
                  <TimelineItem
                    key={todo.id}
                    dateText={todo.time}
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
                    <h4 style={{ color: "#FFFFFF" }}>{todo.name}</h4>
                    <p>{todo.description}</p>
                  </TimelineItem>
                );
              })}
              <TimelineItem
                key="002"
                dateText={props.journey.startDate}
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
                <h4 style={{ color: "#FFFFFF" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      )}
    </div>
  );
}
