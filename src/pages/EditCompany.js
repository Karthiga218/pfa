import PropTypes from "prop-types";
import React, { Component } from "react";

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
  Table,
  FormFeedback
} from "reactstrap";
import { connect } from "react-redux";

import { editCompany } from "../actions/companyActions";

class EditCompany extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
    this.cToggle = this.cToggle.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      cModal: false,
      modal: false,
      cs_comp_name: "",
      cs_short_name: "",
      cs_anniversary_date: "",
      cs_comments: "",
      cs_contact1: "",
      cs_contact2: "",
      cs_phone1: "",
      cs_phone2: "",
      cs_address1: "",
      cs_city: "",
      cs_zipcode: "",
      cs_state: "",
      cs_email: ""
    };
  }
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.editCompany(id);
  };

  componentWillReceiveProps(nextProps, nextState) {
    const {
      cs_comp_name,
      cs_short_name,
      cs_anniversary_date,
      cs_comments,
      cs_contact1,
      cs_contact2,
      cs_phone1,
      cs_phone2,
      cs_city,
      cs_state,
      cs_address1,
      cs_zipcode,
      cs_email
    } = nextProps.company;

    this.setState({
      cs_comp_name,
      cs_short_name,
      cs_anniversary_date,
      cs_comments,
      cs_contact1,
      cs_contact2,
      cs_phone1,
      cs_phone2,
      cs_city,
      cs_state,
      cs_address1,
      cs_zipcode,
      cs_email
    });
  }
  goBack = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
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
  submitForm = e => {
    console.log("hello");
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      cs_comp_name,
      cs_short_name,
      cs_anniversary_date,
      cs_comments,
      cs_contact1,
      cs_contact2,
      cs_phone1,
      cs_phone2,
      cs_city,
      cs_state,
      cs_address1,
      cs_zipcode,
      cs_email
    } = this.state;

    return (
      <Container style={{ padding: "15px 0px" }}>
        <div className="card">
          <div className="card-header">
            <h4 className="display-6">Company Details - {cs_short_name} </h4>
          </div>
          <div className="card-body">
            <Form onSubmit={this.submitForm}>
              <Row>
                <Col md={5} style={{}}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      name="cs_comp_name"
                      id="cs_comp_name"
                      placeholder="Name"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_comp_name}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={1} style={{}}>
                  <FormGroup>
                    <Label for="aka">AKA</Label>
                    <Input
                      type="text"
                      name="cs_short_name"
                      id="cs_short_name"
                      placeholder="AKA"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      error="this is error"
                      value={cs_short_name}
                      onChange={this.changeState}
                      invalid={false}
                    />
                    <FormFeedback>This is ok</FormFeedback>
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="aka">Inspection Date</Label>
                    <Input
                      type="date"
                      name="cs_anniversary_date"
                      id="cs_anniversary_date"
                      placeholder="Inspection Date"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_anniversary_date}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{ padding: "0px" }}>
                  <FormGroup>
                    <Label for="aka">Email Address</Label>
                    <Input
                      type="text"
                      name="cs_email"
                      id="cs_email"
                      placeholder="Email Address"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_email}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6} style={{}}>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="cs_address1"
                      id="cs_address1"
                      placeholder="Address"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_address1}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                      type="text"
                      name="cs_city"
                      id="cs_city"
                      placeholder="City"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_city}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={1} style={{}}>
                  <FormGroup>
                    <Label for="state">State</Label>
                    <Input
                      style={{
                        borderRadius: "0px"
                      }}
                      type="select"
                      name="cs_state"
                      id="cs_state"
                      value={cs_state}
                      onChange={this.changeState}
                    >
                      <option>NY</option>
                      <option>NJ</option>
                      <option>FL</option>
                      <option>TX</option>
                    </Input>
                  </FormGroup>
                </Col>

                <Col md={2} style={{}}>
                  <FormGroup>
                    <Label for="city">Zipcode</Label>
                    <Input
                      type="text"
                      name="cs_zipcode"
                      id="cs_zipcode"
                      placeholder="Zipcode"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_zipcode}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="city">Contact 1</Label>
                    <Input
                      type="text"
                      name="cs_contact1"
                      id="cs_contact1"
                      placeholder="Contact"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_contact1}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="city">Phone Number</Label>
                    <Input
                      type="text"
                      name="cs_phone1"
                      id="cs_phone1"
                      placeholder="Phone Number"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_phone1}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="city">Contact 2</Label>
                    <Input
                      type="text"
                      name="cs_contact2"
                      id="cs_contact2"
                      placeholder="Contact"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_contact2}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="phonenumber">Phone Number</Label>
                    <Input
                      type="text"
                      name="cs_phone2"
                      id="cs_phone2"
                      placeholder="Phone Number"
                      style={
                        {
                          //borderRadius: "0px"
                        }
                      }
                      value={cs_phone2}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={2}>
                  <Button
                    style={{ marginTop: "25px" }}
                    color="link"
                    onClick={this.cToggle}
                  >
                    Comments <Badge color="secondary">3</Badge>
                  </Button>
                </Col>

                <Col md={10}>
                  <FormGroup>
                    <Label for="comment">Comment</Label>
                    <Input
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Comment"
                      value={cs_comments}
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
                    Cancel Company
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
          <ModalHeader toggle={this.toggle}>Company Cancellation</ModalHeader>
          <ModalBody>
            <Label for="reason">
              Please provide a reason for the company cancellation.
            </Label>
            <Input type="textarea" placeholder="Enter reason" rows={5} />
          </ModalBody>
          <ModalFooter>
            <Button outline color="secondary" onClick={this.toggle}>
              Close
            </Button>{" "}
            <Button color="primary" onClick={this.toggle}>
              Cancel Company
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

EditCompany.propTypes = {
  company: PropTypes.object.isRequired,
  editCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  company: state.companies.company
});

export default connect(
  mapStateToProps,
  { editCompany }
)(EditCompany);
