import React from "react";
import JourneyList from "./JourneyList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import AddJourneyFormContainer from "./AddJourneyFormContainer";

export default function Home() {
  const journeys = useSelector(state => state.journeys);
  const user = useSelector(state => state.user);
  const username = useSelector(state => state.username);

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
        <div>
          <h2>Welcome {username}!</h2>
          <AddJourneyFormContainer />
          <JourneyList journeys={journeys} />
        </div>
      )}
    </div>
  );
}
