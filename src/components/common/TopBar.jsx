import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import mypic1 from "../../assets/mypic1.png";
import profile from "../../assets/profile2.png";
import { IoHomeOutline } from "react-icons/io5";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

import {
  MdOutlineMedicalInformation,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import { LuBicepsFlexed, LuBookOpenText } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { FaPhoneSquareAlt } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function OffcanvasExample() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar expand="md" className="custum-navbar mb-3 sticky-top">
      <Container fluid>
        <Navbar.Brand href="#" className="uniquifier">
          Port-Folio
        </Navbar.Brand>
        <Navbar className="d-none d-md-block ">
          <Container>
            <Nav className="nav-item ">
              <AnchorLink className="anchor-link" href="#Home">
                Home
              </AnchorLink>
              <AnchorLink className="anchor-link" offset={50} href="#About">
                About
              </AnchorLink>
              <AnchorLink className="anchor-link" offset={50} href="#Projects">
                Projects
              </AnchorLink>
              <AnchorLink className="anchor-link" offset={50} href="#Education">
                Education
              </AnchorLink>
              <AnchorLink className="anchor-link" offset={50} href="#Contacts">
                Contacts
              </AnchorLink>
              {/* <Nav.Link href="/About">About</Nav.Link> */}
              {/* <Nav.Link href="/Projects">Projects</Nav.Link> */}
              {/* <Nav.Link href="/Education">Education</Nav.Link> */}
              {/* <Nav.Link href="/Contacts">Contacts</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
        {!isMobile ? (
          <a
            className="contactme text-decoration-none"
            href="mailto:naveen.g13579@gmail.com"
          >
            Email Me <MdOutgoingMail className="whatsapp" />
          </a>
        ) : (
          <>
            {/* <a
              className="contactmemd text-decoration-none"
              href="https://wa.me/919524469130"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
              <FaWhatsapp className="whatsappmd" />
            </a> */}
            <a
              className="contactmemd text-decoration-none"
              href="mailto:naveen.g13579@gmail.com"
            >
              Email Me <MdOutgoingMail className="whatsappmd" />
            </a>
            {/* <button className="contactmemd">Contact Me</button> */}

            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="custom-navbar-toggler "
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="custom-offcanvas-size"
            >
              <Offcanvas.Header closeButton className="side-nav">
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img
                    className="sideprofile img-fluid ms-md-2"
                    // src={mypic1}
                    src={profile}
                    alt="Naveen's Picture"
                  />
                  Naveen.G
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-2 pe-3 offNav">
                  <AnchorLink
                    offset={50}
                    href="#Home"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <IoHomeOutline className="officon" /> Home
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#About"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <MdOutlineMedicalInformation className="officon" /> About
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#Projects"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <MdOutlineDeveloperMode className="officon" /> Projects
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#Experience"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <LuBicepsFlexed className="officon" /> Experience
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#Certificates"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <GrCertificate className="officon" /> Certificates
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#Education"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <LuBookOpenText className="officon" /> Education
                  </AnchorLink>

                  <AnchorLink
                    offset={50}
                    href="#Contacts"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <FaPhoneSquareAlt className="officon" /> Contacts
                  </AnchorLink>

                  {/* <Link to="/Home" className="off-link" onClick={handleClose}>
                    <IoHomeOutline className="officon" /> Home
                  </Link> */}

                  {/* <Link to="/About" className="off-link" onClick={handleClose}>
                    <MdOutlineMedicalInformation className="officon" /> About
                  </Link> */}
                  {/* <Link
                    to="/Projects"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <MdOutlineDeveloperMode className="officon" /> Projects
                  </Link> */}
                  {/* <Link
                    to="/Experience"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <LuBicepsFlexed className="officon" /> Experience
                  </Link> */}
                  {/* <Link
                    to="/Certificates"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <GrCertificate className="officon" /> Certificates
                  </Link> */}
                  {/* <Link
                    to="/Education"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <LuBookOpenText className="officon" /> Education
                  </Link> */}
                  {/* <Link
                    to="/Contacts"
                    className="off-link"
                    onClick={handleClose}
                  >
                    <FaPhoneSquareAlt className="officon" /> Contacts
                  </Link> */}

                  {/* <Nav.Link href="/Home">
                    <IoHomeOutline className="officon" /> Home
                  </Nav.Link> */}
                  {/* <Nav.Link href="/About">
                    <MdOutlineMedicalInformation className="officon" /> About
                  </Nav.Link> */}

                  {/* <Nav.Link href="/Projects">
                    <MdOutlineDeveloperMode className="officon" /> Projects
                  </Nav.Link> */}
                  {/* <Nav.Link href="/Experience">
                    <LuBicepsFlexed className="officon" /> Experience
                  </Nav.Link> */}
                  {/* <Nav.Link href="/Certificates">
                    <GrCertificate className="officon" /> Certificates
                  </Nav.Link>
                  <Nav.Link href="/Education">
                    <LuBookOpenText className="officon" /> Education
                  </Nav.Link>
                  <Nav.Link href="/Contacts">
                    <FaPhoneSquareAlt className="officon" /> Contacts
                  </Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
