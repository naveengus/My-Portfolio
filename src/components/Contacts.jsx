import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f7872652-7bc0-444e-9ac4-044fd4ecd94b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      alert(res.message);
      console.log("Success", res);
    }
  };

  return (
    <div>
      <div id="Contacts" className="container vh-100 bg-dark mb-3">
        <div className="row bg-dark con-box ">
          <h1 className="text-center mt-2 mb-4 bg-dark p-3 ">Contact Me</h1>
          <div className=" col-12 col-md-6  bg-dark">
            <Form onSubmit={onSubmit} className="con-form">
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Write a Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Good Message"
                  rows={3}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="">
                Send....
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-6 bg-dark ">
            <div className="align-items-center con-right bg-dark">
              <p className=" bg-dark text-center p-2 con-email">
                <span className=" bg-dark text-center p-2 ">
                  <MdOutgoingMail className="m-2 bg-dark" />
                  Email :
                </span>
                <span className="bg-dark text-primary">
                  naveen.g13579@gmail.com
                </span>
              </p>
              <p className=" bg-dark text-center con-email">
                <span className=" bg-dark text-center p-2 ">
                  <FaPhoneSquareAlt className="m-2 bg-dark" />
                  Phone :
                </span>
                <span className="bg-dark text-primary">95244 69130</span>
              </p>
            </div>
            <div className=" text-center p-2 pb-4 bg-dark">
              <IoLogoGithub className="m-2 bg-dark" size={20} />
              <IoLogoLinkedin className="m-2 bg-dark" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
