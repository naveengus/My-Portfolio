import React from "react";

function About() {
  return (
    <div>
      <div className="container bg-dark vh-md-100 " id="About">
        <div className="col bg-dark  align-items-center">
          <h1 className="text-center mb-1 bg-dark pt-5 ">About Me</h1>
          <div className="bg-dark p-5">
            <p className="bg-dark paraghraph">
              MERN Stack Developer with a BE in Computer Science and hands-on
              experience in building dynamic and responsive web applications.
              Completed comprehensive courses in the MERN stack, enhancing
              skills in MongoDB, Express.js, React.js, and Node.js.
            </p>{" "}
            <p className="bg-dark paraghraph">
              Successfully developed a capstone project using the MERN stack,
              showcasing expertise in designing full-stack applications with
              scalable architectures and seamless user experiences. Eager to
              learn, innovate, and contribute to impactful projects. Let's
              connect to collaborate on cutting-edge web solutions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
