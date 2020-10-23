import * as React from "react";
import "./index.css";

export default class Flex extends React.Component {
  render() {
    const children = this.props.children;
    return <div className="flex">{children}</div>;
  }
}
