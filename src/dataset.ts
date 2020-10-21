import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Schedule, { Types } from "@/Types/Schedule";

export const KEYNOTE_SPEAKERS: Speaker[] = [
  {
    name: "Lorena Mesa",
    photo: require("../assets/speakers/loooorenanicole.jpg"),
    job: ["Presidenta de la PSF", " Ingeniera de datos en GitHub"],
    social: "https://lorenamesa.com/",
  },
  {
    name: "Raul Alderete",
    photo: require("../assets/speakers/xc0d3.jpg"),
    job: ["CS Academy"],
    social: "https://github.com/xcod3",
  },
  {
    name: "Alejandro Piad-Morffis",
    photo: require("../assets/speakers/alejandropiad.jpg"),
    job: ["MatCom", "Universidad de La Habana"],
    social: "https://apiad.net/",
  },
];

export const REGULAR_SPEAKERS: Speaker[] = [
  { name: "Andrew Kim", photo: "PENDING" },
  { name: "Andy García Díaz", photo: "PENDING" },
  {
    name: "Antonio Peña Batista",
    photo: require("../assets/speakers/apenab1995.jpg"),
  },
  { name: "Carlos Parra Zaldívar", photo: "PENDING" },
  { name: "Cristián Maureira-Fredes", photo: "PENDING" },
  { name: "Fernando Masanori", photo: "PENDING" },
  { name: "Francisco Perdigon Romero", photo: "PENDING" },
  { name: "Gabriel A. López López", photo: "PENDING" },
  { name: "Gabriel Rodríguez Urquiza", photo: "PENDING" },
  { name: "Hian Cañizares", photo: "PENDING" },
  {
    name: "Javier Alejandro Oramas López ",
    photo: require("../assets/speakers/javi_oramas.jpg"),
  },
  { name: "Leodanis Pozo Ramos", photo: "PENDING" },
  {
    name: "Lorenzo Luis Peña Marrero",
    photo: require("../assets/speakers/lorinkoz.jpg"),
  },
  { name: "Mauricio Baeza", photo: "PENDING" },
  { name: "Miroslav Šedivý", photo: "PENDING" },
  { name: "Pablo Mestre Drake", photo: "PENDING" },
  {
    name: "Pavel Milanes Costa",
    photo: require("../assets/speakers/co7wt.jpg"),
  },
  { name: "Pedro Almirall", photo: "PENDING" },
  {
    name: "Russell Keith-Magee",
    photo: require("../assets/speakers/freakboy3742.jpg"),
  },
  { name: "Suilan Estévez Velarde", photo: "PENDING" },
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
  // {
  //   id: "psf",
  //   name: "Python Software Foundation",
  //   link: "https://www.python.org/psf/",
  //   photo: require("../assets/sponsors/psf-logo-narrow-256x84-alpha.png"),
  // },
];

export const SPONSORS: Sponsor[] = [
  {
    id: "proyecto_delta",
    name: "Proyecto Delta",
    link: "https://www.facebook.com/proyectodelta101",
    photo: require("../assets/sponsors/proyecto-delta.png"),
  },
  {
    id: "llu",
    name: "La Lucecita",
    link: "https://cubamaps.travel/es/compras/tiendas/75022-tienda-la-lucecita",
    photo: require("../assets/sponsors/la-lucecita.png"),
  },
  {
    id: "bchc",
    name: "Bachecubano",
    link: "https://www.bachecubano.com/",
    photo: require("../assets/sponsors/logo-bachecubano.png"),
  },
  {
    id: "cuban_trail_team",
    name: "Cuban Trail Team",
    link: "https://www.cubantrailteam.com/",
    photo: require("../assets/sponsors/cuban-trail-team.jpg"),
  },
];

export const DAY_START = 9 * 60; // 9am

export const SCHEDULE: Schedule[] = [
  {
    title: "Bienvenida al Python Pizza Holguín 2020",
    duration: 6,
    type: Types.OTHER,
  },
  {
    title: "¿Por qué Python?",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Raul Alderete"),
  },
  {
    title: 'Más allá del "Hola Mundo"',
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Cristián Maureira-Fredes"),
  },
  {
    title: "Viaje al mundo profundo del desarrollo web",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Andrew Kim"),
  },
  {
    title: "Django y React: ¿ateje, teipe o cola-loca?",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Antonio Peña Batista"),
  },
  {
    title: "Extendiendo LibreOffice con Python",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Mauricio Baeza"),
  },
  {
    title:
      "Manteniendo paquetes Python en Debian GNU/Linux: Mi experiencia personal",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pablo Mestre Drake"),
  },
  {
    title: "Un día tiene solo 24±1 horas",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Miroslav Šedivý"),
  },
  {
    title: "Receso",
    duration: 12,
    type: Types.BREAK,
  },
  {
    title: "Python y la Inteligencia Artificial",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Alejandro Piad-Morffis"),
  },
  {
    title: "Video-diet, poniendo tu almacenamiento a régimen",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex(
      (x) => x.name == "Javier Alejandro Oramas López "
    ),
  },
  {
    title: "Python Emergency Remote Teaching",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Fernando Masanori"),
  },
  {
    title: "Mail2InfluxDB: mejorando el monitoreo del correo con Python",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pavel Milanes Costa"),
  },
  {
    title: "Democratizando el Machine Learning con AutoGOAL",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Suilan Estévez Velarde"),
  },
  {
    title: "Python y la Meteorología en Cuba",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Gabriel Rodríguez Urquiza"),
  },
  {
    title: "Pizza!",
    duration: 30,
    type: Types.LUNCH,
  },
  {
    title: "The Document Foundation",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Carlos Parra Zaldívar"),
  },
  {
    title:
      "El rol de Python en el desarrollo de la Inteligencia Artificial y la Computación Científica",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Francisco Perdigon Romero"),
  },
  {
    title: "El pony y la barbacoa",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Lorenzo Luis Peña Marrero"),
  },
  {
    title: "Cómo Crear Contenidos Python: Tips y Buenas Prácticas",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Leodanis Pozo Ramos"),
  },
  {
    title: "Django ORM y el misterio de las agregaciones múltiples",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pedro Almirall"),
  },
  {
    title: "Kincapptory",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Gabriel A. López López"),
  },
  {
    title: "Creando Telegram Bots para Ayudar en tareas de Clasificación de ML",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Hian Cañizares"),
  },
  {
    title: "Receso",
    duration: 12,
    type: Types.BREAK,
  },
  {
    title: "Python all the things!",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Russell Keith-Magee"),
  },
  {
    title: "Proyecto Delta: De lo cotidiano y lo insólito, usando Python",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Andy García Díaz"),
  },
  {
    title: "La Python Software Foundation y tú",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Lorena Mesa"),
  },
  {
    title: "Despedida",
    duration: 6,
    type: Types.OTHER,
  },
];
