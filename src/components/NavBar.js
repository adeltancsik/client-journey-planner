import React from "react";
import { Link } from "react-router-dom";
import png from "../assets/globe-icon.png";
import { Badge } from "react-bootstrap";

export default function Navbar() {
  return (
    <div className="container">
      <nav
        style={{
          margin: "0 auto 2%"
        }}
      >
        <Link to={`/`}>
          <Badge variant="light">
            <b style={{ fontSize: "20px", padding: "8px" }}>
              J{" "}
              <img
                // src="https://image.flaticon.com/icons/png/512/25/25694.png"
                src={png}
                width="50"
                alt="home"
                style={{ float: "center", width: 35, height: 35 }}
              />
              URNEY PLANNER
            </b>
          </Badge>
        </Link>
      </nav>
    </div>
  );
}
