import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Schedule, { Types } from "@/Types/Schedule";

export const SPEAKERS: Speaker[] = [
  {
    name: "Lorena Mesa",
    photo: require("../assets/speakers/loooorenanicole.jpg"),
    job: ["Presidenta de la PSF", " Ingeniera de datos en GitHub"],
    social: "https://lorenamesa.com/",
  },
  {
    name: "Carlos Parra",
    photo: require("../assets/speakers/carlosparraz.jpg"),
    job: ["Presidente de la UIC en Holguín", "Miembro de TDF"],
    social: "https://libreoffice.cubava.cu/",
  },
];

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

export const SCHEDULE: Schedule[] = [
  // {
  //   order: 0,
  //   time: "10:00",
  //   title: "Welcome",
  //   type: Types.OTHER
  // },
  // {
  //   order: 1,
  //   time: "10:45",
  //   title: "TBA",
  //   type: Types.TALK,
  //   speaker: 0
  // },
  // {
  //   order: 2,
  //   time: "12:15",
  //   title: "Break",
  //   type: Types.BREAK
  // },
  // {
  //   order: 3,
  //   time: "14:00",
  //   title: "Pizza!",
  //   type: Types.LUNCH
  // }
];
