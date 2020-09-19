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
            comunidad de software libre en <b>Holguín</b>. Nos complace juntar a
            los pythonistas holguineros (y cubanos en general) para comer Pizza™
            (o Croqueta™) y hablar un rato de Python. La marca distintiva de
            este tipo de micro conferencias está en presentar sesiones
            prácticas, en las cuales los desarrolladores expongan sus
            experiencias con proyectos de la vida real. Cada charla dura{" "}
            <b>10 minutos</b> (ni más, ni menos).
          </p>
          <br />
          <p>
            La edición 2020 del Python Pizza Holguín es la primera de su tipo en
            toda Cuba, aunque la idea original viene de Python Pizza Nápoles.
            ¡Gracias por la idea! Si quieres saber más, mira lo que ha sucedido
            en las ediciones pasadas de Python Pizza en otras partes del mundo:
            <br />
            <br />
            <a
              href="https://python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Nápoles
            </a>{" "}
            &middot;{" "}
            <a
              href="https://berlin.python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Berlín
            </a>{" "}
            &middot;{" "}
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
