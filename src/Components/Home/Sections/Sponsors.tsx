import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import SponsorsShowcase from "@/Components/SponsorsShowcase";
import { MAIN_SPONSORS, SPONSORS, PIZZA_SPONSOR } from "@/dataset";

export default class Sponsors extends React.Component {
  render() {
    return (
      <section id="sponsors">
        <Container size={Sizes.medium}>
          <h1>Auspiciado por</h1>
          <SponsorsShowcase sponsors={MAIN_SPONSORS} />
        </Container>
        {/* <Container size={Sizes.medium}>
          <h1>Con la colaboración de</h1>
          <SponsorsShowcase sponsors={SPONSORS} />
        </Container> */}
        {/* <Container size={Sizes.medium}>
          <h1>Y pizzas al estilo de</h1>
          <SponsorsShowcase sponsors={[PIZZA_SPONSOR]} />
        </Container> */}
      </section>
    );
  }
}
