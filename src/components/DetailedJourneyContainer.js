import React, { useEffect } from "react";
import { loadJourney } from "../actions/journeys";
import { loadTodos } from "../actions/todos";
import DetailedJourney from "./DetailedJourney";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import LoginFormContainer from "./LoginFormContainer";
// import AddJourneyFormContainer from "./AddJourneyFormContainer";

export default function DetailedJourneyContainer() {
  const journey = useSelector(state => state.journey);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    var res = url.split("/", 5);
    async function getJourney() {
      await dispatch(loadJourney(Number(res[4])));
    }
    async function getToDo() {
      await dispatch(loadTodos(Number(res[4])));
    }
    getJourney();
    getToDo();
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
      {!journey ? (
        "Loading..."
      ) : (
        <DetailedJourney journey={journey} todos={todos} />
      )}
    </div>
  );
}
