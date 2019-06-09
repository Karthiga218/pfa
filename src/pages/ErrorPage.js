import React, { Component } from "react";

class ErrorPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4">
          <span style={{ color: "red" }}>404</span> Page Not Found
        </h1>{" "}
        <p className="lead">Sorry, that page does not exist.</p>
      </div>
    );
  }
}

export default ErrorPage;
