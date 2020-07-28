import * as React from "react";
import classnames from "classnames";
import "./index.css";
import Speaker from "@/Types/Speaker";
import Schedule, { Types } from "@/Types/Schedule";

export interface ScheduleItemProps {
  schedule: Schedule;
  speaker: Speaker | null;
}

export default class ScheduleItem extends React.Component<
  ScheduleItemProps,
  {}
> {
  state = {
    isLoaded: false,
    isError: false
  };

  isTalk() {
    return this.props.schedule.type === Types.TALK;
  }

  componentDidMount() {
    const { speaker } = this.props;

    if (this.isTalk()) {
      const img = new Image();

      img.onload = () => {
        this.setState({ isLoaded: true });
      };

      img.onerror = () => {
        this.setState({ isError: true });
      };

      setTimeout(() => {
        img.src = speaker!.photo;
      }, 300 + 500 * Math.random());
    }
  }

  render() {
    const { speaker, schedule } = this.props;
    const { isLoaded, isError } = this.state;

    const isTalk = this.isTalk();

    console.log("speaker", speaker, "schedule", schedule, "isTalk", isTalk);

    const scheduleItemClasses = classnames("schedule-item", {
      "schedule-item--small": !isTalk,
      "schedule-item--other": schedule.type === Types.OTHER,
      "schedule-item--break": schedule.type === Types.BREAK,
      "schedule-item--lunch": schedule.type === Types.LUNCH
    });

    const imageClasses = classnames("schedule-item--image", {
      "schedule-item--image--loaded": isLoaded,
      "schedule-item--image--error": isError
    });

    const SpeakerNameTag = isTalk && speaker!.social ? "a" : "p";

    return (
      <li className={scheduleItemClasses}>
        {isTalk && (
          <div
            className={imageClasses}
            style={{ backgroundImage: `url(${speaker!.photo})` }}
          />
        )}
        <div className="schedule-item--info">
          <h2>{schedule.title}</h2>
          {isTalk && (
            <SpeakerNameTag
              target="_blank"
              rel="noopener noreferrer"
              href={speaker!.social}
            >
              {speaker!.name}
            </SpeakerNameTag>
          )}
          <span className="schedule-item--time">{schedule.time}</span>
        </div>
      </li>
    );
  }
}
