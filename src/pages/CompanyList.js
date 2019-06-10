import matchSorter from "match-sorter";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactTable from "react-table";
import { getCompanies } from "../actions/companyActions";
import Pagination1 from "../components/layout/Pagination1";

class CompanyList extends Component {
  constructor(props) {
    super(props);

    this.state = { showList: true, showDetail: false };
  }
  static contextTypes = {
    router: PropTypes.object
  };

  addFilterPlaceholder = () => {
    const filters = document.querySelectorAll("div.rt-th > input");
    console.log("length=" + filters.length);
    filters[0].placeholder = "Filter Code...";
    filters[1].placeholder = "Filter Aka...";
    filters[2].placeholder = "Filter Name...";
    filters[3].placeholder = "Filter Phone...";
    filters[4].placeholder = "Filter Contact...";
    filters[5].placeholder = "Filter Ann.Date...";
  };

  componentDidMount = () => {
    this.props.getCompanies();
    this.addFilterPlaceholder();
  };

  render() {
    const { companies } = this.props;

    const columns = [
      {
        Header: "CODE",

        accessor: "cs_comp_code",
        filterMethod: (filter, rows) =>
          matchSorter(rows, String(filter.value), { keys: ["cs_comp_code"] }),
        filterAll: true,
        width: 100
      },
      {
        Header: "AKA",
        accessor: "cs_short_name",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["cs_short_name"] }),
        filterAll: true,
        width: 125
      },
      {
        Header: "NAME",
        accessor: "cs_comp_name",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["cs_comp_name"] }),
        filterAll: true
      },
      {
        Header: "PHONE",
        accessor: "cs_phone1",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {
            keys: ["cs_phone1"]
          }),
        filterAll: true
      },
      {
        Header: "CONTACT",
        accessor: "cs_contact1",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["cs_contact1"] }),
        filterAll: true
      },
      {
        Header: "INSP.DATE",
        accessor: "cs_anniversary_date",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["cs_anniversary_date"] }),
        filterAll: true,
        width: 160
      }
    ];

    return (
      <div>
        {this.state.showList && (
          <div className="container tablecontainer">
            <h4 className="display-5 tabtitle">Central Station List</h4>
            <ReactTable
              filterable
              data={companies}
              columns={columns}
              defaultPageSize={10}
              PaginationComponent={Pagination1}
              className="-striped -highlight"
              getTrProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    onClick: e => {
                      console.log(rowInfo.index);
                      this.props.history.push(
                        "/company/edit/" + companies[rowInfo.index].cs_comp_code
                      );
                    }
                  };
                } else {
                  return {};
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired,
  getCompanies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companies: state.companies.companies,
  showDetail: state.companies.showDetail,
  showList: state.companies.showList
});

export default withRouter(
  connect(
    mapStateToProps,
    { getCompanies }
  )(CompanyList)
);
