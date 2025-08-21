import React from "react";
import Text from "../_common/_Text";

type Title = {
  type: "title";
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
  className?: string;
};

type Normal = {
  type: "normal";
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
  className?: string;
};

type Symbol = {
  type: "symbol";
  korean: string;
  chinese: string;
  wordAttr: string;
  className?: string;
};

type CellProps = Title | Normal | Symbol;

const symbolBg = (attr: string) => {
  if (attr.includes("木")) return "bg-[#18868C] text-white";
  if (attr.includes("火")) return "bg-[#C23030] text-white";
  if (attr.includes("水")) return "bg-[#2F2F2F] text-white";
  if (attr.includes("金") || attr.includes("金"))
    return "bg-[#F9F9F9] text-black border border-black";
  return "bg-white text-black";
};

const Cell = (props: CellProps) => {
  switch (props.type) {
    case "title": {
      const { word, wordFz, mean, meanFz, className } = props;
      return (
        <div
          className={`flex flex-col justify-center py-1 border-r border-black ${
            className ?? ""
          }`}
        >
          <Text fz={wordFz}>{word}</Text>
          <Text fz={meanFz} className="font-bold">
            ({mean})
          </Text>
        </div>
      );
    }

    case "normal": {
      const { word, wordFz, mean, meanFz, className } = props;
      const empty = word === "" && mean === "";
      return (
        <div
          className={`flex flex-col items-center justify-center bg-white pt-1 pb-2 ${
            className ?? ""
          }`}
        >
          {!empty && word !== "" && <Text fz={wordFz}>{word}</Text>}
          {!empty && mean !== "" && (
            <Text fz={meanFz} className="font-bold">
              ({mean})
            </Text>
          )}
          {empty && <Text fz={9.78}>(없음)</Text>}
        </div>
      );
    }

    case "symbol": {
      const { korean, chinese, wordAttr, className } = props;
      const colorClass = symbolBg(wordAttr);
      return (
        <div className={`bg-white p-[5.87px] ${className ?? ""}`}>
          <div
            className={`w-full aspect-square h-auto self-start grid place-items-center rounded-[12.55px] p-1 ${colorClass}`}
          >
            <Text fz={7.6} className="leading-none">
              {korean}
            </Text>
            <Text fz={25.11} className="leading-none">
              {chinese}
            </Text>
            <Text fz={8.37} className="leading-none">
              {wordAttr}
            </Text>
          </div>
        </div>
      );
    }
  }
};

export default Cell;
