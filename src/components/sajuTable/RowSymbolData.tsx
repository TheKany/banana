import React from "react";
import Text from "../_common/_Text";

type Props = {
  korean: string;
  chinese: string;
  wordAttr: string;
};

const RowSymbolData = ({ korean, chinese, wordAttr }: Props) => {
  switch (true) {
    case wordAttr.includes("木"):
      return (
        <div className=" bg-white p-[5.87px]">
          <div
            className={`flex-center rounded-[12.55px] aspect-square p-1 bg-[#18868C]`}
          >
            <Text fz={7.6} className=" text-white">
              {korean}
            </Text>
            <Text fz={25.11} className=" text-white">
              {chinese}
            </Text>
            <Text fz={8.37} className=" text-white">
              {wordAttr}
            </Text>
          </div>
        </div>
      );

    case wordAttr.includes("火"):
      return (
        <div className=" bg-white p-[5.87px]">
          <div
            className={`flex-center rounded-[12.55px] aspect-square p-1 bg-[#C23030]`}
          >
            <Text fz={7.6} className=" text-white">
              {korean}
            </Text>
            <Text fz={25.11} className=" text-white">
              {chinese}
            </Text>
            <Text fz={8.37} className=" text-white">
              {wordAttr}
            </Text>
          </div>
        </div>
      );

    case wordAttr.includes("水"):
      return (
        <div className=" bg-white p-[5.87px]">
          <div
            className={`flex-center rounded-[12.55px] aspect-square p-1 bg-[#2F2F2F]`}
          >
            <Text fz={7.6} className=" text-white">
              {korean}
            </Text>
            <Text fz={25.11} className=" text-white">
              {chinese}
            </Text>
            <Text fz={8.37} className=" text-white">
              {wordAttr}
            </Text>
          </div>
        </div>
      );

    case wordAttr.includes("金"):
      return (
        <div className=" bg-white p-[5.87px]">
          <div
            className={`flex-center rounded-[12.55px] aspect-square p-1 bg-[#F9F9F9] border border-black`}
          >
            <Text fz={7.6}>{korean}</Text>
            <Text fz={25.11}>{chinese}</Text>
            <Text fz={8.37}>{wordAttr}</Text>
          </div>
        </div>
      );

    default:
      break;
  }
};

export default RowSymbolData;

/*
 오행 색상 가이드
 木 => #18868C
 火 => #C23030
 水 => #2F2F2F
 金 => #F9F9F9

 // 의도된 사항인지 아닌지 모르겠지만, 
 // 천간의 "계" 와 지지의 "해"의 attr은 같은데 배경색이 다름.
*/
