import React from "react";
import { Badge, Accordion, Card, ListGroup, Button } from "react-bootstrap";
import moment from "moment";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import AddToDoContainer from "./AddToDoContainer";
import png from "../assets/plus-icon.png";
import img from "../assets/list-icon.png";
import icon from "../assets/info.png";
import bin from "../assets/bin-icon.png";
import PackListContainer from "./PackListContainer";

export default function DetailedJourney(props) {
  const date = moment(props.journey.startDate, "YYYY-MM-DD").fromNow();

  const currentCountry = props.country[0];

  // sorting todos by time (also in backend), so when adding a new todo it renders correctly
  let sortedToDos = [];
  if (props.todos) {
    sortedToDos = props.todos.sort((a, b) => {
      return new Date(a.time).getTime() - new Date(b.time).getTime();
    });
  }

  return (
    <div className="detailedjourney">
      {!props.journey || !props.todos || !props.country ? (
        "Loading..."
      ) : (
        <div className="journeydetails">
          <div className="pack-container">
            <Accordion id="pack">
              <Accordion.Toggle as={Badge} eventKey="0">
                <div id="listicon">
                  <img src={img} alt={"list-icon"} width="50" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <PackListContainer />
              </Accordion.Collapse>
            </Accordion>
          </div>
          <div className="country-container">
            <Accordion id="country-info">
              <Accordion.Toggle as={Badge} eventKey="0">
                <div id="listicon">
                  <img src={icon} alt={"location-icon"} width="50" />
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <ListGroup>
                  <ListGroup.Item>
                    <b
                      style={{
                        textDecoration: "underline",
                        fontSize: "22px"
                      }}
                    >
                      Info about {currentCountry.name}
                    </b>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <img src={currentCountry.flag} alt="flag" width="70" />{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Capital:</b> {currentCountry.capital}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Currencies:</b>{" "}
                    {currentCountry.currencies.map(currency => {
                      return (
                        <ListGroup.Item key={currency.name}>
                          {currency.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Languages:</b>{" "}
                    {currentCountry.languages.map(language => {
                      return (
                        <ListGroup.Item key={language.name}>
                          {language.name}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Collapse>
            </Accordion>
          </div>
          <h1 className="calli" style={{ textDecoration: "underline" }}>
            {props.journey.name}
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
          <div className="timeLine">
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
            {props.todos.length === 0 ? (
              " "
            ) : (
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
                      <Button
                        variant="outline-light"
                        type="submit"
                        value="Submit"
                        size="sm"
                        style={{ float: "right" }}
                        key={todo.id}
                        onClick={() => props.onDelete(todo.id)}
                      >
                        <img src={bin} alt={"icon"} width="25" />
                      </Button>
                      <h3 style={{ color: "#FFFFFF" }} className="calli">
                        <b>{todo.name}</b>
                      </h3>
                      <p className="calli">{todo.description}</p>
                    </TimelineItem>
                  );
                })}
              </Timeline>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
