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
          <h2 style={{ marginBottom: "0px" }}>
            <a
              href={speaker.social}
              title={speaker.name}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.3em" }}
            >
              {speaker.name}
            </a>
          </h2>
          <small>
            {speaker.job?.map((job) => (
              <React.Fragment key={job}>
                {job}
                <br />
              </React.Fragment>
            ))}
          </small>
        </div>
      </div>
    );
  }
}
