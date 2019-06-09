import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

class NewCompany extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);

    this.state = {
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
    //  const { id } = this.props.match.params;
    //  this.props.editCompany(id);
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

  cancelTerminal = e => {
    e.preventDefault();
    console.log("cancel");
  };

  changeState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
            <h4 className="display-6">New Company Details </h4>
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
                      value={cs_short_name}
                      onChange={this.changeState}
                    />
                  </FormGroup>
                </Col>

                <Col md={3} style={{}}>
                  <FormGroup>
                    <Label for="aka">Anniversary Date</Label>
                    <Input
                      type="date"
                      name="cs_anniversary_date"
                      id="cs_anniversary_date"
                      placeholder="Anniversary Date"
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
                <Col md={12}>
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
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

export default NewCompany;
