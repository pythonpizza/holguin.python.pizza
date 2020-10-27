import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import SponsorsShowcase from "@/Components/SponsorsShowcase";
import { MAIN_SPONSORS, SPONSORS } from "@/dataset";

export default class Sponsors extends React.Component {
  render() {
    return (
      <section id="sponsors">
        <Container size={Sizes.small}>
          <h1>Auspiciado por</h1>
          <SponsorsShowcase sponsors={MAIN_SPONSORS} />
        </Container>
        <Container size={Sizes.medium}>
          <h1>Con la colaboración de</h1>
          <SponsorsShowcase sponsors={SPONSORS} />
        </Container>
        <Container size={Sizes.small}>
          <p>
            Si te interesa colaborar con nosotros, ponte en contacto con el
            equipo en{" "}
            <a href="mailto:holguin@python.pizza">holguin@python.pizza</a>
          </p>
        </Container>
      </section>
    );
  }
}
