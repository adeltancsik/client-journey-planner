import React from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { signup } from "../actions/user";

class SignupFormContainer extends React.Component {
  state = { email: "", password: "", username: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.email,
      this.state.password,
      this.state.username
    );
    this.setState({
      email: "",
      password: "",
      username: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignupForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signup })(SignupFormContainer);
