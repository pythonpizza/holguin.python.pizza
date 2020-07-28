import * as React from "react";

import Wave from "@/Components/Wave";

import "./index.css";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero--info">
          <h1>Python Pizza</h1>
          <h2>
            <a target="_blank" rel="noopener noreferrer">
              Hamburg @ SinnerSchrader
            </a>
          </h2>
          <h2>9 November 2019</h2>
        </div>

        <Wave />
      </div>
    );
  }
}
