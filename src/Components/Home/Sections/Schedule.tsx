import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import ScheduleItem from "@/Components/ScheduleItem";
import { DAY_START, SPEAKERS, SCHEDULE } from "@/dataset";

export default class Schedule extends React.Component {
  render() {
    const scheduleWithTimes = [...SCHEDULE];
    scheduleWithTimes.forEach((item, i) => {
      item.start = !i
        ? DAY_START
        : (scheduleWithTimes[i - 1].start || 0) +
          scheduleWithTimes[i - 1].duration;
    });

    return (
      <section id="schedule" className="schedule">
        <Container size={Sizes.large}>
          <Container size={Sizes.small}>
            <h1>Programa</h1>
          </Container>
          <ul>
            {scheduleWithTimes.map((schedule, i) => (
              <ScheduleItem
                key={i}
                schedule={schedule}
                speaker={
                  typeof schedule.speaker !== "undefined"
                    ? SPEAKERS[schedule.speaker]
                    : null
                }
              />
            ))}
          </ul>
        </Container>
      </section>
    );
  }
}
