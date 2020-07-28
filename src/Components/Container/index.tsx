import * as React from "react";
import * as cn from "classnames";

import "./index.css";

export enum Sizes {
  small = "small",
  medium = "medium",
  large = "large"
}

export interface ContainerProps {
  size: Sizes;
  className?: string;
}

export default class Container extends React.Component<ContainerProps, {}> {
  render() {
    const { size, children, className } = this.props;

    return (
      <div className={cn("container", `container--${size}`, className)}>
        {children}
      </div>
    );
  }
}
