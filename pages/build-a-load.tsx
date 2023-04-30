// import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./dashboard";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { useState } from "react";
import Head from "next/head";
import { BiSearch } from "react-icons/bi";

export default function BuildLoad() {
  const [activeTab, setActiveTab] = useState<string>("1");
  const [usingCarrier, setUsingCarrier] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Build a Load</title>
      </Head>
      <section className="content loads-section">
        <NavBar navTitle="Build a Load" />
        <Container fluid className=" py-3 ">
          <Row>
            <Col sm={3}>
              <Nav tabs pills vertical className="border-bottom-0">
                {formStepTitles.map((tab, index) => {
                  index++;
                  return (
                    <NavItem className="mb-2" key={index}>
                      <NavLink
                        className={`text-dark bg-light opacity-50 py-3 fw-semibold ${
                          activeTab == index.toString()
                            ? "active opacity-100 fw-bold"
                            : ""
                          }`}
                        
                        onClick={() => setActiveTab(index.toString())}
                      >
                        {tab}
                      </NavLink>
                    </NavItem>
                  );
                })}
                
              </Nav>
            </Col>
            <Col sm={9} className="ps-0" style={{ zIndex: 1 }}>
              <Container
                fluid
                className="bg-light rounded"
                // style={{ height: "600px" }}
              >
                <Row>
                  <Col className="p-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Form name="stepper-form">
                          <Row>
                            <h5 className="fw-bold">Load Information</h5>

                            <Col sm={4}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="select"
                                  placeholder="Load Status"
                                >
                                  <option>Load Status 1</option>
                                  <option>Load Status 2</option>
                                  <option>Load Status 3</option>
                                  <option>Load Status 4</option>
                                </Input>
                                <Label>Load Status</Label>
                              </FormGroup>

                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Loan Ref. id"
                                />
                                <Label>Loan Ref. id</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Commodity"
                                />
                                <Label>Commodity</Label>
                              </FormGroup>
                            </Col>
                            <Col sm={4}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="select"
                                  placeholder="Branch"
                                >
                                  
                                  <option>Branch 1</option>
                                  <option>Branch 2</option>
                                  <option>Branch 3</option>
                                  <option>Branch 4</option>
                                </Input>
                                <Label>Branch</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Weight"
                                />
                                <Label>Weight</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Load Size"
                                />
                                <Label>Load Size</Label>
                              </FormGroup>
                            </Col>
                            <Col sm={4}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Truck Status"
                                />
                                <Label>Truck Status</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Declared Load Value"
                                />
                                <Label>Declared Load Value</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="select"
                                  placeholder="New or Used Goods"
                                >
                                  <option>New or Used Goods 1</option>
                                  <option>New or Used Goods 2</option>
                                  <option>New or Used Goods 3</option>
                                </Input>
                                <Label>New or Used Goods</Label>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={8}>
                              <h5 className="fw-bold">Equipment Information</h5>
                            </Col>
                            <Col xs={4}>
                              <h5 className="fw-bold">Load Notes</h5>
                            </Col>
                            <Col sm={4}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Equipment Type"
                                />
                                <Label>Equipment Type</Label>
                              </FormGroup>

                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Intermodal/Dray Container No."
                                />
                                <Label>Intermodal/Dray Container No.</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Temperature"
                                />
                                <Label>Temperature</Label>
                              </FormGroup>
                            </Col>
                            <Col sm={4} className="align-self-end">
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Equipment Length"
                                />
                                <Label>Equipment Length</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Last Free Day"
                                />
                                <Label>Last Free Day</Label>
                              </FormGroup>
                            </Col>
                            <Col sm={4}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Public Load Note"
                                />
                                <Label>Public Load Note</Label>
                              </FormGroup>

                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Private Load Note"
                                />
                                <Label>Private Load Note</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Load Posting Notes / Comments"
                                />
                                <Label>Load Posting Notes / Comments</Label>
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="button-container">
                            <Col></Col>

                            <Col className="d-flex justify-content-end mt-3 pe-0">
                              <Button className="me-3">Save Draft</Button>
                              <Button onClick={() => setActiveTab("2")}>
                                Next : Customer Info
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>
                          <Col className="d-flex justify-content-between mb-3">
                            <h5 className="fw-bold">Customer Information</h5>
                            <Button>Add New Customer</Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={8}>
                            <Col sm={6}>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="select"
                                  placeholder="Customer"
                                >
                                  <option>Customer 1</option>
                                  <option>Customer 2</option>
                                  <option>Customer 3</option>
                                  </Input>
                                <Label>Customer</Label>
                              </FormGroup>
                            </Col>
                            <FormGroup floating>
                              <Input
                                bsSize={"sm"}
                                type="text"
                                placeholder="Address"
                              />
                              <Label>Address</Label>
                            </FormGroup>
                            <Row>
                              <Col sm={6}>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Docket Number"
                                  />
                                  <Label>Docket Number</Label>
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="USDOT Number"
                                  />
                                  <Label>USDOT Number</Label>
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Credit Limit"
                                  />
                                  <Label>Credit Limit</Label>
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Available Credit"
                                  />
                                  <Label>Available Credit</Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            <FormGroup floating>
                              <Input
                                bsSize={"sm"}
                                type="textarea"
                                rows="3"
                                // style={{height: "100px"}}
                                placeholder="Notes:"
                              />
                              <Label>Notes:</Label>
                            </FormGroup>
                          </Col>
                          <Col sm={4}>
                            <div>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Name"
                                />
                                <Label>Customer Name</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Email"
                                />
                                <Label>Customer Email</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Phone"
                                />
                                <Label>Customer Phone</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Ext."
                                />
                                <Label>Customer Ext.</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Ref. No."
                                />
                                <Label>Customer Ref. No.</Label>
                              </FormGroup>
                            </div>
                          </Col>
                        </Row>
                        <Row className="button-container">
                          <Col>
                            <Button onClick={() => setActiveTab("1")}>
                              Prev : Load Basics
                            </Button>
                          </Col>

                          <Col className="d-flex justify-content-end pe-0">
                            <div>
                              <Button className="me-3">Save Draft</Button>
                              <Button onClick={() => setActiveTab("3")}>
                                Next : Carrier & Asset Info
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <Row>
                          <Col>
                            <h5 className="fw-bold">Carrier & Asset Info</h5>
                            <h6 className="text-primary small">
                              Please select one of the following Options
                            </h6>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col>
                            <FormGroup check>
                              <Label check>
                                <Input
                                  type="radio"
                                  name="carrier"
                                  checked={usingCarrier}
                                  onChange={() => setUsingCarrier(true)}
                                />
                                I am using my own asset/driver as the carrier
                                for this load.
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                        {usingCarrier && (
                          <Row>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Carrier"
                                  />
                                  <Label>Carrier</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Address"
                                  />
                                  <Label>Address</Label>
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Docket No."
                                  />
                                  <Label>Docket No.</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Primary Contact"
                                  />
                                  <Label>Primary Contact</Label>
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="USDOT No."
                                  />
                                  <Label>USDOT No.</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Contact Email"
                                  />
                                  <Label>Contact Email</Label>
                                </FormGroup>
                              </div>
                            </Col>
                            <Row>
                              <h6 className="text-warning">
                                Driver and Equipment Information for this Load
                              </h6>
                            </Row>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Driver"
                                  />
                                  <Label>Driver</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Power Unit"
                                  />
                                  <Label>Power Unit</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Trailer"
                                  />
                                  <Label>Trailer</Label>
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Overall Load Length"
                                  />
                                  <Label>Overall Load Length</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Overall Load Height"
                                  />
                                  <Label>Overall Load Height</Label>
                                </FormGroup>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Overall Load Width"
                                  />
                                  <Label>Overall Load Width</Label>
                                </FormGroup>
                              </div>
                            </Col>
                            <Col sm={4}>
                              <div>
                                <FormGroup floating>
                                  <Input
                                    bsSize={"sm"}
                                    type="text"
                                    placeholder="Total Gross Vehicle Weight"
                                  />
                                  <Label>Total Gross Vehicle Weight</Label>
                                </FormGroup>
                              </div>
                            </Col>
                          </Row>
                        )}

                        <Row>
                          <Col>
                            <FormGroup check className="mb-4">
                              <Label check>
                                <Input
                                  type="radio"
                                  name="carrier"
                                  checked={!usingCarrier}
                                  onChange={() => setUsingCarrier(false)}
                                />
                                I am using an outside carrier for this load.
                              </Label>
                            </FormGroup>
                          </Col>
                        </Row>
                        {!usingCarrier && (
                          <Row>
                            <Col sm={5}>
                              <FormGroup>
                                <InputGroup>
                                  <Input
                                    type="text"
                                    width={"100%"}
                                    placeholder=""
                                    className="form-control border-secondary"
                                  />
                                  <Button color="secondary" outline>
                                    <BiSearch className="me-2" />
                                    Search Carrier List
                                  </Button>
                                </InputGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                        )}

                        <Row className="button-container">
                          <Col>
                            <Button onClick={() => setActiveTab("2")}>
                              Prev : Customer Info
                            </Button>
                          </Col>

                          <Col className="d-flex justify-content-end pe-0">
                            <div>
                              <Button className="me-3">Save Draft</Button>
                              <Button onClick={() => setActiveTab("4")}>
                                Next : Edit Stops
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="4">
                        <section>IJKL</section>
                      </TabPane>
                      <TabPane tabId="5">
                        <section>LMNO</section>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

const formStepTitles = [
  "Load Basics",
  "Customer Info",
  "Carrier & Asset Info",
  "Edit Stops",
  "Financials",
];
