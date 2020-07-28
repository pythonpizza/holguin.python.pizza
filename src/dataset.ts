import Speaker from "@/Types/Speaker";
import Sponsor from "@/Types/Sponsor";
import Schedule, { Types } from "@/Types/Schedule";

export const SPEAKERS: Speaker[] = [
  {
    name: "Speaker A",
    photo: "https://via.placeholder.com/150",
    job: "Job A",
    social: "http://web.url",
  },
  {
    name: "Speaker B",
    photo: "https://via.placeholder.com/150",
    job: "Job B",
    social: "http://web.url",
  },
];

export const SPONSORS: Sponsor[][] = [];

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
