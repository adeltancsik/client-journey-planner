import React, { Component } from "react";
import { loadJourneys } from "../actions/journeys";
import { connect } from "react-redux";
import JourneyList from "./JourneyList";

class Home extends Component {
  componentDidMount() {
    this.props.loadJourneys();
  }
  render() {
    return (
      <div className="home">
        {/* {!this.props.user ? (
      <div>
        <p>
          If you don't have an account yet, please{" "}
          <Link to={`/signup`}>Sign Up</Link>!
        </p>
        <LoginFormContainer />
      </div>
    ) : (
      <AddEventFormContainer />
    )} */}
        <JourneyList journeys={this.props.journeys} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  journeys: state.journeys
  // user: state.user
});

export default connect(mapStateToProps, { loadJourneys })(Home);
