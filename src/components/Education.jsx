import React from "react";
import { LuBookOpenText } from "react-icons/lu";

function Education() {
  return (
    <div className="container vh-md-100 p-3" id="Education">
      <h1 className="text-center py-3">
        <LuBookOpenText /> Education
      </h1>
      <div className="education-details">
        <div className="container">
          <div className="text-box">
            <ul>
              <li>
                <h3>Full Stack Development - Guvi</h3>
                <p>Blending technical skills with creative problem-solving.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="text-box">
            <ul>
              <li>
                <h3>B. E., Computer Science</h3>
                <strong>72.4% CGPA</strong>
                <p>Mahendra College of Engineering | Salem</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="text-box">
            <ul>
              <li>
                <h3>High Schooling</h3>
                <p>Govt Boys HR Sec School | Salem</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
