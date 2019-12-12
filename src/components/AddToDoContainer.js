import React, { useState } from "react";
import { createTodo } from "../actions/todos";
import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./AddToDo";
import moment from "moment";

export default function AddToDoContainer() {
  const journey = useSelector(state => state.journey);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [journeyId, setJourneyId] = useState("");
  const [time, setTime] = useState(moment());

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(createTodo({ name, description, time, journeyId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setName("");
    setDescription("");
    setJourneyId("");
  };

  const handleNameInput = event => {
    setName(event.target.value);
    setJourneyId(journey.id);
  };
  const handleDescriptionInput = event => {
    setDescription(event.target.value);
  };

  return (
    <AddToDo
      onSubmit={onSubmit}
      handleNameInput={handleNameInput}
      handleDescriptionInput={handleDescriptionInput}
      name={name}
      description={description}
      time={time}
      setTime={setTime}
    />
  );
}
