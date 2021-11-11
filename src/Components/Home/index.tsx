import * as React from "react";

import "./index.css";

import Hero from "@/Components/Hero";

import About from "./Sections/About";
import Schedule from "./Sections/Schedule";
import Speakers from "./Sections/Speakers";
import Sponsors from "./Sections/Sponsors";
import Coc from "./Sections/Coc";
import Staff from "./Sections/Staff";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <About />
        {/* <Speakers /> */}
        {/* <Schedule /> */}
        <Coc />
        {/* <Sponsors /> */}
        <Staff />
      </div>
    );
  }
}
