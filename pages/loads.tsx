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
  Input,
  InputGroup,
  InputGroupText,
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
const tabs = [
    "Active Loads",
    "Planning Loads",
    "Ready for Accounting Loads",
    "Misc. Loads",
    "All Loads",
    "LTL Loads",
    "My Loads",
    "Externally Posted Loads",
    "Draft Loads",
  ];
export default function Loads() {
  const [activeTab, setActiveTab] = useState<string>("1");
  return (
    <>
      <Head>
        <title>Loads</title>
      </Head>
      <section className="content loads-section">
        <NavBar navTitle="Loads" />
        <Container fluid className="py-3">
          <Row>
            <Col sm={3}>
              <Nav tabs pills vertical className="border-bottom-0">
                {tabs.map((tab, index) => {
                  index++;
                  return (
                    <NavItem className="mb-2" key={index}>
                      <NavLink
                        className={`text-dark bg-light opacity-50 py-3 fw-semibold ${
                          activeTab == index.toString()
                            ? "active opacity-100 fw-bold"
                            : ""
                        }`}
                        href="javascript:void(0)"
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
                // style={{ minHeight: "600px" }}
              >
                <Row>
                  <Col className="px-4">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <section>
                          <SearchSection tab={activeTab} />
                          <div className="content-section">
                            <Card color="secondary" outline>
                              <CardHeader className="bg-secondary text-light">
                                <CardTitle className="mb-0 fw-bold">
                                  Results
                                </CardTitle>
                              </CardHeader>
                              <CardBody>
                                <Table responsive size="sm" className="small">
                                  <thead className="small">
                                    <tr>
                                      <th>Load ID</th>
                                      <th>Load Status</th>
                                      <th>Last Contact</th>
                                      <th>Customer Picks</th>
                                      <th>Pick Date</th>
                                      <th>Drops</th>
                                      <th>Drop Date</th>
                                      <th>Users & Roles</th>
                                      <th>Carrier</th>
                                      <th>Driver</th>
                                      <th>Equipment</th>
                                      <th>Power Unit</th>
                                      <th>Trailer</th>
                                      <th>Distance</th>
                                    </tr>
                                  </thead>
                                  <tbody></tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </div>
                        </section>
                      </TabPane>
                      <TabPane tabId="2">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="3">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="4">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="5">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="6">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="7">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="8">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
                      </TabPane>
                      <TabPane tabId="9">
                        <section>
                          <SearchSection tab={activeTab} />
                        </section>
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

function SearchSection({ tab }: { tab: string }) {
  return (
    <div className="search-section pt-2 pb-4">
      <Nav>
        <NavItem>
          <NavLink className="px-0">
            <InputGroup>
              <Input
                type="text"
                placeholder={`Search in ${tabs[Number(tab) - 1]}`}
                className="form-control border-secondary"
              />
              <Button>
                <BiSearch />
              </Button>
            </InputGroup>
          </NavLink>
        </NavItem>
        <NavItem className="ms-auto">
          <NavLink className="px-0">
            <Button color="secondary" outline className="fw-bold">
              + Post Load
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}