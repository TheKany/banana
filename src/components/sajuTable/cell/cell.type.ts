export type Title = {
  type: "title";
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
  className?: string;
};

export type Normal = {
  type: "normal";
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
  className?: string;
};

export type Symbol = {
  type: "symbol";
  korean: string;
  chinese: string;
  wordAttr: string;
  className?: string;
};

export type CellProps = Title | Normal | Symbol;
