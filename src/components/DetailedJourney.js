import React from "react";
import { Badge } from "react-bootstrap";
import moment from "moment";

export default function DetailedJourney(props) {
  const date = moment(props.journey.startDate, "YYYY-MM-DD").fromNow();
  return (
    <div className="detailedjourney">
      {!props.journey ? (
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
        </div>
      )}
    </div>
  );
}
