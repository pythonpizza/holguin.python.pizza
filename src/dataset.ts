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
  // {
  //   name: "Lorenzo Carbonell",
  //   photo: require("../assets/speakers/lorenzocarbonell.jpg"),
  //   job: ["Desarrollador"],
  //   social: "https://atareao.es",
  // },
  {
    name: "Roberto A. Becerra García",
    photo: require("../assets/speakers/idertator.jpg"),
    job: ["CTO Top Group Express"],
    social: "https://twitter.com/idertator",
  },
];

export const REGULAR_SPEAKERS: Speaker[] = [
  {
    name: "Favier Alejandro Rojas",
    photo: require("../assets/speakers/alexcuan.jpg"),
    social: "https://twitter.com/Alex_Cuan_",
  },
  {
    name: "Igr Alexánder Fernández",
    photo: require("../assets/speakers/alexfdezsauco.jpg"),
    social: "https://twitter.com/alexfdezsauco",
  },
  {
    name: "Reinier Hernández",
    photo: require("../assets/staff/RagnarokReinier.jpg"),
    social: "https://twitter.com/RagnarokReinier",
  },
  {
    name: "Rasel Agüero Fernández",
    photo: require("../assets/speakers/raselaguero.jpg"),
    social:
      "https://www.linkedin.com/in/rasel-ag%C3%BCero-fern%C3%A1ndez-28a506200",
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
  {
    id: "uho",
    name: "Universidad de Holguín",
    link: "https://www.uho.edu.cu/",
    photo: require("../assets/sponsors/uho.jpg"),
  },
  {
    id: "qvapay",
    name: "QvaPay",
    link: "https://qvapay.com/",
    photo: require("../assets/sponsors/qvapay.png"),
  },
  {
    id: "qvashop",
    name: "QvaShop",
    link: "https://www.qvashop.com",
    photo: require("../assets/sponsors/qvashop.png"),
  },
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
    title: "Herramientas de Python fuera de los IDE",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Roberto A. Becerra García"),
  },
  {
    title: "FastAPI: The New Kid in Town",
    summary:
      "FastAPI es un framework relativamente reciente, pero con una gran acogida por parte de la comunidad dev.",
    type: Types.TALK,
    duration: 11,
    speaker: SPEAKERS.findIndex((x) => x.name == "Favier Alejandro Rojas"),
  },
  {
    title: "¿Cómo evitar copiar películas que nunca reproducirás?",
    summary:
      "Puedes tener una obsesión por copiar y organizar películas en tu limitado almacenamiento personal pero nunca las reproducirás. ¿Cómo evitas copiarlas?",
    type: Types.TALK,
    duration: 17,
    speaker: SPEAKERS.findIndex((x) => x.name == "Igr Alexánder Fernández"),
  },
  {
    title: "Dos cucharaditas de Django",
    summary:
      "Mejora la estructura de tu proyecto en Django utilizando buenas prácticas y configuraciones para diferentes entornos de trabajo.",
    type: Types.TALK,
    duration: 11,
    speaker: SPEAKERS.findIndex((x) => x.name == "Reinier Hernández"),
  },
  {
    title: "No dudes en raspar un muro",
    summary:
      "Si te apasiona el mundo de los datos y quieres iniciarte en el asombroso campo de la “Ciencia de Datos”, pues llegas a tiempo. Voy a hablarte de una de las principales piezas de este complicado puzzle, “El raspado web o web scraping”.",
    type: Types.TALK,
    duration: 9,
    speaker: SPEAKERS.findIndex((x) => x.name == "Rasel Agüero Fernández"),
  },
  // {
  //   title: "Cómo importar tablas en archivos pdf a pandas",
  //   summary:
  //     "En esta charla te compartiré varios ejemplos prácticos de cómo utilizar " +
  //     "las librerías de Tabula y Excalibur para importar datos de tablas en " +
  //     "archivos pdf a pandas.",
  //   type: Types.TALK,
  //   duration: 12,
  //   speaker: SPEAKERS.findIndex((x) => x.name == "Sara Iris Garcia"),
  // },
  // {
  //   title: "Receso ⛱️",
  //   duration: 12,
  //   type: Types.BREAK,
  // },
  // {
  //   title: "Prueba tu código con comentarios",
  //   summary:
  //     "En esta charla hablaremos sobre el cómo poder documentar y " +
  //     "testear tu código Python mediante comentarios.",
  //   type: Types.TALK,
  //   duration: 12,
  //   speaker: SPEAKERS.findIndex((x) => x.name == "Eduardo Ismael García Pérez"),
  // },
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
  // {
  //   name: "Lorenzo Peña",
  //   photo: require("../assets/staff/lorinkoz.jpg"),
  //   social: "https://twitter.com/lorinkoz",
  // },
  {
    name: "Carlos Parra",
    photo: require("../assets/staff/carlosparraz.jpg"),
    social: "https://libreoffice.cubava.cu",
  },
  // {
  //   name: "Leodanis Pozo",
  //   photo: require("../assets/staff/lpozo78.jpg"),
  //   social: "https://twitter.com/lpozo78",
  // },
  // {
  //   name: "Oscar Garcell",
  //   photo: require("../assets/staff/codeshard.jpg"),
  //   social: "https://twitter.com/codeshard",
  // },
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
  // {
  //   name: "Pedro Almirall",
  //   photo: require("../assets/staff/ktowen_dev.jpg"),
  //   social: "https://twitter.com/ktowen_dev",
  // },
];
