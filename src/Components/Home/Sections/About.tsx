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
            y hablar un rato de Python. La marca distintiva de esta micro
            conferencia está en presentar sesiones cortas y dinámicas, en las
            cuales los desarrolladores expongan sus conocimientos sobre el
            lenguaje o sus experiencias propias con proyectos de la vida real.
            Cada charla dura <b>10 minutos</b> (ni más, ni menos).
          </p>
          <br />
          <p>
            La edición 2020 del Python Pizza Holguín es la primera de su tipo en
            Cuba, aunque la idea original viene de Python Pizza Nápoles. Si
            quieres saber más, mira lo que ha sucedido en las ediciones pasadas
            de Python Pizza en otras partes del mundo:
            <br />
            <br />
            <a
              href="https://remote.python.pizza"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Remoto
            </a>{" "}
            &middot;{" "}
            <a
              href="https://2019.berlin.python.pizza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Berlín
            </a>{" "}
            &middot;{" "}
            <a
              href="https://hamburg.python.pizza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Python Pizza Hamburgo
            </a>
          </p>
          <br />
          <p>
            Para estar al tanto de las últimas noticias de Python Pizza,{" "}
            <a
              href="https://twitter.com/pythonpizzaconf"
              target="_blank"
              rel="noopener noreferrer"
            >
              síguenos en Twitter
            </a>
            .
          </p>
        </Container>
      </section>
    );
  }
}
