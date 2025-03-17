import { useState, useEffect } from "react";
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
            href="https://wa.me/919524469130"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me <FaWhatsapp className="whatsapp" />
          </a>
        ) : (
          <>
            <a
              className="contactmemd text-decoration-none"
              href="https://wa.me/919524469130"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
              <FaWhatsapp className="whatsappmd" />
            </a>
            {/* <button className="contactmemd">Contact Me</button> */}

            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="custom-navbar-toggler "
            />
            <Navbar.Offcanvas
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
                  <Nav.Link href="/Home">
                    <IoHomeOutline className="officon" /> Home
                  </Nav.Link>
                  <Nav.Link href="/About">
                    <MdOutlineMedicalInformation className="officon" /> About
                  </Nav.Link>
                  <Nav.Link href="/Projects">
                    <MdOutlineDeveloperMode className="officon" /> Projects
                  </Nav.Link>
                  <Nav.Link href="/Experience">
                    <LuBicepsFlexed className="officon" /> Experience
                  </Nav.Link>
                  <Nav.Link href="/Certificates">
                    <GrCertificate className="officon" /> Certificates
                  </Nav.Link>
                  <Nav.Link href="/Education">
                    <LuBookOpenText className="officon" /> Education
                  </Nav.Link>
                  <Nav.Link href="/Contacts">
                    <FaPhoneSquareAlt className="officon" /> Contacts
                  </Nav.Link>
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
