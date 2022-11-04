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
            <a
              href="https://www.cuba.travel/destinos/holguin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Holguín
            </a>{" "}
            +{" "}
            <a
              href="https://www.cuba.travel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cuba
            </a>
          </h2>
          <h2>17 de diciembre de 2022</h2>
        </div>

        <Wave />
      </div>
    );
  }
}
