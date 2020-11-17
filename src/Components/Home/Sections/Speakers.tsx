import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Flex from "@/Components/Flex";
import SpeakerCard from "@/Components/SpeakerCard";
import { KEYNOTE_SPEAKERS } from "@/dataset";

export default class Speakers extends React.Component {
  render() {
    return (
      <section id="speakers" className="speakers">
        <Container size={Sizes.small}>
          <h1>Ponentes Principales</h1>
        </Container>
        <Container size={Sizes.medium}>
          <Flex>
            {KEYNOTE_SPEAKERS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </Flex>
        </Container>
      </section>
    );
  }
}
