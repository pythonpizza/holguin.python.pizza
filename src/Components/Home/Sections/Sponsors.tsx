import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import SponsorsShowcase from "@/Components/SponsorsShowcase";
import { SPONSORS } from "@/dataset";

export default class Sponsors extends React.Component {
  render() {
    return (
      <section id="sponsors">
        <Container size={Sizes.small}>
          <h1>Auspiciado por</h1>
        </Container>
        <Container size={Sizes.small}>
          <SponsorsShowcase sponsors={SPONSORS} />
        </Container>
      </section>
    );
  }
}
