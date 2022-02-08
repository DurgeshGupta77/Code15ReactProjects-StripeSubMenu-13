import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Hero from "./Hero";

const App = () => {
  return <React.Fragment>
    <Navbar />
    <Sidebar />
    <Hero />
    <Submenu />
  </React.Fragment>
}

export default App;