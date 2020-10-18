import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Grid from "@/Components/Grid";
import SpeakerCard from "@/Components/SpeakerCard";
import { KEYNOTE_SPEAKERS, SPEAKERS } from "@/dataset";
import Speaker from "@/Types/Speaker";

export default class Speakers extends React.Component {
  shuffleArray(arr: Speaker[]) {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  render() {
    return (
      <section id="speakers" className="speakers">
        {/* <Container size={Sizes.small}>
          <h1>Ponentes Principales</h1>
        </Container>
        <Container size={Sizes.small}>
          <Grid>
            {this.shuffleArray(KEYNOTE_SPEAKERS).map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} />
            ))}
          </Grid>
        </Container> */}
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
          <br />
          <p>
            Si tienes dudas o preguntas, puedes contactarnos en{" "}
            <a href="mailto:holguin@python.pizza">holguin@python.pizza</a> o
            sumarte a nuestro{" "}
            <a
              href="https://t.me/pythonpizzaholguin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              grupo de Telegram
            </a>
            .
          </p>
        </Container>
      </section>
    );
  }
}
