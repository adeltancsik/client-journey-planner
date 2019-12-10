import React, { useEffect } from "react";
import { loadJourneys } from "../actions/journeys";
import JourneyList from "./JourneyList";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const journeys = useSelector(state => state.journeys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJourneys());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home">
      {/* {!this.props.user ? (
      <div>
        <p>
          If you don't have an account yet, please{" "}
          <Link to={`/signup`}>Sign Up</Link>!
        </p>
        <LoginFormContainer />
      </div>
    ) : (
      <AddEventFormContainer />
    )} */}
      <JourneyList journeys={journeys} />
    </div>
  );
}
