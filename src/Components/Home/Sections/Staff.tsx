import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Flex from "@/Components/Flex";
import StaffCard from "@/Components/StaffCard";
import Organizer from "@/Types/Organizer";
import { ORGANIZERS } from "@/dataset";

export default class Staff extends React.Component {
  shuffleArray(arr: Organizer[]) {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  render() {
    return (
      <section id="staff" className="staff">
        <Container size={Sizes.small}>
          <h1>Organizadores</h1>
        </Container>
        <Container size={Sizes.medium}>
          <Flex>
            {this.shuffleArray(ORGANIZERS).map((staff, i) => (
              <StaffCard key={i} staff={staff} />
            ))}
          </Flex>
        </Container>
      </section>
    );
  }
}
