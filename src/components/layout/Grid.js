import React, { Component } from "react";
import { Table } from "reactstrap";

function priceFormatter(cell, row) {
  if (row) {
    return "abc";
  }

  return "efg";
}

export default class Grid extends Component {
  render() {
    const columns = [
      {
        field: "terminal1",
        title: "Terminal 1"
      },
      {
        field: "terminal2",
        title: "Terminal 2"
      }
    ];

    return (
      <div className="container">
        <Table
          striped
          bordered
          responsive
          data-toggle="table"
          data-pagination="true"
          data-search="true"
          data-url="json/grid.json"
        >
          <thead>
            <tr>
              <th data-sortable="true" data-field="ref">
                REF
              </th>
              <th data-sortable="true" data-field="box">
                BOX
              </th>
              <th
                data-sortable="true"
                data-formatter="priceFormatter()"
                data-field="terminal1"
              >
                TERMINALS
              </th>

              <th data-sortable="true" data-field="address">
                ADDRESS
              </th>
              <th data-sortable="true" data-field="company">
                COMPANY
              </th>
              <th data-sortable="true" data-field="actions">
                ACTIONS
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    );
  }
}
