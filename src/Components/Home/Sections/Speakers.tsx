import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Grid from "@/Components/Grid";
import SpeakerCard from "@/Components/SpeakerCard";
import { SPEAKERS } from "@/dataset";
import Speaker from "@/Types/Speaker";

export default class Speakers extends React.Component {
  shuffleArray(arr: Speaker[]) {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  render() {
    return (
      <section id="speakers" className="speakers">
        <Container size={Sizes.large}>
          <Container size={Sizes.small}>
            <h1>Keynotes</h1>
          </Container>
          {
            <Grid>
              {this.shuffleArray(SPEAKERS).map((speaker, i) => (
                <SpeakerCard key={i} speaker={speaker} />
              ))}
            </Grid>
          }
          <Container size={Sizes.small}>
            <h1>Speakers</h1>
            <p>
              The{" "}
              <a
                href="https://forms.gle/Hfdba6uCzeUrbmXM9"
                target="_blank"
                rel="noopener noreferrer"
              >
                CFP
              </a>{" "}
              is open!!! You have until 7th September to apply! Each talk will
              be 10 minutes long and we would love to have many first time
              speakers!!
            </p>
          </Container>
        </Container>
      </section>
    );
  }
}
