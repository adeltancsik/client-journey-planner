import React, { useEffect } from "react";
import { loadJourneys } from "../actions/journeys";
import JourneyList from "./JourneyList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";

export default function Home() {
  const journeys = useSelector(state => state.journeys);
  const user = useSelector(state => state.user);
  const username = useSelector(state => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJourneys());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      {!user ? (
        <div>
          <p>
            If you don't have an account yet, please{" "}
            <Link to={`/signup`}>Sign Up</Link>!
          </p>
          <LoginFormContainer />
        </div>
      ) : (
        <h2>Welcome {username}!</h2>
        // <AddEventFormContainer />
      )}
      <JourneyList journeys={journeys} />
    </div>
  );
}
