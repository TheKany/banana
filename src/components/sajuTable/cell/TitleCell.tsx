import Text from "@/components/_common/_Text";
import { Title } from "./cell.type";

const TitleCell = ({
  word,
  wordFz,
  mean,
  meanFz,
  className,
}: Omit<Title, "type">) => {
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
};

export default TitleCell;
