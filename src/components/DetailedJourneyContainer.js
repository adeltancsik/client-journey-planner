import React, { useEffect } from "react";
import { loadJourney } from "../actions/journeys";
import { loadTodos, deleteToDo } from "../actions/todos";
import { loadPackList } from "../actions/packlist";
import DetailedJourney from "./DetailedJourney";
import { useDispatch, useSelector } from "react-redux";

export default function DetailedJourneyContainer() {
  const journey = useSelector(state => state.journey);
  const todos = useSelector(state => state.todos);
  const country = useSelector(state => state.country);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    const res = url.split("/", 5);
    const journeyId = Number(res[4]);
    async function getJourney() {
      await dispatch(loadJourney(journeyId));
    }
    async function getToDo() {
      await dispatch(loadTodos(journeyId));
    }
    async function getPackList() {
      await dispatch(loadPackList(journeyId));
    }
    getJourney();
    getToDo();
    getPackList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = itemId => {
    dispatch(deleteToDo(itemId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className="detailedjourney">
      {!journey || !todos || !country ? (
        "Loading..."
      ) : (
        <DetailedJourney
          journey={journey}
          todos={todos}
          country={country}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}
