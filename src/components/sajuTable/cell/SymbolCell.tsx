import React from "react";
import { Symbol } from "./cell.type";
import Text from "@/components/_common/_Text";

const symbolBg = (attr: string) => {
  if (attr.includes("木")) return "bg-[#18868C] text-white";
  if (attr.includes("火")) return "bg-[#C23030] text-white";
  if (attr.includes("水")) return "bg-[#2F2F2F] text-white";
  if (attr.includes("金") || attr.includes("金"))
    return "bg-[#F9F9F9] text-black border border-black";
  return "bg-white text-black";
};

const SymbolCell = ({
  korean,
  chinese,
  wordAttr,
  className,
}: Omit<Symbol, "type">) => {
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
};

export default SymbolCell;
