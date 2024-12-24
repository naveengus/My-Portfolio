import React from "react";
import TopBar from "./components/common/TopBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from "./utils/AppRoutes";
function App() {
  let router = createBrowserRouter(AppRoutes);
  return <RouterProvider router={router} />;
  // return (
  //   <div>
  //     <TopBar />
  //     <Home />
  //     <About />
  //     <Projects />
  //     <Contacts />
  //   </div>
  // );
}

export default App;
