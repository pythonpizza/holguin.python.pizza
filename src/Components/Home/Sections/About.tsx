import * as React from "react";

import Container, { Sizes } from "@/Components/Container";

export default class About extends React.Component {
  render() {
    return (
      <section id="about">
        <Container size={Sizes.medium}>
          <h1>
            <img src={require("Assets/cuba.png")} alt="Cuban flag" />
            <br />
            Python Pizza
          </h1>

          <p>
            <b>Python Pizza</b> es una micro conferencia organizada por la
            comunidad de Python en <b>Holguín</b>, la primera de su tipo en toda
            Cuba. Nos complace juntar a los pythonistas holguineros (y cubanos
            en general) para comer Pizza™ (o Croqueta™) y hablar un rato de
            Python.
          </p>
          <br />
          <p>
            La marca distintiva de esta micro conferencia está en presentar
            sesiones prácticas, en las cuales los desarrolladores expongan sus
            experiencias con proyectos de la vida real.
            <br />
            Cada charla dura 10 minutos (ni más, ni menos).
          </p>
          <br />
          <p>
            La idea original de estos eventos viene de Python Pizza Nápoles.
            ¡Gracias por la idea!
          </p>
          <br />
          <p>
            Mira las ediciones pasadas en el mundo:
            <br />
            <a
              href="https://python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Nápoles
            </a>
            {", "}
            <a
              href="https://berlin.python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Berlín
            </a>{" "}
            y{" "}
            <a
              href="https://remote.python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Remoto
            </a>
            .{" "}
          </p>
        </Container>
      </section>
    );
  }
}
