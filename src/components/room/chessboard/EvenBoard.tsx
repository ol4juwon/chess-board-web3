import React, { FC } from "react";
interface Props {
  chessPieces: any;
  index: number;
  isEven: boolean;
}
const EvenBoard: FC<Props> = ({ chessPieces, index, isEven }: Props) => {
  return (
    <div
      className={`w-10 h-10 md:w-20 md:h-20 flex flex-row ${
        isEven
          ? (index + 1) % 2 == 0
            ? " bg-off-bron text-text-bron"
            : "bg-text-bron text-off-bron "
          : (index + 1) % 2 == 0
          ? " bg-text-bron text-off-bron"
          : "bg-off-bron text-text-bron"
      } `}
      key={index}
    >
      <div className="w-1/5 flex flex-col justify-end px-1">
        {chessPieces[index].let}
      </div>
      <div className="w-3/5">{chessPieces[index].icon}</div>
      <div className="w-1/5">{chessPieces[index].num}</div>
    </div>
  );
};

export default EvenBoard;
