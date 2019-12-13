import React from "react";
import { Link } from "react-router-dom";
import png from "../assets/globe-icon.png";
import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { emptyUser } from "../actions/user";

export default function Navbar() {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(emptyUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <div className="container">
      <nav
        style={{
          margin: "0 auto 2%"
        }}
      >
        <Link to={`/`}>
          <Badge
            variant="light"
            className="calli"
            style={
              !user
                ? {
                    transform: "scale(1.5)",
                    marginTop: "2%",
                    border: "solid #FDBE01 0.5px"
                  }
                : {
                    transform: "scale(1.1)",
                    marginTop: "1%",
                    border: "solid #FDBE01 0.5px"
                  }
            }
          >
            <b style={{ fontSize: "20px", padding: "8px" }}>
              J{" "}
              <img
                src={png}
                width="50"
                alt="home"
                style={{ float: "center", width: 35, height: 35 }}
              />
              URNEY PLANNER
            </b>
          </Badge>
          {user ? (
            <Button
              variant="outline-dark"
              size="sm"
              style={{
                position: "absolute",
                zIndex: "1",
                right: "15%",
                top: "1%"
              }}
              onClick={() => logOut()}
            >
              Log Out
            </Button>
          ) : (
            " "
          )}
        </Link>
      </nav>
    </div>
  );
}
