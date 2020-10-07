import * as React from "react";
import "./index.css";
import Speaker from "@/Types/Speaker";

export interface SpeakerCardProps {
  speaker: Speaker;
}

export default class SpeakerCard extends React.Component<SpeakerCardProps, {}> {
  render() {
    const { speaker } = this.props;
    return (
      <div className="speaker-card">
        <div
          className="speaker-card--image"
          style={{ backgroundImage: `url(${speaker.photo})` }}
        />
        <div className="speaker-card--info">
          <h2 style={{ fontSize: "1.3em", marginBottom: "0px" }}>
            {speaker.name}
          </h2>
          <small>{speaker.job}</small>
        </div>
      </div>
    );
  }
}
