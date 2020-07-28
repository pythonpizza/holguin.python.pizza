import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import ScheduleItem from "@/Components/ScheduleItem";
import { SPEAKERS, SCHEDULE } from "@/dataset";

export default class Schedule extends React.Component {
  render() {
    return (
      <section id="schedule" className="schedule">
        <Container size={Sizes.large}>
          <Container size={Sizes.small}>
            <h1>Schedule</h1>
          </Container>
          <ul>
            {SCHEDULE.map(schedule => (
              <ScheduleItem
                key={schedule.order}
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
