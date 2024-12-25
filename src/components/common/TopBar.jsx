import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import mypic1 from "../../assets/mypic1.png";
import { IoHomeOutline, IoLogoLinkedin } from "react-icons/io5";
import { LuBicepsFlexed, LuBookOpenText } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { FaPhoneSquareAlt } from "react-icons/fa";

import {
  MdOutlineMedicalInformation,
  MdOutlineDeveloperMode,
} from "react-icons/md";
function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" custum-navbar mb-3 mt-2"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="uniquifier ">
              Port-Folio
            </Navbar.Brand>
            <Navbar className="d-none d-md-block ">
              <Container>
                <Nav className="nav-item ">
                  <Nav.Link href="/Home">Home</Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Projects">Projects</Nav.Link>
                  <Nav.Link href="/Projects">Education</Nav.Link>
                  <Nav.Link href="/Contacts">Contacts</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="custom-navbar-toggler"
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end "
              className="custom-offcanvas-size  "
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    className="sideprofile img-fluid ms-md-2"
                    src={mypic1}
                    // style={{ maxWidth: "150%", height: "auto" }}
                    alt="Naveen's Picture"
                  />
                  Naveen.G
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-2 pe-3 offNav">
                  <Nav.Link href="/Home">
                    <IoHomeOutline className="officon" />
                    Home
                  </Nav.Link>
                  <Nav.Link href="/About">
                    <MdOutlineMedicalInformation className="officon" />
                    About
                  </Nav.Link>
                  <Nav.Link href="/Projects">
                    <MdOutlineDeveloperMode className="officon" />
                    Projects
                  </Nav.Link>
                  <Nav.Link href="/Projects">
                    <LuBicepsFlexed className="officon" />
                    Experience
                  </Nav.Link>
                  <Nav.Link href="/Projects">
                    <GrCertificate className="officon" />
                    Certificates
                  </Nav.Link>
                  <Nav.Link href="/Projects">
                    <LuBookOpenText className="officon" />
                    Education
                  </Nav.Link>
                  <Nav.Link href="/Contacts">
                    <FaPhoneSquareAlt className="officon" />
                    Contacts
                  </Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
