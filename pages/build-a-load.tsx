// import "bootstrap/dist/css/bootstrap.min.css";
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
                        className={`text-dark bg-light opacity-50 py-3  ${
                          activeTab == index.toString()
                            ? "active opacity-100 fw-bold"
                            : "fw-semibold"
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
                      <TabPane tabId="1" tag={'form'} name="form-step-1">
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
                            <Col className="d-flex justify-content-end mt-3 ">
                              <Button className="me-3">Save Draft</Button>
                              <Button onClick={() => setActiveTab("2")}>
                                Next : Customer Info
                              </Button>
                            </Col>
                          </Row>
                      </TabPane>
                      <TabPane tabId="2" name="form-step-2" tag={'form'}>
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
                            <Col className="d-flex justify-content-end ">
                              <div>
                                <Button className="me-3">Save Draft</Button>
                                <Button onClick={() => setActiveTab("3")}>
                                  Next : Carrier & Asset Info
                                </Button>
                              </div>
                            </Col>
                          </Row>
                      </TabPane>
                      <TabPane tabId="3" name="form-step-3" tag={'form'}>
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
                            <Col className="d-flex justify-content-end ">
                              <div>
                                <Button className="me-3">Save Draft</Button>
                                <Button onClick={() => setActiveTab("4")}>
                                  Next : Edit Stops
                                </Button>
                              </div>
                            </Col>
                          </Row>
                      </TabPane>
                      <TabPane tabId="4" name="form-step-4" tag={'form'}>
                          <Row className="mb-3">
                            <h5 className="fw-bold mb-3">
                              Initial Carrier/Asset Info
                            </h5>
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
                          <Row className="mb-3">
                            <Col
                              sm={5}
                              className="d-flex justify-content-between mb-3"
                            >
                              <h5 className="fw-bold">Stops</h5>
                              <Button size="sm" outline color="secondary">
                                Add PickUp
                              </Button>
                              <Button size="sm" outline color="secondary">
                                Add Delivery
                              </Button>
                              <Button size="sm" outline color="secondary">
                                Add Other Stops
                              </Button>
                            </Col>
                          </Row>
                          <Card color="secondary" outline className="mb-3">
                            {/* <CardHeader className="bg-secondary text-light">
                            <CardTitle className="mb-0 fw-bold">
                              Results
                            </CardTitle>
                          </CardHeader> */}
                            <CardBody>
                              <Table responsive size="sm" className="small">
                                <thead className="small">
                                  <tr>
                                    <th>#</th>
                                    <th>Stop Order</th>
                                    <th>Action(s)</th>
                                    <th>Scheduled Date/Time</th>
                                    <th>Actual Date/Time</th>
                                    <th>Location Address</th>
                                    <th>Cargo </th>
                                    <th>Reference#</th>
                                    <th>Show On</th>
                                    <th> Reorder</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>item1</td>
                                    <td>item2</td>
                                    <td>item3</td>
                                    <td>item4</td>
                                    <td>item5</td>
                                    <td>item6</td>
                                    <td>item7</td>
                                    <td>item8</td>
                                    <td>item9</td>
                                    <td>item10</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </CardBody>
                          </Card>
                          <Row className="button-container">
                            <Col>
                              <Button onClick={() => setActiveTab("3")}>
                                Prev : Carrier & Asset Info
                              </Button>
                            </Col>
                            <Col className="d-flex justify-content-end ">
                              <div>
                                <Button className="me-3">Save Draft</Button>
                                <Button onClick={() => setActiveTab("5")}>
                                  Next : Financials
                                </Button>
                              </div>
                            </Col>
                          </Row>
                      </TabPane>
                      <TabPane tabId="5" tag={'form'} name="form-step-5">
                          <Row>
                            <Col sm={6}>
                              <h5 className="fw-bold my-3">Incomes</h5>
                              <div className="px-3">
                                <Table className="small ">
                                  <tbody className="small">
                                    <tr>
                                      <th>Total Income</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Income</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Rate</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Quantity</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Max. rate</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Min. rate</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th className="invisible">N/A</th>
                                      <td className="invisible">N/A</td>
                                    </tr>
                                    <tr>
                                      <th>Gross Profit/Loss Amount</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Gross Profit/Loss %</th>
                                      <td>---</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <Button outline color="secondary">
                                Add Income Line Item
                              </Button>
                            </Col>
                            <Col sm={6}>
                              <h5 className="fw-bold my-3">Expenses</h5>
                              <div className="px-3">
                                <Table className="small ">
                                  <tbody className="small">
                                    <tr>
                                      <th>Total Expenses</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Expenses</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Rate</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Average Quantity</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Max. rate</th>
                                      <td>---</td>
                                    </tr>
                                    <tr>
                                      <th>Min. rate</th>
                                      <td>---</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <Button
                                className="d-block fw-bold"
                                size="md"
                                color="link"
                              >
                                View Customer Info.
                              </Button>
                              <Button
                                className="d-block fw-bold"
                                size="md"
                                color="link"
                              >
                                View Invoice
                              </Button>
                              <Button
                                outline
                                className="mt-4"
                                color="secondary"
                              >
                                Add Expense Line Item
                              </Button>
                            </Col>
                          </Row>
                          <Row className="button-container">
                            <Col>
                              <Button onClick={() => setActiveTab("4")}>
                                Prev : Carrier & Asset Info
                              </Button>
                            </Col>
                            <Col className="d-flex justify-content-end ">
                              <div>
                                <Button className="me-3">Save Draft</Button>
                                <Button>Submit Load</Button>
                              </div>
                            </Col>
                          </Row>
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
