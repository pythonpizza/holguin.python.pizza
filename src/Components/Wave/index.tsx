import * as React from "react";

import "./index.css";

export default class Wave extends React.Component {
  render() {
    return (
      <div className="wave">
        <svg x="0px" y="0px" viewBox="0 0 4320 160">
          <path d="M0,160V0c576,0,864,156,1440,156S2304,0,2880,0s864,156,1440,156c1,0,0,4,0,4H0z" />
        </svg>
      </div>
    );
  }
}
