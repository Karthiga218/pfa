import React, { Component } from "react";
import {
  Label,
  Card,
  FormGroup,
  CardBody,
  CardHeader,
  Input,
  CustomInput,
  Row,
  Col
} from "reactstrap";

import PropTypes from "prop-types";
import { getTerminalTypes } from "../../actions/terminalActions";
import { connect } from "react-redux";

class TerminalCard extends Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
    this.resetCard = this.resetCard.bind(this);

    this.state = {
      id: "",
      t: "",
      term_type_cd: "",
      building_flag: "",
      terminal_loc: "",
      terminal_descr: "",
      terminal_types: []
    };
  }
  componentDidMount() {
    this.props.getTerminalTypes();
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("prop received.");
    console.log(nextProps);
    const { terminal_type } = nextProps.terminal_types;

    if (nextProps !== undefined) {
      this.setState({
        id: nextProps.id,
        t: nextProps.t,
        term_type_cd: nextProps.term_type_cd,
        building_flag: nextProps.building_flag,
        terminal_loc: nextProps.terminal_loc,
        terminal_descr: nextProps.terminal_descr
      });
    }

    this.setState({
      terminal_type
    });
  }
  resetCard = e => {
    this.setState({
      term_type_cd: "",
      building_flag: "",
      terminal_loc: "",
      terminal_descr: ""
    });
    const { onChange } = this.props;
    onChange(this.props.id, "term_type_cd", "");
    onChange(this.props.id, "building_flag", "");
    onChange(this.props.id, "terminal_loc", "");
    onChange(this.props.id, "terminal_descr", "");
  };

  changeState = e => {
    if (e.target.name.startsWith("loc2")) {
      this.setState({ building_flag: "O" });
    } else if (e.target.name.startsWith("loc")) {
      this.setState({ building_flag: "E" });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    const { onChange } = this.props;
    onChange(this.props.id, e.target.name, e.target.value);
  };

  render() {
    const { isNew, id } = this.props;
    const {
      t,
      term_type_cd,
      building_flag,
      terminal_loc,
      terminal_descr,
      terminal_types
    } = this.state;

    function printCloseButton(isNew) {
      if (isNew === "false") {
        return (
          <button type="button" className="close" aria-label="Close">
            <span title="Close" aria-hidden="true">
              ×
            </span>
          </button>
        );
      } else {
        return "";
      }
    }

    function printHeader(isNew, tId) {
      if (isNew === "true") {
        return "New Terminal";
      } else {
        return "Terminal Number " + tId;
      }
    }
    function printResetButton(isNew, resetCard) {
      if (isNew === "true") {
        return (
          <button
            type="button"
            className="close"
            aria-label="Close"
            title="Reset"
            style={{
              marginTop: "-2px",
              paddingRight: "10px"
            }}
            onClick={resetCard}
          >
            <i
              style={{
                fontSize: "0.6em"
              }}
              title="Reset"
              className="fas fa-redo"
            />
          </button>
        );
      } else {
        return "";
      }
    }
    return (
      <Card>
        <CardHeader tag="h6" className="display-8">
          {printHeader(isNew, t)}
          {printCloseButton(isNew)}
          {printResetButton(isNew, this.resetCard)}
        </CardHeader>
        <CardBody>
          <FormGroup>
            <div>
              <FormGroup>
                <Label for="terminalType">Terminal Type</Label>

                <CustomInput
                  type="select"
                  name="term_type_cd"
                  id="term_type_cd"
                  value={this.term_type_cd}
                  onChange={this.changeState}
                >
                  <option>Select Terminal Type</option>
                  {this.props.terminal_types.map((terminal_type, i) => (
                    <option
                      key={terminal_type.lookup_code}
                      value={terminal_type.display_text}
                      selected={
                        terminal_type.lookup_code === this.state.term_type_cd
                          ? "selected"
                          : ""
                      }
                    >
                      {terminal_type.display_text}
                    </option>
                  ))}
                </CustomInput>
              </FormGroup>

              <CustomInput
                type="radio"
                label="Entire Building"
                id={"loc." + t}
                name={"loc." + t}
                inline
                style={{ fontSize: "1em" }}
                checked={building_flag === "E"}
                onChange={this.changeState}
              />
              <CustomInput
                type="radio"
                label="Other Location"
                name={"loc2." + t}
                id={"loc2." + t}
                inline
                onChange={this.changeState}
                checked={building_flag === "O"}
              />
            </div>
          </FormGroup>

          <FormGroup>
            <Label for="location">Location (Optional)</Label>
            <Input
              type="text"
              name="terminal_loc"
              id="terminal_loc"
              placeholder="Location"
              autoComplete="nope"
              value={terminal_loc}
              onChange={this.changeState}
            />
          </FormGroup>

          <FormGroup>
            <Label for="description">Description (Optional)</Label>
            <Input
              type="textarea"
              name="terminal_descr"
              id="terminal_descr"
              value={this.state.terminal_descr}
              onChange={this.changeState}
            />
          </FormGroup>
        </CardBody>
      </Card>
    );
  }
}

TerminalCard.propTypes = {
  terminal_types: PropTypes.array.isRequired,
  getTerminalTypes: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  terminal_types: state.terminals.terminal_types
});

export default connect(
  mapStateToProps,
  { getTerminalTypes }
)(TerminalCard);
