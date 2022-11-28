import React from "react";
import EvenBoard from "./EvenBoard";
const Chessboard = () => {
  const chessPieces = [
    {icon: 'rook'},{icon: 'knight'},{icon: 'bishop'},{icon:'king'},{icon: 'queen'},{icon:' bishop'},{icon:'knight'},{icon: 'rook', num: '8'},
    {icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn', num:'7'},
    {},{},{},{},{},{},{},{num:'6'},
    {},{},{},{},{},{},{},{num: '5'},
    {},{},{},{},{},{},{},{num: '4'},
    {},{},{},{},{},{},{},{num: '3'},
    {icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn'},{icon: 'pawn', num: '2'},

    {icon: 'rook', let: 'a'},{icon: 'knight', let:'b'},{icon: 'bishop', let:'c'},{icon:'king',let:'d'},{icon: 'queen',let:'e'},{icon:' bishop', let: 'f'},{icon:'knight', let: 'g'},{icon: 'rook', let: 'h', num: '1'},
  ];
  return (
    <div className="w-340px md:w-660px h-full py-2  bg-primary-grey ">
      <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
        {Array.from(Array(64)).map((i, index) => {
          if (index >= 0 && index <= 7)
            return (
              <EvenBoard
                isEven={false}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 8 && index <= 15)
            return (
              <EvenBoard
                isEven={true}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 16 && index <= 23)
            return (
              <EvenBoard
                isEven={false}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 24 && index <= 31)
            return (
              <EvenBoard
                isEven={true}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 32 && index <= 39)
            return (
              <EvenBoard
                isEven={false}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 40 && index <= 47)
            return (
              <EvenBoard
                isEven={true}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 48 && index <= 55)
            return (
              <EvenBoard
                isEven={false}
                chessPieces={chessPieces}
                index={index}
              />
            );
          if (index >= 56 && index <= 63)
            return (
              <EvenBoard
                isEven={true}
                chessPieces={chessPieces}
                index={index}
              />
            );
        })}
      </div>
    </div>
  );
};

export default Chessboard;
