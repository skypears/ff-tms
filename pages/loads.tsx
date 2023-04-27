import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./dashboard";
import { Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { useState } from "react";
export default function Loads() {
  const [activeTab, setActiveTab] = useState<string>("1");
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
  return (
    <section className="content loads-section">
      <NavBar navTitle="Loads" />
      <Container fluid className=" py-3 ">
        <Row>
          <Col sm={3}>
            <Nav tabs pills vertical className="border-bottom-0">
              {tabs.map((tab, index) => {
                index++;
                return (
                  <NavItem className="pb-2">
                    <NavLink
                      className={`text-dark bg-light opacity-50 py-3 fw-bold ${
                        activeTab == index.toString() ? "active opacity-100 fs-5" : ""
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
          <Col sm={9} style={{zIndex:1}}>
            <Container fluid className="bg-light rounded" style={{ height: '600px' 
            }}>
              <Row>
                <Col>
                  <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <h1>Active Loads</h1>
              </TabPane>
              <TabPane tabId="2">
                <h1>Planning Loads</h1>
              </TabPane>
              <TabPane tabId="3">
                <h1>Ready for Accounting Loads</h1>
              </TabPane>
              <TabPane tabId="4">
                <h1>Misc. Loads</h1>
              </TabPane>
              <TabPane tabId="5">
                <h1>All Loads</h1>
              </TabPane>
              <TabPane tabId="6">
                <h1>LTL Loads</h1>
              </TabPane>
              <TabPane tabId="7">
                <h1>My Loads</h1>
              </TabPane>
              <TabPane tabId="8">
                <h1>Externally Posted Loads</h1>
              </TabPane>
              <TabPane tabId="9">
                <h1>Draft Loads</h1>
              </TabPane>
            </TabContent>
                </Col>
              </Row>
            </Container>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
}
