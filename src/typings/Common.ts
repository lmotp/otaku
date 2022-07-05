export interface ITag {
  buttonTag: string;
  active: boolean;
  onChangeActiveButton: (value: string) => void;
}

export interface ISubTitle {
  title: string;
  marginBottom: number;
}
