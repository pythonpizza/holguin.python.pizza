import * as React from "react";
import classnames from "classnames";
import "./index.css";
import Speaker from "@/Types/Speaker";
import Schedule, { Types } from "@/Types/Schedule";

function makeTime(value: number) {
  const hours: number = Math.trunc(value / 60);
  const minutes: number = value % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}

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
    isError: false,
  };

  isTalkOrKeynote() {
    return (
      this.props.schedule.type === Types.TALK ||
      this.props.schedule.type === Types.KEYNOTE
    );
  }

  isKeynote() {
    return this.props.schedule.type === Types.KEYNOTE;
  }

  componentDidMount() {
    const { speaker } = this.props;

    if (this.isTalkOrKeynote()) {
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

    const isTalkOrKeynote = this.isTalkOrKeynote();
    const isKeynote = this.isKeynote();

    const scheduleItemClasses = classnames("schedule-item", {
      "schedule-item--small": !isTalkOrKeynote,
      "schedule-item--other": schedule.type === Types.OTHER,
      "schedule-item--break": schedule.type === Types.BREAK,
      "schedule-item--lunch": schedule.type === Types.LUNCH,
    });

    const imageClasses = classnames("schedule-item--image", {
      "schedule-item--image--loaded": isLoaded,
      "schedule-item--image--error": isError,
    });

    const SpeakerNameTag = isTalkOrKeynote && speaker!.social ? "a" : "p";

    return (
      <li className={scheduleItemClasses}>
        {isTalkOrKeynote && (
          <div
            className={imageClasses}
            style={{ backgroundImage: `url(${speaker!.photo})` }}
          />
        )}
        <div className="schedule-item--info">
          <h2 className={isKeynote ? "keynote" : ""}>
            <span title={schedule.summary}>{schedule.title}</span>
          </h2>
          {isTalkOrKeynote && (
            <SpeakerNameTag
              target="_blank"
              rel="noopener noreferrer"
              href={speaker!.social}
            >
              {speaker!.name}
            </SpeakerNameTag>
          )}
          <span className="schedule-item--time">
            {makeTime(schedule.start || 0)}
          </span>
        </div>
      </li>
    );
  }
}
