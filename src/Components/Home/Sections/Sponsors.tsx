import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import SponsorsShowcase from "@/Components/SponsorsShowcase";
import { SPONSORS } from "@/dataset";

export default class Sponsors extends React.Component {
  render() {
    return (
      <section id="sponsors">
        <Container size={Sizes.small}>
          <h1>Sponsors</h1>
        </Container>
        <Container size={Sizes.large}>
          <SponsorsShowcase sponsors={SPONSORS} />
        </Container>
      </section>
    );
  }
}
