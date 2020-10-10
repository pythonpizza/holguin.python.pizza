import * as React from "react";

import Container, { Sizes } from "@/Components/Container";
import Grid from "@/Components/Grid";

export default class Speakers extends React.Component {
  render() {
    return (
      <section id="videos" className="videos">
        <Container size={Sizes.medium}>
          <h1>Videos</h1>
          <Grid>
            <iframe
              height="250"
              src="https://www.youtube.com/embed/hQvxtl_xKks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              height="250"
              src="https://www.youtube.com/embed/moGWD_eTBcs"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Container>
      </section>
    );
  }
}
