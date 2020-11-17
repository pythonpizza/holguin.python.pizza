import * as React from "react";
import "./index.css";
import Organizer from "@/Types/Organizer";

export interface StaffCardProps {
  staff: Organizer;
}

export default class StaffCard extends React.Component<StaffCardProps, {}> {
  render() {
    const { staff } = this.props;
    return (
      <div className="staff-card">
        <div
          className="staff-card--image"
          style={{ backgroundImage: `url(${staff.photo})` }}
        />
        <div className="staff-card--info">
          <a
            href={staff.social}
            title={staff.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {staff.name}
          </a>
        </div>
      </div>
    );
  }
}
