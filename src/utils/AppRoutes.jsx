import TopBar from "../components/common/TopBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contacts from "../components/Contacts";

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
