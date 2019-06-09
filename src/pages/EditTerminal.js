import React, { Component } from "react";
import TerminalCard from "../components/layout/TerminalCard";
import { connect } from "react-redux";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

import { editTerminal } from "../actions/terminalActions";
import PropTypes from "prop-types";

class EditTerminal extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.cToggle = this.cToggle.bind(this);
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
      comment: ""
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.editTerminal(id);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  cToggle() {
    this.setState(prevState => ({
      cModal: !prevState.cModal
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
      comment
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
      comment
    });
  }
  render() {
    const {
      fc_pfa_id,
      borough,
      box_nbr,
      subscriber_nm,
      bin,
      street_address,
      comp_name,
      terminal1,
      terminal2,
      terminal3,
      terminals_list,
      comment
    } = this.state;

    return (
      <Container style={{ padding: "15px 0px" }}>
        <div className="card">
          <div className="card-header">
            <h4 className="display-6">Terminal Assignment Details</h4>
          </div>
          <div className="card-body">
            <Table bordered>
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Box</th>
                  <th>Bin</th>
                  <th>Company</th>
                  <th>Premise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{street_address}</td>
                  <td>{box_nbr}</td>
                  <td>{bin}</td>
                  <td>{comp_name}</td>
                  <td>
                    {subscriber_nm}
                    <i
                      title="Edit"
                      style={{ float: "right", cursor: "pointer" }}
                      className="fas fa-pencil-alt"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Form>
              <div id="editSection" style={{ display: "none" }}>
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
                          width: "100px",
                          paddingRight: "0px"
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

                  <Col md={2}>
                    <FormGroup>
                      <Label for="boxno">Box Number</Label>
                      <Input
                        type="text"
                        name="boxno"
                        id="boxno"
                        placeholder="Box Number"
                      />
                    </FormGroup>
                  </Col>

                  <Col md={2}>
                    <FormGroup>
                      <Label for="houseNo">BIN</Label>
                      <Input
                        type="text"
                        name="bin"
                        id="bin"
                        placeholder="BIN"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={5}>
                    <FormGroup>
                      <Label for="company">Company</Label>
                      <Input
                        style={{
                          borderRadius: "0px"
                        }}
                        type="select"
                        name="type"
                        id="company"
                      >
                        <option>Select Company</option>

                        <option>Statewide Fire Corporation</option>
                        <option>ADT Security Services</option>
                        <option>NY Security ADT</option>
                        <option>AFA Protective Systems Inc.</option>
                        <option>Distinct Central Solution</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col md={2}>
                    <FormGroup>
                      <Label for="aka">AKA</Label>
                      <Input
                        style={{
                          borderRadius: "0px"
                        }}
                        type="select"
                        name="type"
                        id="aka"
                      >
                        <option>Select AKA</option>

                        <option>SFC</option>
                        <option>ADT</option>
                        <option>NYADT</option>
                        <option>AFA</option>
                        <option>DCS</option>
                      </Input>
                    </FormGroup>
                  </Col>

                  <Col md={5}>
                    <FormGroup>
                      <Label for="boxno">Premise</Label>
                      <Input
                        type="text"
                        name="premise"
                        id="premise"
                        placeholder="Premise"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <TerminalCard
                    id="0"
                    onSubmit={this.onFormSubmit}
                    isNew="false"
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
                    isNew="false"
                    onChange={this.changeTC}
                    onSubmit={this.onFormSubmit}
                    t={this.state.terminal2.t}
                    term_type_cd={this.state.terminal2.term_type_cd}
                    building_flag={terminal2.building_flag}
                    terminal_loc={terminal2.terminal_loc}
                    terminal_descr={terminal2.terminal_descr}
                  />
                </Col>
                <Col>
                  <TerminalCard
                    id="2"
                    isNew="false"
                    onChange={this.changeTC}
                    onSubmit={this.onFormSubmit}
                    t={terminal3.t}
                    term_type_cd={terminal3.term_type_cd}
                    building_flag={terminal3.building_flag}
                    terminal_loc={terminal3.terminal_loc}
                    terminal_descr={terminal3.terminal_descr}
                  />
                </Col>
              </Row>

              <Row style={{ marginTop: "15px" }}>
                <Col
                  style={{
                    minWidth: "220px",
                    marginTop: "25px",
                    paddingRight: "0px"
                  }}
                  sm={2}
                >
                  <Button color="link" onClick={this.cToggle}>
                    Comments <Badge color="secondary">3</Badge>
                  </Button>
                </Col>

                <Col md={9}>
                  <FormGroup>
                    <Label for="comment">Comment</Label>
                    <Input
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Comment"
                      value={comment}
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

                  <Button
                    style={{
                      float: "right",
                      paddingRight: "25px",
                      textDecoration: "underline"
                    }}
                    color="link"
                    onClick={this.toggle}
                  >
                    {" "}
                    Cancel Terminals
                  </Button>
                </Col>
              </Row>
            </Form>
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

        <Modal
          isOpen={this.state.cModal}
          toggle={this.cToggle}
          className={this.props.cClassName}
          unmountOnClose={this.state.unmountOnClose}
        >
          <ModalHeader toggle={this.cToggle}>Comments</ModalHeader>
          <ModalBody>
            <div className="commentsHeader">
              <div className="author">By John Snow</div>
              <div className="cTime">May 9,2019 at 10.38 AM</div>
            </div>
            <p className="lead">
              Approval as Central staton, approved. Expires on March 31 2013.
              COF on SITE. Approval as Central staton, approved. Expires on
              March 31 2013. COF on SITE. Approval as Central staton, approved.
              Expires on March 31 2013. COF on SITE.{" "}
            </p>

            <div className="commentsHeader">
              <div className="author">By Luke Doe</div>
              <div className="cTime">Mar 9,2019 at 12.38 AM</div>
            </div>
            <p className="lead">
              Approval as Central staton, approved. Expires on March 31 2013.
              COF on SITE. Approval as Central staton, approved. Expires on
              March 31 2013. COF on SITE.
            </p>

            <div className="commentsHeader">
              <div className="author">By Jane Snow</div>
              <div className="cTime">June 19,2018 at 09.38 AM</div>
            </div>
            <p className="lead">
              Approval as Central staton, approved. Expires on March 31 2013.
              COF on SITE. Approval as Central staton, approved. Expires on
              March 31 2013. COF on SITE.
            </p>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

EditTerminal.propTypes = {
  terminal: PropTypes.object.isRequired,
  editTerminal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  terminal: state.terminals.terminal
});

export default connect(
  mapStateToProps,
  { editTerminal }
)(EditTerminal);
