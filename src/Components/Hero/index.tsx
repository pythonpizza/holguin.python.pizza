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
              Holguín
            </a>
          </h2>
          <h2>Noviembre de 2020</h2>
        </div>

        <Wave />
      </div>
    );
  }
}
