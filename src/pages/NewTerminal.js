import React, { Component } from "react";
import TerminalCard from "../components/layout/TerminalCard";
import { addTerminal } from "../actions/terminalActions";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Badge,
  Table
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class NewTerminal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.changeTC = this.changeTC.bind(this);
    this.changeState = this.changeState.bind(this);

    this.state = {
      modal: false,
      unmountOnClose: false,
      cModal: false,
      fc_pfa_id: "",
      borough: "",
      box_nbr: "",
      subscriber_nm: "",
      bin: "",
      street_address: "",
      comp_name: "",
      terminals_list: [],
      terminal1: {
        t: "",
        term_type_cd: "",
        building_flag: "",
        terminal_loc: "",
        terminal_desc: ""
      },
      terminal2: {
        t: "",
        term_type_cd: "",
        building_flag: "",
        terminal_loc: "",
        terminal_desc: ""
      },
      terminal3: {
        t: "",
        term_type_cd: "",
        building_flag: "",
        terminal_loc: "",
        terminal_desc: ""
      },
      comment: "",
      comp_name: "",
      aka: ""
    };
  }

  componentDidMount = () => {
    this.props.addTerminal();
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  goBack = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  submitForm = e => {
    console.log("hello");
    e.preventDefault();
    console.log(this.state);
    console.log(this.props);
  };
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeTC = (id, name, value) => {
    const terminals_list = this.state.terminals_list;
    if (name.startsWith("loc2")) {
      //this.setState({ building_flag: "O" });
      terminals_list[id].building_flag = "O";
    } else if (name.startsWith("loc")) {
      terminals_list[id].building_flag = "E";
    }
    if (name === "terminal_descr") terminals_list[id].terminal_descr = value;
    if (name === "terminal_loc") terminals_list[id].terminal_loc = value;
    if (name === "building_flag") terminals_list[id].building_flag = value;
    if (name === "term_type_cd") terminals_list[id].term_type_cd = value;
    this.setState({ terminals_list });
  };
  componentWillReceiveProps(nextProps, nextState) {
    console.log("component will receive......");

    const {
      fc_pfa_id,
      borough,
      box_nbr,
      subscriber_nm,
      bin,
      street_address,
      comp_name,
      terminals_list,
      terminal1,
      terminal2,
      terminal3,
      comment,
      aka
    } = nextProps.terminal;

    this.setState({
      terminal1: terminals_list[0],
      terminal2: terminals_list[1],
      terminal3: terminals_list[2]
    });

    this.setState({
      fc_pfa_id,
      borough,
      box_nbr,
      subscriber_nm,
      bin,
      street_address,
      comp_name,
      terminals_list,
      comment,

      aka
    });
  }
  render() {
    return (
      <Container style={{ padding: "15px 0px" }}>
        <div className="card">
          <div className="card-header">
            <h4 className="display-6">New Terminal Assignment</h4>
          </div>
          <div className="card-body">
            <Form>
              <Row>
                <Col md={2} style={{ paddingRight: "0px" }}>
                  <FormGroup>
                    <Label for="borough">Borough</Label>
                    <Input
                      style={{
                        borderRadius: "0px"
                      }}
                      type="select"
                      name="type"
                      id="typeT"
                    >
                      <option>Borough</option>
                      <option>Manhattan</option>
                      <option>Queens</option>
                      <option>Brooklyn</option>
                      <option>Bronx</option>
                      <option>Staten Island</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={1} style={{ padding: "0px" }}>
                  <FormGroup>
                    <Label for="houseNo">House No.</Label>
                    <Input
                      type="text"
                      name="houseNo"
                      id="houseNo"
                      placeholder="House No."
                      style={{
                        borderRadius: "0px",
                        width: "100px"
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} style={{ padding: "0px" }}>
                  <FormGroup>
                    <Label for="street">Street</Label>
                    <Input
                      type="text"
                      name="street"
                      id="street"
                      placeholder="Enter Street"
                      autoComplete="off"
                      style={{
                        borderRadius: "0px"
                      }}
                    />
                  </FormGroup>
                </Col>
                <Col md={1} style={{ paddingLeft: "0px", marginTop: "31px" }}>
                  <FormGroup>
                    <Button
                      style={{
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px"
                      }}
                      color="primary"
                    >
                      Verify
                    </Button>
                  </FormGroup>{" "}
                </Col>

                <Col md={1}>
                  <FormGroup>
                    <Label for="boxno">Zip Code</Label>
                    <Input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Zip Code"
                      style={{ width: "125px" }}
                    />
                  </FormGroup>
                </Col>

                <Col md={2} style={{ paddingLeft: "60px" }}>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th style={{ width: "90px", padding: "5px 6px" }}>
                          Box
                        </th>
                        <th style={{ width: "75px", padding: "5px 6px" }}>
                          Bin
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{ width: "90px", padding: "3px 0px" }}
                            className="boxTd"
                          />
                        </td>
                        <td>
                          <div
                            style={{ width: "75px", padding: "3px 0px" }}
                            className="boxTd"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="company">Monitoring Company</Label>
                    <Input
                      style={{
                        borderRadius: "0px"
                      }}
                      type="select"
                      name="comp_name"
                      id="comp_name"
                      value={this.state.comp_name}
                      onChange={this.changeState}
                    >
                      <option>Select monitoring company</option>

                      <option>Statewide Fire Corporation</option>
                      <option>ADT Security Services</option>
                      <option>NY Security ADT</option>
                      <option>AFA Protective Systems Inc.</option>
                      <option>Distinct Central Solution</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label for="aka">Monitored Name</Label>
                    <Input
                      style={{
                        borderRadius: "0px"
                      }}
                      type="text"
                      name="aka"
                      id="aka"
                      value={this.state.aka}
                      onChange={this.changeState}
                      placeholder="Enter monitored name"
                    />
                  </FormGroup>
                </Col>

                <Col md={4}>
                  <FormGroup>
                    <Label for="boxno">
                      Building Dominant Occupancy Classification
                    </Label>
                    <Input
                      style={{
                        borderRadius: "0px"
                      }}
                      type="select"
                      name="occ_class_name"
                      id="occ_class_name"
                      value={this.state.comp_name}
                      onChange={this.changeState}
                    >
                      <option>Select occupancy classification</option>

                      <option>Factory & Industrial</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <TerminalCard
                    id="0"
                    onSubmit={this.onFormSubmit}
                    isNew="true"
                    t={this.state.terminal1.t}
                    term_type_cd={this.state.terminal1.term_type_cd}
                    building_flag={this.state.terminal1.building_flag}
                    terminal_loc={this.state.terminal1.terminal_loc}
                    terminal_descr={this.state.terminal1.terminal_descr}
                    onChange={this.changeTC}
                  />
                </Col>
                <Col>
                  <TerminalCard
                    id="1"
                    onSubmit={this.onFormSubmit}
                    isNew="true"
                    t={this.state.terminal2.t}
                    term_type_cd={this.state.terminal2.term_type_cd}
                    building_flag={this.state.terminal2.building_flag}
                    terminal_loc={this.state.terminal2.terminal_loc}
                    terminal_descr={this.state.terminal2.terminal_descr}
                    onChange={this.changeTC}
                  />
                </Col>
                <Col>
                  <TerminalCard
                    id="2"
                    onSubmit={this.onFormSubmit}
                    isNew="true"
                    t={this.state.terminal3.t}
                    term_type_cd={this.state.terminal3.term_type_cd}
                    building_flag={this.state.terminal3.building_flag}
                    terminal_loc={this.state.terminal3.terminal_loc}
                    terminal_descr={this.state.terminal3.terminal_descr}
                    onChange={this.changeTC}
                  />
                </Col>
              </Row>
            </Form>

            <Row style={{ marginTop: "15px" }}>
              <Col md={12}>
                <FormGroup>
                  <Label for="comment">Comment</Label>
                  <Input
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    value={this.state.comment}
                    onChange={this.changeState}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button
                  style={{
                    minWidth: "100px",

                    float: "right"
                  }}
                  color="primary"
                  onClick={this.submitForm}
                >
                  <i className="far fa-save" />
                  {"  "}Save
                </Button>

                <Button
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    float: "right",
                    marginRight: "20px"
                  }}
                  color="secondary"
                  outline
                  onClick={this.goBack}
                >
                  Back
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountOnClose={this.state.unmountOnClose}
        >
          <ModalHeader toggle={this.toggle}>Terminal Cancellation</ModalHeader>
          <ModalBody>
            <Label for="reason">
              Please provide a reason for the terminal cancellation.
            </Label>
            <Input type="textarea" placeholder="Enter reason" rows={5} />
          </ModalBody>
          <ModalFooter>
            <Button outline color="secondary" onClick={this.toggle}>
              Close
            </Button>{" "}
            <Button color="primary" onClick={this.toggle}>
              Cancel Terminal
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

NewTerminal.propTypes = {
  terminal: PropTypes.object.isRequired,
  addTerminal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  terminal: state.terminals.terminal
});

export default connect(
  mapStateToProps,
  { addTerminal }
)(NewTerminal);
