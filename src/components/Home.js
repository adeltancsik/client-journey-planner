import React from "react";
import JourneyList from "./JourneyList";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import AddJourneyFormContainer from "./AddJourneyFormContainer";
import { deleteJourney } from "../actions/journeys";

export default function Home() {
  const journeys = useSelector(state => state.journeys);
  const user = useSelector(state => state.user);
  const username = useSelector(state => state.username);

  const dispatch = useDispatch();

  const onDelete = itemId => {
    dispatch(deleteJourney(itemId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

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
          <h1 className="calli">
            <b>Welcome {username}!</b>
          </h1>
          <AddJourneyFormContainer />
          <JourneyList journeys={journeys} onDelete={onDelete} />
        </div>
      )}
    </div>
  );
}
