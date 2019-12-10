import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignupFormContainer from "./components/SignupFormContainer";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="appdiv">
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignupFormContainer} />
        </div>
      </div>
    </Provider>
  );
}
