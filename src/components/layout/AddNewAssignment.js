import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";

export class AddNewAssignment extends Component {
  constructor(props) {
    super(props);
    this.addNewterminal = this.addNewTerminal.bind(this);
  }
  addNewTerminal = e => {
    this.props.history.push("/terminal/new");
  };
  render() {
    return (
      <div className="container actionContainer">
        <Button color="primary" onClick={this.addNewTerminal}>
          <i
            className="fas fa-plus"
            style={{
              marginRight: "5px"
            }}
          />{" "}
          New
        </Button>
      </div>
    );
  }
}

export default withRouter(AddNewAssignment);
