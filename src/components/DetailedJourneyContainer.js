import React, { useEffect } from "react";
import { loadJourney } from "../actions/journeys";
import { loadTodos } from "../actions/todos";
import DetailedJourney from "./DetailedJourney";
import { useDispatch, useSelector } from "react-redux";

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
      {!journey ? (
        "Loading..."
      ) : (
        <DetailedJourney journey={journey} todos={todos} />
      )}
    </div>
  );
}
