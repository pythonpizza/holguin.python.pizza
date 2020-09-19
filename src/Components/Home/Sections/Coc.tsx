import * as React from "react";

import "./Coc.css";

import Container, { Sizes } from "@/Components/Container";

export default () => (
  <section id="coc" className="coc">
    <Container size={Sizes.medium}>
      <h1>Código de Conducta (CoC)</h1>
      <p>
        Todos los participantes de Python Pizza Holguín estan obligados a
        cumplir el siguiente código de conducta. Los organizadores serán los
        encargados de hacerlo cumplir durante todo el evento.
      </p>
      <p>
        Python Pizza Holguín está comprometido con proveer una experiencia libre
        de acoso de todo tipo para todos los participantes, sin importar género,
        identidad y expresión de género, orientación sexual, discapacidad o
        apariencia física, tamaño del cuerpo, raza, edad, religión (o ausencia
        de ella) y preferencias de tecnología.
      </p>
      <p>
        No toleramos ninguna forma de acoso por parte de los participantes de la
        conferencia. No toleramos ninguna expresión política contraria al
        gobiero o al pueblo cubano. El lenguaje o las analogías de corte sexual
        no son apropiadas para ningún marco del evento, incluyendo las charlas.
        Los participantes del evento que violen estas reglas pueden ser
        sancionados o expulsados de la conferencia a discreción de los
        organizadores.
      </p>
    </Container>
  </section>
);
