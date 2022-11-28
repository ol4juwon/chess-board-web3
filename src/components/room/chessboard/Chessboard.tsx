import React from "react";
import EvenBoard from "./EvenBoard";
const Chessboard = () => {
  const chessPieces = [
    { color:'black',icon: "rook" },
    { color:'black',icon: "knight" },
    { color:'black',icon: "bishop" },
    { color:'black',icon: "king" },
    { color:'black',icon: "queen" },
    { color:'black',icon: " bishop" },
    { color:'black',icon: "knight" },
    { color:'black',icon: "rook", num: "8" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn" },
    { color:'black',icon: "pawn", num: "7" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { num: "6" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { num: "5" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { num: "4" },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    { num: "3" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn" },
    { color:'white',icon: "pawn", num: "2" },
    { color:'white',icon: "rook", let: "a" },
    { color:'white',icon: "knight", let: "b" },
    { color:'white',icon: "bishop", let: "c" },
    { color:'white',icon: "king", let: "d" },
    { color:'white',icon: "queen", let: "e" },
    { color:'white',icon: " bishop", let: "f" },
    { color:'white',icon: "knight", let: "g" },
    { color:'white',icon: "rook", let: "h", num: "1" },
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
