import React, { useState } from "react";
import { createJourney } from "../actions/journeys";
import AddJourneyForm from "./AddJourneyForm";
import { useDispatch } from "react-redux";

export default function AddJourneyFormContainer() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(createJourney({ name, country, startDate }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setName("");
    setCountry("");
    setStartDate("");
  };

  const handleNameInput = event => {
    setName(event.target.value);
  };
  const handleCountryInput = event => {
    setCountry(event.target.value);
  };
  const handleStartDateInput = event => {
    setStartDate(event.target.value);
  };

  return (
    <AddJourneyForm
      onSubmit={onSubmit}
      handleNameInput={handleNameInput}
      handleCountryInput={handleCountryInput}
      handleStartDateInput={handleStartDateInput}
      name={name}
      country={country}
      startDate={startDate}
    />
  );
}
