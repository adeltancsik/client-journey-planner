import React, { useState, useEffect } from "react";
import { createJourney, loadCountries } from "../actions/journeys";
import AddJourneyForm from "./AddJourneyForm";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function AddJourneyFormContainer() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState(moment());

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
  };

  const handleNameInput = event => {
    setName(event.target.value);
  };
  const handleCountryInput = event => {
    setCountry(event.target.value);
  };

  return (
    <AddJourneyForm
      onSubmit={onSubmit}
      handleNameInput={handleNameInput}
      handleCountryInput={handleCountryInput}
      name={name}
      country={country}
      startDate={startDate}
      countries={countries}
      setStartDate={setStartDate}
    />
  );
}
