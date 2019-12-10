import React, { useState } from "react";
import { createTodo } from "../actions/todos";
import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./AddToDo";

export default function AddToDoContainer() {
  const journey = useSelector(state => state.journey);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [journeyId] = useState(journey.id);

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(createTodo({ name, description, time, journeyId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setName("");
    setDescription("");
    setTime("");
  };

  const handleNameInput = event => {
    setName(event.target.value);
  };
  const handleDescriptionInput = event => {
    setDescription(event.target.value);
  };
  const handleTimeInput = event => {
    setTime(event.target.value);
  };

  return (
    <AddToDo
      onSubmit={onSubmit}
      handleNameInput={handleNameInput}
      handleDescriptionInput={handleDescriptionInput}
      handleTimeInput={handleTimeInput}
      name={name}
      description={description}
      time={time}
    />
  );
}
