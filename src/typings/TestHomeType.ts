export interface IUserTestCard {
  id: number;
  src: string;
  title: string;
  tag: string;
}

export interface IUserTestCardStyle {
  width: string;
  height: string;
}
export interface IUserTestCardButtonStyle {
  buttonSize: string;
  width: string;
  height: string;
}

export interface IMyTestCard {
  id: number;
  src: string;
  title: string;
  view: number;
  tag: string;
  makeDay: Date;
}
