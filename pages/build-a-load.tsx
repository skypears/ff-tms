import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./dashboard";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
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
  Table,
} from "reactstrap";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Head from "next/head";
export default function BuildLoad() {
  const [activeTab, setActiveTab] = useState<string>("1");
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
                <NavItem className="mb-2">
                  <NavLink
                    className={`text-dark bg-light opacity-50 py-4 fw-semibold cursor-pointer ${
                      activeTab == "1" ? "active opacity-100 fw-bold" : ""
                    }`}
                    onClick={() => setActiveTab("1")}
                  >
                    Load Basics
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                  <NavLink
                    className={`text-dark bg-light  py-4 fw-semibold cursor-pointer ${
                      activeTab == "2"
                        ? "active opacity-100 fw-bold"
                        : "opacity-50 fw-semibold"
                    }`}
                    onClick={() => setActiveTab("2")}
                  >
                    Customer Info
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                  <NavLink
                    className={`text-dark bg-light  py-4 cursor-pointer ${
                      activeTab == "3"
                        ? "active opacity-100 fw-bold"
                        : "opacity-50 fw-semibold"
                    }`}
                    onClick={() => setActiveTab("3")}
                  >
                    Carrier & Asset Info
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                  <NavLink
                    className={`text-dark bg-light  py-4 cursor-pointer ${
                      activeTab == "4"
                        ? "active opacity-100 fw-bold"
                        : "opacity-50 fw-semibold"
                    }`}
                    onClick={() => setActiveTab("4")}
                  >
                    Edit Stops
                  </NavLink>
                </NavItem>
                <NavItem className="mb-2">
                  <NavLink
                    className={`text-dark bg-light  py-4 cursor-pointer ${
                      activeTab == "5"
                        ? "active opacity-100 fw-bold"
                        : "opacity-50 fw-semibold"
                    }`}
                    onClick={() => setActiveTab("5")}
                  >
                    Financials
                  </NavLink>
                </NavItem>
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
                                  type="text"
                                  placeholder="Load Status"
                                />
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
                                  type="text"
                                  placeholder="Branch"
                                />
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
                                  type="text"
                                  placeholder="New or Used Goods"
                                />
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
                          </Row>
                          <Row className="button-container">
                            <Col></Col>
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
                                  type="text"
                                  placeholder="Customer"
                                  form="stepper-form"
                                />
                                <Label>Customer</Label>
                              </FormGroup>
                            </Col>
                            <FormGroup floating>
                              <Input
                                bsSize={"sm"}
                                type="text"
                                placeholder="Address"
                                form="stepper-form"
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
                                    form="stepper-form"
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
                                    form="stepper-form"
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
                                    form="stepper-form"
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
                                    form="stepper-form"
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
                                form="stepper-form"
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
                                  form="stepper-form"
                                />
                                <Label>Customer Name</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Email"
                                  form="stepper-form"
                                />
                                <Label>Customer Email</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Phone"
                                  form="stepper-form"
                                />
                                <Label>Customer Phone</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Ext."
                                  form="stepper-form"
                                />
                                <Label>Customer Ext.</Label>
                              </FormGroup>
                              <FormGroup floating>
                                <Input
                                  bsSize={"sm"}
                                  type="text"
                                  placeholder="Customer Ref. No."
                                  form="stepper-form"
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
                          <Col></Col>
                          <Col className="d-flex justify-content-end pe-0">
                            <div>
                              <Button className="me-3">Save Draft</Button>
                              <Button onClick={() => setActiveTab("2")}>
                                Next : Customer Info
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
                        <section>EFGH</section>
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
