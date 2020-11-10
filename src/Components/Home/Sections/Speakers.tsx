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
            Todas las charlas serán transmitidas el 14 de noviembre de 2020 por{" "}
            <a
              href="https://conferencias.uic.cu/python_pizza_holguin"
              target="_blank"
              rel="noopener noreferrer"
            >
              la plataforma de conferencias de la UIC
            </a>{" "}
            y además por{" "}
            <a
              href="https://www.youtube.com/channel/UCs3DNJSzJJ5pW0tIKQbOPAA"
              target="_blank"
              rel="noopener noreferrer"
            >
              nuestro canal de YouTube
            </a>
            . Unos días más tarde estarán disponibles como videos independientes
            en YouTube y Picta.
          </p>
          <br />
          <p>
            En modo presencial estaremos en{" "}
            <a
              href="https://www.google.com/maps/place/20%C2%B053'02.6%22N+76%C2%B015'33.5%22W/@20.8840623,-76.2598532,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d20.8840605!4d-76.2593058"
              target="_blank"
              rel="noopener noreferrer"
            >
              la Casa de la Prensa
            </a>{" "}
            en Holguín. Si quieres conversar de Python, conocer a algunos de los
            ponentes, y comer pizza, te estaremos esperando.
          </p>
        </Container>
      </section>
    );
  }
}
