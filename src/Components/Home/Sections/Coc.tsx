import * as React from "react";

import "./Coc.css";

import Container, { Sizes } from "@/Components/Container";

export default () => (
  <section id="coc" className="coc">
    <Container size={Sizes.medium}>
      <h1>Código de Conducta (CoC)</h1>
      <p>
        Todos los participantes de Python Pizza Holguín están obligados a
        cumplir el siguiente código de conducta.
      </p>
      <p>
        Python Pizza Holguín es un evento inclusivo, comprometido con proveer
        una experiencia libre de discriminación para todos los participantes,
        sin importar género, identidad y expresión de género, orientación
        sexual, discapacidad o apariencia física, tamaño del cuerpo, raza, edad,
        religión (o ausencia de ella) y preferencias de tecnología.
      </p>
      <p>
        No toleramos ninguna forma de acoso o discriminación por parte de los
        participantes en la conferencia. No toleramos ninguna forma de expresión
        contraria al gobierno o al pueblo cubano. El lenguaje o las analogías de
        corte sexual no son apropiadas en ningún marco del evento, incluyendo
        las charlas.
      </p>
      <p>
        Los participantes del evento que violen estas reglas pueden ser
        sancionados o expulsados de la conferencia, con efecto inmediato, a
        discreción de los organizadores. Si usted es víctima o testigo de algún
        hecho que pueda violar este código de conducta, no dude en comunicarlo a
        los organizadores del evento, los que juzgarán la situación y actuarán
        de manera apropiada y oportuna.
      </p>
    </Container>
  </section>
);
