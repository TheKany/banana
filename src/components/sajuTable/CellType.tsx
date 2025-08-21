import React from "react";
import { CellProps } from "./cell/cell.type";
import TitleCell from "./cell/TitleCell";
import NormalCell from "./cell/NormalCell";
import SymbolCell from "./cell/SymbolCell";

const Cell = (props: CellProps) => {
  switch (props.type) {
    case "title": {
      <TitleCell {...props} />;
    }

    case "normal": {
      return <NormalCell {...props} />;
    }

    case "symbol": {
      return <SymbolCell {...props} />;
    }
  }
};

export default Cell;
