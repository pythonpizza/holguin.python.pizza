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
        <Container size={Sizes.small}>
          <h1>Charlas</h1>
          <p>
            Todas las charlas serán transmitidas por{" "}
            <a
              href="https://www.youtube.com/channel/UCs3DNJSzJJ5pW0tIKQbOPAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              nuestro canal de YouTube
            </a>{" "}
            el 14 de noviembre de 2020, y unos días más tarde estarán
            disponibles como videos independientes en YouTube y Picta.
          </p>
        </Container>
      </section>
    );
  }
}
