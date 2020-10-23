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
            El Call for Proposals cerró el domingo 18 de octubre de 2020 a las
            11:59 P.M. Todos los que presentaron alguna propuesta de charla
            serán contactados por el equipo de programa antes del 24 de octubre.
          </p>
          <br />
          <p>
            Las charlas seleccionadas serán <b>pre-grabadas</b> y puestas a
            disposición de todos los participantes. Tendremos más detalles sobre
            esto próximamente.
          </p>
          <br />
          <p>
            Si la situación con la COVID-19 lo permite, planeamos hacer el
            Python Pizza presencial en Holguín el{" "}
            <b>sábado 14 de noviembre de 2020</b>.
          </p>
        </Container>
      </section>
    );
  }
}
