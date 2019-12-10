import React, { useState } from "react";
import SignupForm from "./SignupForm";
import { signup } from "../actions/user";
import { useDispatch } from "react-redux";

export default function SignupFormContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(signup(email, password, username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };
  const handleUsernameInput = event => {
    setUsername(event.target.value);
  };

  return (
    <SignupForm
      onSubmit={onSubmit}
      handleEmailInput={handleEmailInput}
      handlePasswordInput={handlePasswordInput}
      handleUsernameInput={handleUsernameInput}
      email={email}
      password={password}
      username={username}
    />
  );
}
