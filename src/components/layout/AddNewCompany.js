import React, { Component } from "react";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";

export class AddNewCompany extends Component {
  constructor(props) {
    super(props);
    this.addNewCompany = this.addNewCompany.bind(this);
  }
  addNewCompany = e => {
    this.props.history.push("/company/new");
  };
  render() {
    return (
      <div className="container actionContainer">
        <Button
          color="primary"
          to="/terminal/new"
          type="button"
          onClick={this.addNewCompany}
        >
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

export default withRouter(AddNewCompany);
