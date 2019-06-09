import React, { Component } from "react";
import ReactTable from "react-table";

import matchSorter from "match-sorter";
import Pagination1 from "../components/layout/Pagination1";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTerminals } from "../actions/terminalActions";
import { withRouter } from "react-router-dom";

class TerminalAssignments extends Component {
  addFilterPlaceholder = () => {
    const filters = document.querySelectorAll("div.rt-th > input");
    filters[0].placeholder = "Filter Ref...";
    filters[1].placeholder = "Filter Boro...";
    filters[2].placeholder = "Box...";
    filters[3].placeholder = "Filter Terminal...";
    filters[4].placeholder = "Filter Premise...";
    filters[5].placeholder = "Company";
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentDidMount = () => {
    this.props.getTerminals();
    this.addFilterPlaceholder();
  };

  render() {
    const { terminals } = this.props;

    const columns = [
      {
        Header: "REF #",
        accessor: "ref",
        filterMethod: (filter, rows) =>
          matchSorter(rows, String(filter.value), { keys: ["ref"] }),
        filterAll: true,
        maxWidth: 100
      },
      {
        Header: "BORO",
        accessor: "borough",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["borough"] }),
        filterAll: true,
        maxWidth: 100
      },
      {
        Header: "BOX",
        accessor: "box",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["box"] }),
        filterAll: true,
        maxWidth: 100
      },
      {
        Header: "TERMINALS",
        id: "terminal",
        accessor: d => d.terminal1 + " " + d.terminal2 + " " + d.terminal3,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {
            keys: ["terminal"]
          }),
        filterAll: true
      },
      {
        Header: "PREMISE",
        accessor: "address",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["address"] }),
        filterAll: true,
        maxWidth: 300
      },
      {
        Header: "COMP",
        accessor: "company",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["company"] }),
        filterAll: true,
        maxWidth: 100
      }
    ];

    return (
      <div className="container tablecontainer">
        <h4 className="display-5 tabtitle">Terminal Assignment List</h4>
        <ReactTable
          filterable
          data={terminals}
          columns={columns}
          defaultPageSize={10}
          PaginationComponent={Pagination1}
          className="MyReactTableClass -striped -highlight"
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: e => {
                  console.log(rowInfo.index);
                  this.props.history.push(
                    "/terminal/edit/" + terminals[rowInfo.index].ref
                  );
                }
              };
            } else {
              return {};
            }
          }}
        />
      </div>
    );
  }
}

TerminalAssignments.propTypes = {
  terminals: PropTypes.array.isRequired,
  getTerminals: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  terminals: state.terminals.terminals,
  page: 100
});

export default withRouter(
  connect(
    mapStateToProps,
    { getTerminals }
  )(TerminalAssignments)
);
