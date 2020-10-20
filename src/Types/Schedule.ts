export enum Types {
  TALK,
  KEYNOTE,
  OTHER,
  BREAK,
  LUNCH,
}

export default interface Schedule {
  title: string;
  type: Types;
  duration: number;
  speaker?: number;
  start?: number; // buffer
}
