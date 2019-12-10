import React, { useEffect } from "react";
import { loadJourney } from "../actions/journeys";
import DetailedJourney from "./DetailedJourney";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import LoginFormContainer from "./LoginFormContainer";
// import AddJourneyFormContainer from "./AddJourneyFormContainer";

export default function DetailedJourneyContainer() {
  const journey = useSelector(state => state.journey);
  //   const user = useSelector(state => state.user);
  //   const username = useSelector(state => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    var res = url.split("/", 5);
    async function getJourney() {
      await dispatch(loadJourney(Number(res[4])));
    }
    // async function getCountry() {}
    getJourney();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="detailedjourney">
      {/* {!user ? (
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
        </div>
      )} */}
      {!journey ? "Loading..." : <DetailedJourney journey={journey} />}
    </div>
  );
}
