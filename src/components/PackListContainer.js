import React, { useEffect, useState } from "react";
import PackList from "./PackList";
import { useDispatch, useSelector } from "react-redux";
import { loadPackList, createPack } from "../actions/packlist";
import { editPack } from "../actions/packlist";

export default function PackListContainer() {
  const journey = useSelector(state => state.journey);
  const packlist = useSelector(state => state.packlist);

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [journeyId] = useState(journey.id);

  useEffect(() => {
    dispatch(loadPackList(journey.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    dispatch(createPack({ name, journeyId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setName("");
  };

  const handleNameInput = event => {
    setName(event.target.value);
  };

  const toggleDone = itemId => {
    console.log("clicked, this is item id:", itemId);
    dispatch(editPack(itemId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <PackList
      packlist={packlist}
      onSubmit={onSubmit}
      handleNameInput={handleNameInput}
      name={name}
      toggleDone={toggleDone}
    />
  );
}
