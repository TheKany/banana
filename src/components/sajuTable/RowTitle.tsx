import React from "react";
import Text from "../_common/_Text";

type Props = {
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
};

const RowTitle = ({ word, wordFz, mean, meanFz }: Props) => {
  return (
    <div className="flex flex-col justify-center align-middle py-1">
      <Text fz={wordFz}>{word}</Text>
      <Text fz={meanFz} className="font-bold">
        ({mean})
      </Text>
    </div>
  );
};

export default RowTitle;
