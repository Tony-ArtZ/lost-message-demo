export interface WordleItem {
  word: string;
  hint: string;
  image: string;
  order: number;
}

export type GameState = "playing" | "won" | "completed";

export interface LetterState {
  letter: string;
  state: "correct" | "present" | "absent" | "empty";
}
