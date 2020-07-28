import * as React from "react";

import "./Coc.css";

import Container, { Sizes } from "@/Components/Container";

export default () => (
  <section id="coc" className="coc">
    <Container size={Sizes.medium}>
      <h1>Código de Conducta (CoC)</h1>
      <h2>Propósito</h2>
      <p>
        Python Pizza Holguín está dedicado a brindar una experiencia libre de
        acoso para todo el mundo, sin importar género, identidad y expresión de
        género, orientación sexual, disapacidad o apariencia física, tamaño del
        cuerpo, raza, edad, religión o ausencia de ella.
      </p>
      <p>
        No toleramos ninguna forma de acoso por parte de los participantes de la
        conferencia.
      </p>
      <p>
        El lenguaje o las analogías de corte sexual no son apropiadas para
        ningún marco del evento, incluyendo las charlas.
      </p>
      <p>
        Esperamos que todos los participantes de la cominidad se apeguen a este
        Código de Conducta en todos los marcos del evento, ya sea online o en
        persona, incluyendo todas las comunicaciones relacionadas con la
        administración y organización del evento.
      </p>
      <p>
        <b>
          Los participantes del evento que violen estas reglas pueden ser
          sancionados o expulsados de la conferencia a discreción de los
          organizadores, sin derecho a reembolso de cualquier gasto en que hayan
          incurrido.
        </b>
      </p>
      <h2>Comportamiento esperado</h2>
      <ul>
        <li>
          Participar de manera auténtica y activa. Al hacerlo, contribuye al
          desarrollo de la comunidad.
        </li>
        <li>
          Ejercer la consideración y el respeto en su manera de hablar y de
          actuar.
        </li>
        <li>Anteponer la colaboración al conflicto.</li>
        <li>Usar lenguaje respetuoso e inclusivo.</li>
        <li>
          Abstenerse de lenguaje o comportamiento denigrante, discriminatorio o
          abusivo.
        </li>
        <li>Respetar el derecho ajeno.</li>
        <li>
          Alertar a los líderes de la comunidad ante cualquier situación
          peligrosa, o si nota que alguien está en dificultades, o de cualquier
          violación de este Código de Conducta, incluso aunque parezca de poca
          importancia.
        </li>
      </ul>
      <h2>Comportamiento inaceptable</h2>
      <p>Un comportamiento inaceptable incluye, aunque no está limitado a:</p>
      <ul className="unacceptable">
        <li>Lenguaje o acciones abusivas, discriminatorias o denigrantes.</li>
        <li>Analogías sexuales en espacios públicos.</li>
        <li>Acosar, intimidar, seguir o perseguir a alguien.</li>
        <li>Interrupciones sostenidas de las charlas u otros eventos.</li>
        <li>Contacto físico inapropiado.</li>
        <li>Invasión del espacio personal.</li>
        <li>
          Defender o animar a otros a hacer cualquiera de los comportamientos
          anteriores.
        </li>
      </ul>
      <h2>Consecuencias del comportamiento inaceptable</h2>
      <p>
        No será tolerado ningún comportamiento inaceptable por parte de
        cualquier miembro de la comunidad, incluyendo a los invitados,
        patrocinadores o personal con poder de decisión en el evento.
      </p>
      <p>
        A cualquiera que se le solicite terminar con el comportamiento
        inaceptable debe acatar la solicitud inmediatamente. Si un miembro de la
        comunidad participa de un comportamiento inaceptable, los organizadores
        actuarán como lo consideren oportuno, incluyendo la limitación temporal
        de derechos y la expulsión permanente de la comunidad sin advertencia
        previa (y sin reembolso de cualquer gasto en el que haya incurrido).
      </p>
      <br />
      <h2>Si usted es testigo o blanco de un comportamiento inaceptable</h2>
      <p>
        Si usted es testigo o blanco de un comportamiento inaceptable, o tiene
        cualquier otra preocupación, por favor, notifique a un organizador de la
        comunidad tan pronto como sea posible.
      </p>
      <p>
        Durante el evento será publicada la información de cómo hacer un reporte
        de manera oficial.
      </p>

      <p>
        Cuando recibimos una intención de reporte, nuestro equipo se asegurará
        de que quien hace el reporte esté en un lugar seguro y no pueda ser
        escuchado por otros. Puede que tengamos a más de un miembro del equipo
        presente para asegurarnos de que el reporte sea manejado apropiadamente.
      </p>
      <p>
        Una vez seguro, le pediremos que nos diga lo que ocurrió. Puede que
        contar el problema sea incómodo, pero procuraremos manejar la situación
        con el mayor respeto posible. No se le pedirá que confronte a nadie, ni
        le diremos a nadie que usted hizo un reporte.
      </p>
      <p>
        Nuestro equipo estará listo para contactar a las autoridades, proveer
        compañía, o asistirle de alguna otra forma, de manera que usted se
        sienta seguro por el resto del evento.
      </p>
      <p>Valoramos su colaboración.</p>
      <h2>Reportes anónimos</h2>
      <p>
        Aceptamos también reportes anónimos (para lo cual proveeremos de un
        formulario en línea).
      </p>
      <p>
        No podremos responder a un reporte anónimo directamente, pero
        investigaremos y tomaremos las acciones que consideremos necesarias para
        prevenir que un hecho semejante vuelva a ocurrir.
      </p>

      <h2>Desagravios y quejas</h2>
      <p>
        Si usted considera que ha sido falsa o injustamente acusado de violar
        este Código de Conducta, deberá notificar a uno de los organizadores del
        evento con una descripción concisa de su queja.
      </p>
      <p>
        Su queja será procesada de acuerdo con nuestras políticas de
        organización y administración.
      </p>

      <h2>Créditos</h2>
      <p>
        Este código de conducta está inspirado en el código de{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://berlincodeofconduct.org/"
        >
          Berlin
        </a>{" "}
        y{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://2018.jsconf.eu/code-of-conduct/"
        >
          JS Conf
        </a>
        .
      </p>
    </Container>
  </section>
);
