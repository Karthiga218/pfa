import React, { Component } from "react";
import AddNewCompany from "../components/layout/AddNewCompany";
import CompanyList from "./CompanyList";

class CentralStations extends Component {
  render() {
    return (
      <div className="container table-responsive">
        <AddNewCompany />
        <CompanyList />
      </div>
    );
  }
}

export default CentralStations;
