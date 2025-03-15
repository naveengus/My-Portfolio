import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FSD from "../assets/FSD.png";
import ReactJS from "../assets/ReactJS.png";
import NodeJs from "../assets/NodeJs.png";
import { GrCertificate } from "react-icons/gr";
function Certificate() {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const Certificates = [
    {
      id: 1,
      img: FSD,
    },
    {
      id: 2,
      img: ReactJS,
    },
    {
      id: 3,
      img: NodeJs,
    },
    {
      id: 4,
      img: NodeJs,
    },
  ];

  const handleShow = (img) => {
    setSelectedImage(img);
    setShow(true);
  };
  return (
    <div>
      <div id="About" className="container vh-md-100  mb-3">
        <div className="row   align-items-center">
          <h1 className="text-center mt-3  p-3 ">
            <GrCertificate /> Certificates
          </h1>
          {Certificates.map((Certificate) => (
            <div
              key={Certificate.id}
              className="col-4 col-md-4 text-center position-relative Certificate"
              onClick={() => handleShow(Certificate.img)}
            >
              <img
                className="proimg w-100 h-100 "
                src={Certificate.img}
                alt={`Certificate ${Certificate.id}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center">
          <img src={selectedImage} alt="Full Certificate" className="w-100" />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Certificate;
