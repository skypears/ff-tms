import Head from "next/head";
import { useState } from "react";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import { BiBell, BiMessageAltDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import Grids from "@/src/comps/DashboardGrids";
export default function Home() {
  const userAvatar =
    "https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg";
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Head>
        <title>TMS - Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-aurora">
        <Navbar dark expand={"md"} className="px-5 main__nav hh120">
          <NavbarBrand href="/">
            <h3 className="mb-0 fw-bold">TMS</h3>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto align-items-center" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav >
                  <div className="d-flex me-4">
                    <div className="user-avatar">
                      <img src={userAvatar} alt="UserPic" className="me-2 rounded-circle border" height={48} />
                    </div>
                    <div className="user-details">
                      <div className="user-name h5 mb-0">TMS User</div>
                      <div className="user-email">tmsuser@tmsgroup.com</div>
                    </div>
                  </div>
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="fs-4 px-2">
                <NavLink href="#">
                  <BiMessageAltDetail />
                </NavLink>
              </NavItem>
              <NavItem className="fs-4 px-2">
                <NavLink href="#">
                  <BiBell />
                </NavLink>
              </NavItem>
              <NavItem className="fs-4 px-2">
                <NavLink href="#">
                  <CiSettings />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Grids />
      </main>
    </>
  );
}
