import React from "react";
import Text from "../_common/_Text";
import RowData from "./RowData";
import RowTitle from "./RowTitle";
import RowSymbolData from "./RowSymbolData";
import Image from "next/image";

const ResultContainer = () => {
  const data = {
    name: "김로켓",
    birth: "1980년 8월27일 08:10",
    row1: [
      ["十星", "십성"],
      ["比肩", "비견"],
      ["傷官", "상관"],
      ["傷官", "상관"],
    ],
  };

  return (
    <section className="relative border-[3px] border-[#1B2F49] mx-[12px] base-shadow">
      {/* 장식 */}

      <div className="position-center outline outline-[#2B557E] w-full h-[calc(100%-16px)]">
        <Image
          src={"/img/left-cloud.png"}
          alt="왼쪽 장식"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute left-[8px] top-[45px] w-[56px] aspect-[56/38]"
          priority
        />
        <Image
          src={"/img/right-cloud.png"}
          alt="오른쪽 장식"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-[8px] top-[26px] w-[56px] aspect-[56/38]"
          priority
        />
      </div>

      {/* 장식 */}
      <div className="position-center outline outline-[#2B557E] w-[calc(100%-16px)] h-full py-10"></div>

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
            <div></div>
            <Text fz={20} className="font-bold py-3">
              時
            </Text>
            <Text fz={20} className="font-bold py-3">
              日
            </Text>
            <Text fz={20} className="font-bold py-3">
              月
            </Text>
            <Text fz={20} className="font-bold py-3">
              年
            </Text>
          </div>
          <div>
            {/* row1: 십성 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle word="十星" wordFz={12} mean="십성" meanFz={7.82} />
              <RowData word="傷官" wordFz={14.67} mean="상관" meanFz={9.78} />
              <RowData word="比肩" wordFz={14.67} mean="비견" meanFz={9.78} />
              <RowData word="傷官" wordFz={14.67} mean="상관" meanFz={9.78} />
              <RowData word="傷官" wordFz={14.67} mean="상관" meanFz={9.78} />
            </div>

            {/* row2: 천간 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle word="天干" wordFz={12} mean="천간" meanFz={7.82} />
              <RowSymbolData korean="임" chinese="壬" wordAttr="陽水" />
              <RowSymbolData korean="정" chinese="丁" wordAttr="陰火" />
              <RowSymbolData korean="계" chinese="癸" wordAttr="陰水" />
              <RowSymbolData korean="계" chinese="癸" wordAttr="陰水" />
            </div>

            {/* row3: 지지 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle word="地支" wordFz={12} mean="지지" meanFz={7.82} />
              <RowSymbolData korean="인" chinese="寅" wordAttr="陽木" />
              <RowSymbolData korean="사" chinese="巳" wordAttr="陰火" />
              <RowSymbolData korean="해" chinese="亥" wordAttr="陰水" />
              <RowSymbolData korean="유" chinese="酉" wordAttr="陰金" />
            </div>

            {/* row4: 십성 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle word="十星" wordFz={12} mean="십성" meanFz={7.82} />
              <RowData word="比肩" wordFz={14.67} mean="비견" meanFz={9.78} />
              <RowData word="劫財" wordFz={14.67} mean="겁재" meanFz={9.78} />
              <RowData word="食神" wordFz={14.67} mean="식신" meanFz={9.78} />
              <RowData word="偏財" wordFz={14.67} mean="편재" meanFz={9.78} />
            </div>

            {/* row5: 십이운성 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle
                word="十二運星"
                wordFz={9.78}
                mean="십이운성"
                meanFz={7.82}
              />
              <RowData word="死" wordFz={14.67} mean="사" meanFz={9.78} />
              <RowData word="帝旺" wordFz={14.67} mean="제왕" meanFz={9.78} />
              <RowData word="胎" wordFz={14.67} mean="태" meanFz={9.78} />
              <RowData word="長生" wordFz={14.67} mean="장생" meanFz={9.78} />
            </div>

            {/* row6: 십이신살 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle
                word="十二神殺"
                wordFz={9.78}
                mean="(십이신살)"
                meanFz={7.82}
              />
              <RowData word="劫殺" wordFz={14.67} mean="겁살" meanFz={9.78} />
              <RowData word="地殺" wordFz={14.67} mean="지살" meanFz={9.78} />
              <RowData
                word="驛馬殺"
                wordFz={14.67}
                mean="역마살"
                meanFz={9.78}
              />
              <RowData
                word="將星殺"
                wordFz={14.67}
                mean="장성살"
                meanFz={9.78}
              />
            </div>

            {/* row7: 귀인 */}
            <div className="grid grid-cols-[60px_repeat(4,1fr)] border-t border-t-black">
              <RowTitle word="貴人" wordFz={12} mean="귀인" meanFz={7.82} />
              <RowData word="" wordFz={0} mean="" meanFz={0} />
              <RowData word="" wordFz={0} mean="" meanFz={0} />
              <RowData
                word="天乙"
                wordFz={14.67}
                mean="천을귀인"
                meanFz={9.78}
              />
              <div>
                <RowData
                  word="天乙"
                  wordFz={14.67}
                  mean="천을귀인"
                  meanFz={9.78}
                />
                <RowData
                  word="太極"
                  wordFz={14.67}
                  mean="태극귀인"
                  meanFz={9.78}
                />
                <RowData
                  word="文昌"
                  wordFz={14.67}
                  mean="문창귀인"
                  meanFz={9.78}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultContainer;
