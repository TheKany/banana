import React from "react";
import Text from "../_common/_Text";

type Props = {
  word: string;
  wordFz: number;
  mean: string;
  meanFz: number;
};

const RowData = ({ word, wordFz, mean, meanFz }: Props) => {
  return (
    <div className="flex flex-col justify-center align-middle bg-white pt-1 pb-2">
      {word !== "" ? <Text fz={wordFz}>{word}</Text> : null}
      {mean !== "" ? (
        <Text fz={meanFz} className="font-bold">
          ({mean})
        </Text>
      ) : null}

      {word === "" && mean == "" ? <Text fz={9.78}>(없음)</Text> : null}
    </div>
  );
};

export default RowData;
