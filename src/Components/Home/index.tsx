import * as React from "react";

import "./index.css";

import Hero from "@/Components/Hero";

import About from "./Sections/About";
import Schedule from "./Sections/Schedule";
import Speakers from "./Sections/Speakers";
import Videos from "./Sections/Videos";
import Sponsors from "./Sections/Sponsors";
import Coc from "./Sections/Coc";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Hero />
        <About />
        <Speakers />
        {/* <Schedule /> */}
        <Videos />
        <Coc />
        <Sponsors />
      </div>
    );
  }
}
