import React, { FC, useEffect } from "react";
interface Props {
  chessPieces: any;
  index: number;
  isEven: boolean;
  onClick: ()=> void;
}
const EvenBoard: FC<Props> = ({ chessPieces, index, isEven, onClick }: Props) => {
console.log(index);
  return (
    <div 
    onClick={onClick}
      className={`w-10 h-10 md:w-20 md:h-20 flex flex-row hover:bg-colors-amber-400 ${
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
      <div className="w-3/5 h-full flex flex-col items-center justify-end py-2 ">
        <i
          className={`fas fa-chess-${
            chessPieces[index].piece?.icon
          } text-xl md:text-5xl 
       ${
         chessPieces[index].piece?.color == "white"
           ? " text-colors-white "
           : " text-colors-black"
       }  `}
        ></i>
      </div>
      <div
        className={`w-1/5 text-xs md:text-md 
      ${
        isEven
          ? (index + 1) % 2 == 0
            ? "  text-text-bron"
            : " text-off-bron "
          : (index + 1) % 2 == 0
          ? "  text-off-bron"
          : " text-text-bron"
      }
      
      `}
      >
        {chessPieces[index].num}
      </div>
    </div>
  );
};

export default EvenBoard;
