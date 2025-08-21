import Text from "@/components/_common/_Text";
import React from "react";
import { Normal } from "./cell.type";

const NormalCell = ({
  word,
  wordFz,
  mean,
  meanFz,
  className,
}: Omit<Normal, "type">) => {
  const empty = !word && !mean;

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white pt-1 pb-2 ${
        className ?? ""
      }`}
    >
      {word && <Text fz={wordFz}>{word}</Text>}
      {mean && (
        <Text fz={meanFz} className="font-bold">
          ({mean})
        </Text>
      )}
      {empty && <Text fz={9.78}>(없음)</Text>}
    </div>
  );
};

export default NormalCell;
