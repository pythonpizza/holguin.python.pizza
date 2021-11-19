import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Flex from "@/Components/Flex";
import SpeakerCard from "@/Components/SpeakerCard";
import { KEYNOTE_SPEAKERS } from "@/dataset";

import './Speakers.css';

export default class Speakers extends React.Component {
  render() {
    return (
      <section id="speakers" className="speakers">
        {/* <Container size={Sizes.small}>
          <h1>Ponentes Principales</h1>
        </Container>
        <Container size={Sizes.medium}>
          <Flex>
            {KEYNOTE_SPEAKERS.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </Flex>
        </Container> */}
        <Container size={Sizes.small}>
          <h1>Charlas</h1>
          <p>
            !El{" "}
            <a
                href="https://forms.gle/feQmZLe2vb2LQJyN9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call for Proposals
              </a>{" "}
              ya está abierto! Tienes hasta el sábado 18 de diciembre de 2021 a
              las 11:59 P.M. para presentar tu propuesta de charla. Puedes
              presentar más de una propuesta, pero recuerda que cada charla solo
              puede durar 10 minutos. Si nunca has presentado en un evento
              antes, mejor. ¡Esta es tu oportunidad!
          </p>
          <br />
          <p>
              Las charlas seleccionadas serán pre-grabadas y puestas a
              disposición de todos los participantes. Tendremos más detalles
              sobre esto próximamente.
            </p>
            <br />
            <p>
              Si la situación con el COVID-19 lo permite, planeamos hacer el
              Python Pizza presencial en Holguín el sábado 15 de enero de
              2022.
            </p>
          </Container>
      </section>
    );
  }
}
