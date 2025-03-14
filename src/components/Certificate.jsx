import React from "react";
import FSD from "../assets/FSD.png";
import ReactJS from "../assets/ReactJS.png";
import NodeJs from "../assets/NodeJs.png";
function Certificate() {
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
      id: 3,
      img: NodeJs,
    },
  ];
  return (
    <div>
      <div id="About" className="container vh-md-100  mb-3">
        <div className="row   align-items-center">
          <h1 className="text-center mt-3  p-3 "> Certificates</h1>
          {Certificates.map((Certificate) => (
            <div
              key={Certificate.id}
              className="col-4 col-md-4 text-center position-relative"
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
    </div>
  );
}

export default Certificate;
