import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Schedule, { Types } from "@/Types/Schedule";

export const KEYNOTE_SPEAKERS: Speaker[] = [
  {
    name: "Lorena Mesa",
    photo: require("../assets/speakers/loooorenanicole.jpg"),
    job: ["Presidenta de la PSF", " Ingeniera de datos en GitHub"],
    social: "https://lorenamesa.com",
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
    social: "https://apiad.net",
  },
];

export const REGULAR_SPEAKERS: Speaker[] = [
  {
    name: "Carlos Parra Zaldívar",
    photo: require("../assets/speakers/carlosparraz.jpg"),
    job: ["Presidente UIC Holguín", "Miembro de TDF"],
    social: "https://libreoffice.cubava.cu",
  },
  {
    name: "Andrew Kim",
    photo: require("../assets/speakers/dearandrewkim.jpg"),
    social: "https://dearandrewkim.com",
  },
  {
    name: "Andy García Díaz",
    photo: require("../assets/speakers/dancuba96.jpg"),
    social: "https://twitter.com/dancuba96",
  },
  {
    name: "Antonio Peña Batista",
    photo: require("../assets/speakers/apenab1995.jpg"),
    social: "https://twitter.com/apenab1995",
  },
  {
    name: "Cristián Maureira-Fredes",
    photo: require("../assets/speakers/cmaureir.jpg"),
    social: "https://maureira.xyz",
  },
  {
    name: "Fernando Masanori",
    photo: require("../assets/speakers/fmasanori.jpg"),
    social: "https://twitter.com/fmasanori",
  },
  { name: "Francisco Perdigon Romero", photo: "PENDING" },
  {
    name: "Gabriel A. López López",
    photo: require("../assets/speakers/glpzzz.jpg"),
    social: "https://twitter.com/glpzzz",
  },
  {
    name: "Gabriel Rodríguez Urquiza",
    photo: require("../assets/speakers/gabriel_ru98.jpg"),
    social: "https://twitter.com/gabriel_ru98",
  },
  {
    name: "Hian Cañizares",
    photo: require("../assets/speakers/hian_cd.jpg"),
    social: "https://twitter.com/hian_cd",
  },
  {
    name: "Javier Alejandro Oramas López ",
    photo: require("../assets/speakers/javi_oramas.jpg"),
    social: "https://twitter.com/javi_oramas",
  },
  {
    name: "Leodanis Pozo Ramos",
    photo: require("../assets/speakers/lpozo78.jpg"),
    social: "https://twitter.com/lpozo78",
  },
  {
    name: "Lorenzo Peña",
    photo: require("../assets/speakers/lorinkoz.jpg"),
    social: "https://twitter.com/lorinkoz",
  },
  { name: "Mauricio Baeza", photo: "PENDING" },
  {
    name: "Miroslav Šedivý",
    photo: require("../assets/speakers/eumiro.jpg"),
    social: "https://twitter.com/eumiro",
  },
  {
    name: "Pablo Mestre Drake",
    photo: require("../assets/speakers/elmor3no_.jpg"),
    social: "https://twitter.com/elmor3no_",
  },
  {
    name: "Pavel Milanes Costa",
    photo: require("../assets/speakers/co7wt.jpg"),
    social: "https://twitter.com/co7wt",
  },
  {
    name: "Pedro Almirall",
    photo: require("../assets/speakers/ktowen_dev.jpg"),
    social: "https://twitter.com/ktowen_dev",
  },
  {
    name: "Russell Keith-Magee",
    photo: require("../assets/speakers/freakboy3742.jpg"),
    social: "https://twitter.com/freakboy3742",
  },
  {
    name: "Suilan Estévez Velarde",
    photo: require("../assets/speakers/suilanestevez.jpg"),
    social: "https://twitter.com/suilanestevez",
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
  // {
  //   id: "psf",
  //   name: "Python Software Foundation",
  //   link: "https://www.Python.org/psf/",
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
    title: "Bienvenida 🐍🍕",
    duration: 6,
    type: Types.OTHER,
  },
  {
    title: "¿Por qué Python?",
    summary:
      "Si usted es Desarrollador de Software, Desarrollador Web, Ingeniero " +
      "de Bases de Datos, Profesional de la Ciberseguridad, Científico de " +
      "Datos, Ingeniero de Redes o un entusiasta más de las TIC debe " +
      "considerar programar en Python. En esta charla de 10 minutos le diré " +
      "por qué.",
    duration: 30,
    type: Types.KEYNOTE,
    speaker: SPEAKERS.findIndex((x) => x.name == "Raul Alderete"),
  },
  {
    title: 'Más allá del "Hola Mundo"',
    summary:
      "Mucha gente se sorprende con la facilidad que uno puede conseguir el " +
      'primer "Hola Mundo" en Python, pero ¿qué hay detrás? En esta charla ' +
      "tendremos un viaje a todo lo que está pasando detrás del escenario " +
      "cuando ejecutamos código Python, y entenderemos como funciona CPython.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Cristián Maureira-Fredes"),
  },
  {
    title: "Viaje al mundo profundo del desarrollo web",
    summary:
      "La historia de un gerente de proyectos de construcción que cayó en " +
      "el mundo profundo de Django y Python",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Andrew Kim"),
  },
  {
    title: "Django y React: ¿ateje, teipe o cola-loca?",
    summary:
      "Django en el backend y React en el frontend hacen una combinación " +
      "inigualable, pero no carente de desafíos. Acompáñame en esta aventura " +
      "y aprenderás a cómo integrarlos y no morir en el intento, juntos " +
      "descubriremos si se requiere ateje, teipe o cola-loca para que no se " +
      "nos despeguen en producción.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Antonio Peña Batista"),
  },
  {
    title: "Extendiendo LibreOffice con Python",
    summary:
      "Extender las posibilidades de LibreOffice con Python, es sencillo, " +
      "fácil y divertido.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Mauricio Baeza"),
  },
  {
    title:
      "Manteniendo paquetes Python en Debian GNU/Linux: Mi experiencia personal",
    summary:
      "Hace un año y pocos meses me adentré en el mundo del mantenimiento de " +
      "paquetes (programas) para Debian GNU/Linux. Dentro del universo Debian " +
      "me di a la tarea de mantener proyectos basados en Python. Sobre este " +
      "proceso y mi experiencia me gustaría compartir 10 minutos de charla. ",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pablo Mestre Drake"),
  },
  {
    title: "Un día tiene solo 24±1 horas",
    summary:
      "El primer domingo de noviembre puedes dormir una hora más o dedicar " +
      "mucho más tiempo a arreglar problemas de fecha y hora en tu código Python.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Miroslav Šedivý"),
  },
  {
    title: "Receso ⛱️",
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
    summary:
      "En esta charla se hablará de video-diet, una herramienta que reduce el " +
      "tamaño de videos y audios sin pérdida de calidad, solo cambiando el " +
      "codec a HEVC, logrando reducciones de hasta 90%.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex(
      (x) => x.name == "Javier Alejandro Oramas López "
    ),
  },
  {
    title: "Python Emergency Remote Teaching",
    summary:
      "During the pandemic lockdown of COVID-19, we found a very different " +
      "context from the usual: a) students with much more time available for " +
      "learning b) many students who did not have a personal computer and " +
      "could only access classes by cell phone c) difficulty to realistically " +
      "assess learning. In this lecture we will present the real experiences " +
      "in a traditional programming course given during the Covid-19 pandemic.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Fernando Masanori"),
  },
  {
    title: "Mail2InfluxDB: mejorando el monitoreo del correo con Python",
    summary:
      "Los sysadmins aman los gráficos, pero los sensores para el monitoreo " +
      "del servicio de correos con el TIG stack son pobres en cantidad/calidad " +
      "de información, mail2influx.py viene a solucionar eso...",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pavel Milanes Costa"),
  },
  {
    title: "Democratizando el Machine Learning con AutoGOAL",
    summary:
      "AutoGOAL es una biblioteca open-source para automatizar gran parte " +
      "del proceso de Machine Learning. En esta charla veremos una " +
      "descripción general de la herramienta, para qué sirve, y cómo puede " +
      "facilitar el desarrollo de aplicaciones basadas en Machine Learning.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Suilan Estévez Velarde"),
  },
  {
    title: "Python y la Meteorología en Cuba",
    summary:
      "La Meteorología se ha vuelto imprescindible para el país. Para " +
      "desarrollar esta ciencia es necesario programar, y lo hacemos en " +
      "Python. Este lenguaje ayuda en el pronóstico y el análisis de datos. " +
      "Acompáñanos, para aprender juntos un poco más.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Gabriel Rodríguez Urquiza"),
  },
  {
    title: "Pizza! 🍕🍕",
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
    title: "PENDING",
    duration: 12,
    type: Types.OTHER,
  },
  // {
  //   title:
  //     "El rol de Python en el desarrollo de la Inteligencia Artificial y " +
  //     "la Computación Científica",
  //   type: Types.TALK,
  //   duration: 12,
  //   speaker: SPEAKERS.findIndex((x) => x.name == "Francisco Perdigon Romero"),
  // },
  {
    title: "El pony y la barbacoa",
    summary:
      "Django el pony vive feliz en su casa solo... hasta que le empiezan a " +
      "llegar parientes y tiene que armar una barbacoa. Aprende los retos " +
      "principales para armar barbacoas en Django, de modo que quepan " +
      "decenas, cientos y miles de parientes.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Lorenzo Peña"),
  },
  {
    title: "Cómo Crear Contenidos Python: Tips y Buenas Prácticas",
    summary:
      "Generalmente los programadores Python (o todos?) subestiman el impacto " +
      "que puede tener en sus carreras el hecho de crear y publicar " +
      "contenidos escritos sobre Python. Crear un Blog personal y publicar " +
      "artículos y tutoriales con relativa frecuencia puede influir " +
      "positivamente en tu carrera como programador. En esta charla " +
      "encontrarás algunos tips y buenas prácticas para lograr que tus " +
      "artículos y tutoriales tengan la calidad y el impacto que necesitas " +
      "para crecer en tu carrera como programador Python.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Leodanis Pozo Ramos"),
  },
  {
    title: "Kincapptory",
    summary:
      "Utilización de Python para la construcción en masa de aplicaciones " +
      "Android personalizadas",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Gabriel A. López López"),
  },
  {
    title: "Django ORM y el misterio de las agregaciones múltiples",
    summary:
      "Acompáñame a ver esta triste historia: un usuario de Django comienza " +
      "a usar agregaciones múltiples sin haber leído cuidadosamente la " +
      "documentación y, ¡sorpresa!, está recibiendo resultados incorrectos " +
      "sin que haya ningún error aparente.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Pedro Almirall"),
  },
  {
    title: "Creando Telegram Bots para Ayudar en tareas de Clasificación de ML",
    summary:
      "Los problemas de clasificación son en los que tenemos que poner a un " +
      "objeto en una o más clases, ejmeplo de esto puede ser clasificar si " +
      "una foto es de un pez, un ave, una persona o un carro, o si la opinión " +
      "que expresa un tweet es positiva o negativa. Este tipo de problemas " +
      "puede ser atacado usando tecnicas de machine learning (ML), pero para " +
      "esto se necesitan grandes volumenes de datos clasificados previamente. " +
      "Para asistirnos en esta tarea se creo un modulo de Python para lanzar " +
      "tareas de Python para tareas de clasificación y coordinar a los " +
      "clasificadores.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Hian Cañizares"),
  },
  {
    title: "Receso ⛱️",
    duration: 12,
    type: Types.BREAK,
  },
  {
    title: "Python all the things!",
    summary:
      "Have you ever wanted to write a GUI application you can run on your " +
      "laptop? What about an app that you can run on your phone? Historically, " +
      "these have been difficult to achieve with Python, and impossible to " +
      "achieve without learning a different API for each platform. But no more. " +
      "BeeWare is a collection of tools and libraries that allows you to " +
      "build cross-platform native GUI applications in pure Python, targeting " +
      "desktop, mobile and web platforms. In this talk, you'll be introduced " +
      "to the BeeWare suite of tools and libraries, and see how you can use " +
      "them to develop, from scratch, a simple GUI application that can be " +
      "deployed as a standalone desktop application, or as a mobile phone " +
      "application on iOS or Android - without making any changes to the " +
      "application's codebase.",
    type: Types.TALK,
    duration: 12,
    speaker: SPEAKERS.findIndex((x) => x.name == "Russell Keith-Magee"),
  },
  {
    title: "Proyecto Delta: De lo cotidiano y lo insólito, usando Python",
    summary:
      "El Proyecto Delta es un espectáculo humorístico que tiene lugar cada " +
      "viernes en los cines del Proyecto 23 en La Habana. Este proyecto " +
      "mezcla ciencia, tecnología y cultura geek. El propósito de la charla " +
      "es mostrar cómo desde la tecnología desplegada en el show se usa " +
      "Python en cada una de la aplicaciones que garantizan las " +
      "presentaciones del proyecto.",
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
    title: "Despedida 👋",
    duration: 6,
    type: Types.OTHER,
  },
];
