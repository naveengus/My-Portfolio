import TopBar from "../components/common/TopBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificate";
export default [
  {
    path: "/Home",
    element: (
      <>
        <TopBar />
        <Home />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <TopBar />
        <About />
      </>
    ),
  },
  {
    path: "/Projects",
    element: (
      <>
        <TopBar />
        <Projects />
      </>
    ),
  },
  {
    path: "/Experience",
    element: (
      <>
        <TopBar />
        <Experience />
      </>
    ),
  },
  {
    path: "/Education",
    element: (
      <>
        <TopBar />
        <Education />
      </>
    ),
  },
  {
    path: "/Certificates",
    element: (
      <>
        <TopBar />
        <Certificates />
      </>
    ),
  },
  {
    path: "/Contacts",
    element: (
      <>
        <TopBar />
        <Contacts />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <TopBar />
        <Home />
      </>
    ),
  },
];
