import React, { useState, useEffect } from "react";
import { createJourney, loadCountries } from "../actions/journeys";
import AddJourneyForm from "./AddJourneyForm";
import { useDispatch, useSelector } from "react-redux";

export default function AddJourneyFormContainer() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");

  const countries = useSelector(state => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      countries={countries}
    />
  );
}
