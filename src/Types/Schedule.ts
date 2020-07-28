export enum Types {
  TALK,
  OTHER,
  BREAK,
  LUNCH
}

export default interface Schedule {
  order: number;
  time: string;
  type: Types;
  title: string;
  speaker?: number;
}
