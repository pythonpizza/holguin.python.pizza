import * as React from 'react';
import './index.css';

export default class Grid extends React.Component {
    render() {
        const children = this.props.children;
        return <div className="grid">{children}</div>;
    }
}
