import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { login } from "../actions/user";
import { useDispatch } from "react-redux";

export default function LoginFormContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    dispatch(login(email, password));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setEmail("");
    setPassword("");
  };

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  return (
    <LoginForm
      onSubmit={onSubmit}
      handleEmailInput={handleEmailInput}
      handlePasswordInput={handlePasswordInput}
      email={email}
      password={password}
    />
  );
}
