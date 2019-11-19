import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getLocationAction } from "../actions/getLocationAction";

class EnterLoaction extends Component {
  state = {
    location: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getLocation(this.state.location);
    this.props.history.push("/weather");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: [e.target.value]
    });
  };

  handleClick = () => {
    this.props.getLocation(this.state.location);
  };

  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="project-name">
            <h1>React Weather App</h1>
          </div>
          <div className="main-page-inner-container">
            <label htmlFor="location">Enter Your Zip Code</label>
            <input type="text" id="location" onChange={this.handleChange} />
            <Link
              to="/weather"
              className="enter-btn"
              onClick={this.handleClick}
            >
              Enter
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    getLocation: location => {
      dispatch(getLocationAction(location));
    }
  };
};

export default connect(null, mapDispathToProps)(withRouter(EnterLoaction));
