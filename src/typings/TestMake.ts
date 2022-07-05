export interface IQuizInfo {
  id: number;
  question: string;
  examples: { id: number; example: string }[];
  answer: number;
}
