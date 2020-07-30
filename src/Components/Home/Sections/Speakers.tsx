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
          {/* <Container size={Sizes.small}>
            <h1>Keynotes</h1>
          </Container>
          {
            <Grid>
              {this.shuffleArray(SPEAKERS).map((speaker, i) => (
                <SpeakerCard key={i} speaker={speaker} />
              ))}
            </Grid>
          } */}
          <Container size={Sizes.small}>
            <h1>Charlas</h1>
            <p>
              ¡El{" "}
              <a
                href="https://forms.gle/wbKkpmf9nibnNQZy6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Call for Proposals
              </a>{" "}
              ya está abierto! Tienes hasta el 30 de septiembre de 2020 a las
              11:59 P.M. para presentar tu propuesta de charla. Puedes presentar
              más de una propuesta, pero recuerda que cada charla solo puede
              durar 10 minutos. Si nunca has presentado en un evento antes,
              mejor. ¡Esta es tu oportunidad!
            </p>
            <br />
            <p>
              Queremos llegar a toda la comunidad de Python de Cuba, por esto
              estamos pensando en pre-grabar todas las charlas que sean
              aceptadas, de modo que puedan estar disponibles para todo el que
              quiera verlas y aprender de ellas.
            </p>
            <br />
            <p>
              Si la situación con el COVID-19 lo permite, planeamos hacer el
              Python Pizza presencial en Holguín, donde se presentarán todos los
              ponentes aceptados que puedan hacer el viaje hasta la ciudad de
              los parques.
            </p>
          </Container>
        </Container>
      </section>
    );
  }
}
