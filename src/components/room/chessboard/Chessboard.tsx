import React, { useState } from "react";
import EvenBoard from "./EvenBoard";
import ChessProvider from "./Provider";
const Chessboard = () => {
  const [swap, setSwap] = useState({ startPiece: "", endPiece: "" });

  return (
    <ChessProvider>
      {({
        chessPieces,
        addIndex,
      }) => (
        <div className="w-340px md:w-660px h-full py-2  bg-primary-grey ">
          <div className="mx-auto flex flex-row flex-wrap justify-center items-center">
            {Array.from(Array(64)).map((i, index) => {
              if (index >= 0 && index <= 7)
                return (
                  <EvenBoard
                    isEven={false}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 8 && index <= 15)
                return (
                  <EvenBoard
                    isEven={true}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 16 && index <= 23)
                return (
                  <EvenBoard
                    isEven={false}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 24 && index <= 31)
                return (
                  <EvenBoard
                    isEven={true}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 32 && index <= 39)
                return (
                  <EvenBoard
                    isEven={false}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 40 && index <= 47)
                return (
                  <EvenBoard
                    isEven={true}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 48 && index <= 55)
                return (
                  <EvenBoard
                    isEven={false}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
              if (index >= 56 && index <= 63)
                return (
                  <EvenBoard
                    isEven={true}
                    onClick={() => addIndex(index)}
                    chessPieces={chessPieces}
                    index={index}
                  />
                );
            })}
          </div>
        </div>
      )}
    </ChessProvider>
  );
};

export default Chessboard;
