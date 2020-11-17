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
        <Container size={Sizes.small}>
          <h1>Programa</h1>
        </Container>
        <Container size={Sizes.large}>
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
        <br />
        <br />
        <Container size={Sizes.small}>
          <p>
            Puedes encontrar todas las charlas del evento en{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLZwPvfQ1ZURd5yIDlY2xFJEeWknS9mHhK"
              target="_blank"
              rel="noopener noreferrer"
            >
              esta lista de reproducción
            </a>
            .
          </p>
        </Container>
      </section>
    );
  }
}
