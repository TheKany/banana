import React from "react";
import Text from "../_common/_Text";
import Image from "next/image";
import TableRow from "./TableRow";
import Cell from "./CellType";

const ResultContainer = () => {
  const sajuData = {
    rows: [
      {
        id: "십성-1",
        title: { type: "title", word: "十星", mean: "십성" },
        result: [
          [{ type: "text", word: "傷官", mean: "상관" }],
          [{ type: "text", word: "比肩", mean: "비견" }],
          [{ type: "text", word: "傷官", mean: "상관" }],
          [{ type: "text", word: "傷官", mean: "상관" }],
        ],
      },
      {
        id: "천간",
        title: { type: "title", word: "天干", mean: "천간" },
        result: [
          [{ type: "symbol", korean: "임", chinese: "壬", wordAttr: "陽水" }],
          [{ type: "symbol", korean: "정", chinese: "丁", wordAttr: "陰火" }],
          [{ type: "symbol", korean: "계", chinese: "癸", wordAttr: "陰水" }],
          [{ type: "symbol", korean: "계", chinese: "癸", wordAttr: "陰水" }],
        ],
      },
      {
        id: "지지",
        title: { type: "title", word: "地支", mean: "지지" },
        result: [
          [{ type: "symbol", korean: "인", chinese: "寅", wordAttr: "陽木" }],
          [{ type: "symbol", korean: "사", chinese: "巳", wordAttr: "陰火" }],
          [{ type: "symbol", korean: "해", chinese: "亥", wordAttr: "陰水" }],
          [{ type: "symbol", korean: "유", chinese: "酉", wordAttr: "陰金" }],
        ],
      },
      {
        id: "십성-2",
        title: { type: "title", word: "十星", mean: "십성" },
        result: [
          [{ type: "text", word: "比肩", mean: "비견" }],
          [{ type: "text", word: "劫財", mean: "겁재" }],
          [{ type: "text", word: "食神", mean: "식신" }],
          [{ type: "text", word: "偏財", mean: "편재" }],
        ],
      },
      {
        id: "십이운성",
        title: { type: "title", word: "十二運星", mean: "십이운성" },
        result: [
          [{ type: "text", word: "死", mean: "사" }],
          [{ type: "text", word: "帝旺", mean: "제왕" }],
          [{ type: "text", word: "胎", mean: "태" }],
          [{ type: "text", word: "長生", mean: "장생" }],
        ],
      },
      {
        id: "십이신살",
        title: { type: "title", word: "十二神殺", mean: "(십이신살)" },
        result: [
          [{ type: "text", word: "劫殺", mean: "겁살" }],
          [{ type: "text", word: "地殺", mean: "지살" }],
          [{ type: "text", word: "驛馬殺", mean: "역마살" }],
          [{ type: "text", word: "將星殺", mean: "장성살" }],
        ],
      },
      {
        id: "귀인",
        title: { type: "title", word: "貴人", mean: "귀인" },
        result: [
          [{ type: "text", word: "", mean: "" }],
          [{ type: "text", word: "", mean: "" }],
          [{ type: "text", word: "天乙", mean: "천을귀인" }],
          [
            { type: "text", word: "天乙", mean: "천을귀인" },
            { type: "text", word: "太極", mean: "태극귀인" },
            { type: "text", word: "文昌", mean: "문창귀인" },
          ],
        ],
      },
    ],
  };

  return (
    <section className="relative border-[3px] border-[#1B2F49] mx-[12px] base-shadow">
      {/* 장식 읽히지 않도록 */}
      <div
        className="position-center pointer-events-none outline outline-[#2B557E] w-full h-[calc(100%-16px)]"
        aria-hidden="true"
      >
        <Image
          src={"/img/left-cloud.png"}
          alt="왼쪽 장식"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[8px] top-[45px] w-[56px] aspect-[56/38]"
        />
        <Image
          src={"/img/right-cloud.png"}
          alt="오른쪽 장식"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[8px] top-[26px] w-[56px] aspect-[56/38]"
        />
      </div>
      <div
        className="position-center pointer-events-none outline outline-[#2B557E] w-[calc(100%-16px)] h-full py-10"
        aria-hidden="true"
      />

      <div className="my-10">
        {/* 사용자 정보 */}
        <div className="flex flex-col tracking-normal gap-3 mb-[26px]">
          <Text fz={16}>김로켓님의 사주</Text>
          <Text fz={20} className="font-bold">
            1980년 8월27일 08:10
          </Text>
        </div>

        {/* 사용자 사주 정보 */}
        <div className="mx-3 border-r border-b border-r-black border-b-black">
          {/* 헤더 */}
          <div className="grid grid-cols-[60px_repeat(4,1fr)]">
            <div className="border-r border-black"></div>

            <div className="col-span-4 grid grid-cols-4 divide-x divide-[#8A8A8A]">
              <Text fz={20} className="font-bold py-3">
                時
              </Text>{" "}
              <Text fz={20} className="font-bold py-3">
                日
              </Text>{" "}
              <Text fz={20} className="font-bold py-3">
                月
              </Text>
              <Text fz={20} className="font-bold py-3">
                年
              </Text>
            </div>
          </div>

          <>
            {sajuData.rows.map((row) => (
              <TableRow key={row.id}>
                <Cell
                  type="title"
                  word={row.title.word}
                  wordFz={12}
                  mean={row.title.mean}
                  meanFz={7.82}
                  className="border-r border-r-black"
                />

                {row.result.map((cell, idx) => (
                  <div key={idx} className="bg-white flex-col-center">
                    {cell.map((item, i) =>
                      "word" in item ? (
                        <Cell
                          key={i}
                          type="normal"
                          word={item.word}
                          wordFz={14.67}
                          mean={item.mean}
                          meanFz={9.78}
                        />
                      ) : (
                        <Cell
                          key={i}
                          type="symbol"
                          korean={item.korean}
                          chinese={item.chinese}
                          wordAttr={item.wordAttr}
                        />
                      )
                    )}
                  </div>
                ))}
              </TableRow>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default ResultContainer;
