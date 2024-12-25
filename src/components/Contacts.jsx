import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
function Contacts() {
  return (
    <div>
      <div className="container  bg-dark mb-3">
        <div className="row bg-dark  align-items-center">
          <h1 className="text-center mt-3 bg-dark p-3 ">Contacts Me</h1>
          <p className=" bg-dark text-center p-2">
            <span className=" bg-dark text-center p-2 ">
              <MdOutgoingMail className="m-2 bg-dark" />
              Email :
            </span>
            <span className="bg-dark text-primary">
              naveen.g13579@gmail.com
            </span>
          </p>
          <p className=" bg-dark text-center ">
            <span className=" bg-dark text-center p-2 ">
              <FaPhoneSquareAlt className="m-2 bg-dark" />
              Phone :
            </span>
            <span className="bg-dark text-primary">95244 69130</span>
          </p>
          <span className="bg-dark text-center p-2 pb-4">
            <IoLogoGithub className="m-2 bg-dark" size={20} />
            <IoLogoLinkedin className="m-2 bg-dark" size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
