import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="appdiv">
            <Route path="/" component={Home} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
