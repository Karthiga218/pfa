import React, { Component } from "react";
import AddNewAssignment from "../components/layout/AddNewAssignment";
import TerminalAssignments from "./TerminalAssignments";
class Terminals extends Component {
  render() {
    return (
      <div className="container table-responsive">
        <AddNewAssignment />
        <TerminalAssignments />
      </div>
    );
  }
}

export default Terminals;
