import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container">
      <nav
        style={{
          margin: "0 auto 2%"
        }}
      >
        <Link to={`/`}>
          <img
            src="https://image.flaticon.com/icons/png/512/25/25694.png"
            width="30"
            height="30"
            alt="home"
            style={{ float: "center", width: 35, height: 35 }}
          />
        </Link>
      </nav>
    </div>
  );
}
