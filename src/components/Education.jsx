import React from "react";
import {
  MdOutlineMedicalInformation,
  MdOutlineDeveloperMode,
} from "react-icons/md";
import { LuBicepsFlexed, LuBookOpenText } from "react-icons/lu";

function Education() {
  return (
    <div className="container vh-md-100   p-3" id="Education">
      <h1 className=" text-center py-3">
        <LuBookOpenText />
        Education
      </h1>
      <div className=" ">
        <h3 className="">Full Stack Development -Guvi</h3>
        <p className="">
          blending technical skills with creative problem-solving.
        </p>
      </div>
      <div className="">
        <h3 className="">B. E., Computer Science</h3>
        <p className="">Mahendra college of Engineering | Salem</p>
        <strong>72.4 ℅ CGPA</strong>
      </div>
      <div className="">
        <h3 className="">High Schooling</h3>
        <p className="">
          blending technical skills with creative problem-solving.
        </p>
      </div>
    </div>
  );
}

export default Education;
// B. E., Computer Science
// Mahendra college of Engineering
// 2019 – 2023 | Salem, Tamil Nadu
// 72.4 ℅ CGPA
// H. S. C
// Govt Boys HR Sec School
// 2019 | Salem
// 54 ℅
// H. S. L. C
// Govt Boys HR Sec School
// 2017 | Salem
// 74 ℅
