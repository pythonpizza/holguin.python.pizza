import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Organizer from "@/Types/Organizer";
import Schedule, { Types } from "@/Types/Schedule";

export const KEYNOTE_SPEAKERS: Speaker[] = [
  // {
  //   name: "Lorena Mesa",
  //   photo: require("../assets/speakers/loooorenanicole.jpg"),
  //   job: ["Presidenta de la PSF", " Ingeniera de datos en GitHub"],
  //   social: "https://lorenamesa.com",
  // },
  // {
  //   name: "Raúl Alderete",
  //   photo: require("../assets/speakers/xc0d3.jpg"),
  //   job: ["CEO de CS Academy", "Equipo de seguridad - Parrot OS"],
  //   social: "https://github.com/xcod3",
  // },
  // {
  //   name: "Alejandro Piad",
  //   photo: require("../assets/speakers/alejandropiad.jpg"),
  //   job: ["MatCom", "Universidad de La Habana"],
  //   social: "https://apiad.net",
  // },
  {
    name: "Lorenzo Carbonell",
    photo: require("../assets/speakers/lorenzo.webp"),
    job: ["Desarrollador"],
    social: "https://atareao.es",
  },
];

export const REGULAR_SPEAKERS: Speaker[] = [
  {
    name: "Daniel Gonzalez",
    photo: require("../assets/speakers/danielgonzalez.jpg"),
    social: "https://twitter.com/dgrojas1978",
  },
  {
    name: "Leynier Gutiérrez González",
    photo: require("../assets/speakers/leynier.png"),
    social: "https://twitter.com/leynier41",
  },
  {
    name: "Pedro Machado",
    photo: require("../assets/speakers/pedromachado.jpg"),
    social: "https://twitter.com/machado_leiva",
  },
  {
    name: "Eduardo Ismael García Pérez",
    photo: require("../assets/speakers/eduardo.jpg"),
    social: "https://twitter.com/eduardo_gpg",
  },
  {
    name: "Vladimir Reyes La O",
    photo: require("../assets/speakers/vladimir.jpg"),
    social: "https://twitter.com/vreyes7",
  },
  {
    name: "Sara Iris Garcia",
    photo: require("../assets/speakers/sarairis.jpg"),
    social: "https://linkedin.com/in/sarairisgarcia",
  },
  {
    name: "Rasel Agüero Fernández",
    photo: require("../assets/speakers/rasel.jpg"),
    social:
      "https://www.linkedin.com/in/rasel-ag%C3%BCero-fern%C3%A1ndez-28a506200/",
  },
  {
    name: "Lorenzo Peña",
    photo: require("../assets/speakers/lorinkoz.jpg"),
    social: "https://twitter.com/lorinkoz",
  },
  {
    name: "Yisel Clavel Quintero",
    photo: require("../assets/staff/yisel_clavel.jpg"),
    social: "https://twitter.com/yisel_clavel",
  },
];

export const SPEAKERS: Speaker[] = [...KEYNOTE_SPEAKERS, ...REGULAR_SPEAKERS];

export const MAIN_SPONSORS: Sponsor[] = [
  {
    id: "uic",
    name: "Unión de Informáticos de Cuba - Holguín",
    link: "https://www.uic.cu/",
    photo: require("../assets/sponsors/uic.png"),
  },
  {
    id: "gutl",
    name: "Grupo de Usuarios de Tecnologías Libres - Holguín",
    link: "https://gutl.jovenclub.cu/",
    photo: require("../assets/sponsors/gutl_logo.png"),
  },
  {
    id: "psf",
    name: "Python Software Foundation",
    link: "https://www.python.org/psf/",
    photo: require("../assets/sponsors/psf-logo-narrow-256x84-alpha.png"),
  },
];

export const SPONSORS: Sponsor[] = [
  // {
  //   id: "proyecto_delta",
  //   name: "Proyecto Delta",
  //   link: "https://www.facebook.com/proyectodelta101",
  //   photo: require("../assets/sponsors/proyecto-delta.png"),
  // },
  // {
  //   id: "llu",
  //   name: "La Lucecita",
  //   link: "https://cubamaps.travel/es/compras/tiendas/75022-tienda-la-lucecita",
  //   photo: require("../assets/sponsors/la-lucecita.png"),
  // },
  {
    id: "freemance",
    name: "Freemance",
    link: "https://freemance.slyk.io",
    photo: require("../assets/sponsors/freemance.png"),
  },
  {
    id: "echateesto",
    name: "Échate esto",
    link: "https://wa.me/+5358421848",
    photo: require("../assets/sponsors/echate_esto.png"),
  },
  {
    id: "kwelta",
    name: "Kwelta",
    link: "https://kwelta.tech",
    photo: require("../assets/sponsors/kwelta.png"),
  },
  {
    id: "bchc",
    name: "Bachecubano",
    link: "https://www.bachecubano.com/",
    photo: require("../assets/sponsors/logo-bachecubano.png"),
  },
  // {
  //   id: "cuban_trail_team",
  //   name: "Cuban Trail Team",
  //   link: "https://www.cubantrailteam.com/",
  //   photo: require("../assets/sponsors/cuban-trail-team.jpg"),
  // },
  // {
  //   id: "uho",
  //   name: "Universidad de Holguín",
  //   link: "https://www.uho.edu.cu/",
  //   photo: require("../assets/sponsors/uho.jpg"),
  // },
];

export const PIZZA_SPONSOR: Sponsor = {
  id: "holala",
  name: "Holala",
  link: "https://tormenudigital.com/holala/",
  photo: require("../assets/sponsors/holala.png"),
};

export const DAY_START = 9 * 60; // 9am

export const SCHEDULE: Schedule[] = [
  {
    title: "Bienvenida 🐍🍕",
    duration: 6,
    type: Types.OTHER,
  },
  {
    title: "¿Qué me ha dado Python?",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Lorenzo Carbonell"),
  },
  {
    title: "Scrapping the web with Python",
    summary: "Learn how to scrape the web with python and beautifulsoup.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Daniel Gonzalez"),
  },
  {
    title: "Creando bibliotecas asíncronas y síncronas a la vez",
    summary:
      "Una biblioteca que realice operaciones I/O se puede implementar de forma sincrónica" +
      " o asincrónica, pero ambas son necesarias. Si te interesa saber qué vías existen " +
      "para implementarlas a la vez no te pierdas esta charla.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Leynier Gutiérrez González"),
  },
  {
    title: "Web3.py la Alternativa de Python de Web3",
    summary:
      "Python como uno de los lenguajes de propósito general más usado en todo tipo " +
      "de aplicaciones no se queda atrás si de Blockhain se trata. Web3.py aparece como" +
      " la backend API oficial para desarrolladores Web3 de la Ethereum Fundation.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pedro Machado"),
  },
  {
    title: "Cómo importar tablas en archivos pdf a pandas",
    summary:
      "En esta charla te compartiré varios ejemplos prácticos de cómo utilizar " +
      "las librerías de Tabula y Excalibur para importar datos de tablas en " +
      "archivos pdf a pandas.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Sara Iris Garcia"),
  },
  {
    title: "Receso ⛱️",
    duration: 12,
    type: Types.BREAK,
  },
  {
    title: "Prueba tu código con comentarios",
    summary:
      "En esta charla hablaremos sobre el cómo poder documentar y " +
      "testear tu código Python mediante comentarios.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Eduardo Ismael García Pérez"),
  },
  {
    title: "Administradores de redes y Python",
    summary:
    "Python no es solo desarrollo web e inteligencia artificial.  A partir de la " +
    "versatilidad del lenguaje surgen diversas áreas de aplicación. Python desde el " +
    "punto de vista de un aspirante a administrador de red, este es el tema de la " +
    "siguiente presentación.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Vladimir Reyes La O"),
  },
  {
    title: "Back to the Pony",
    summary:
      "Lo que el tú del futuro le diría al tú del presente sobre un " +
      "proyecto de Django que empieza de cero.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Lorenzo Peña"),
  },
  {
    title: "Kivy y Kivymd, dualidad de poder y estilo",
    summary:
      "La charla expone la fortaleza y facilidad de Python en el campo de " +
      "aplicación Interfaz de Usuario para un ambiente multiplataforma. " +
      "Utilizando el framework kivy y la colección de widgets kivymd.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Rasel Agüero Fernández"),
  },
  {
    title: "Detectando ironías con LSTM y Tensorflow",
    summary:
      "",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Yisel Clavel Quintero"),
  },
  {
    title: "Despedida 👋",
    duration: 6,
    type: Types.OTHER,
  },
  {
    title: "Pizza! 🍕🍕",
    duration: 30,
    type: Types.LUNCH,
  },
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Lorenzo Peña",
    photo: require("../assets/staff/lorinkoz.jpg"),
    social: "https://twitter.com/lorinkoz",
  },
  {
    name: "Carlos Parra",
    photo: require("../assets/staff/carlosparraz.jpg"),
    social: "https://libreoffice.cubava.cu",
  },
  {
    name: "Leodanis Pozo",
    photo: require("../assets/staff/lpozo78.jpg"),
    social: "https://twitter.com/lpozo78",
  },
  {
    name: "Oscar Garcell",
    photo: require("../assets/staff/codeshard.jpg"),
    social: "https://twitter.com/codeshard",
  },
  {
    name: "Yisel Clavel",
    photo: require("../assets/staff/yisel_clavel.jpg"),
    social: "https://twitter.com/yisel_clavel",
  },
  {
    name: "Reinier Hernández",
    photo: require("../assets/staff/RagnarokReinier.jpg"),
    social: "https://twitter.com/RagnarokReinier",
  },
  {
    name: "Pedro Almirall",
    photo: require("../assets/staff/ktowen_dev.jpg"),
    social: "https://twitter.com/ktowen_dev",
  },
];
