import React, { ReactNode, useEffect, useState } from "react";

export type ChessProviderProps = {
  swapPieces: (p1: number, p2: number) => void;
  chessPieces: any[];
  pieceOne: number | null;
  pieceTwo: number | null;
  setPieceOne?: any;
  setPieceTwo?: any;
  addIndex: (index: number) => void;
};

interface Props {
  children(_: ChessProviderProps): ReactNode;
}
const ChessProvider = ({ children }: Props) => {
    const pawn = { hasFirstStep: true, icon: 'pawn', color: 'black',}
    const rook = {icon: 'rook', color:'black'}
  const map = [
    { piece: rook },
    { piece: { color: "black", icon: "knight" } },
    { piece: { color: "black", icon: "bishop" } },
    { piece: { color: "black", icon: "king" } },
    { piece: { color: "black", icon: "queen" } },
    { piece: { color: "black", icon: "bishop" } },
    { piece: { color: "black", icon: "knight" } },
    { piece: rook, num: "8" },
    { piece: pawn },
    { piece: pawn },
    { piece: pawn },
    { piece: pawn },
    { piece: pawn},
    { piece: pawn },
    { piece: pawn},
    { piece: pawn, num: "7" },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {}, num: "6" },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {}, num: "5" },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {}, num: "4" },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {} },
    { piece: {}, num: "3" },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" } },
    { piece: { color: "white", icon: "pawn" }, num: "2" },
    { piece: { color: "white", icon: "rook" }, let: "a" },
    { piece: { color: "white", icon: "knight" }, let: "b" },
    { piece: { color: "white", icon: "bishop" }, let: "c" },
    { piece: { color: "white", icon: "king" }, let: "d" },
    { piece: { color: "white", icon: "queen" }, let: "e" },
    { piece: { color: "white", icon: "bishop" }, let: "f" },
    { piece: { color: "white", icon: "knight" }, let: "g" },
    { piece: { color: "white", icon: "rook" }, let: "h", num: "1" },
  ];
  const [chessPieces, setChessPieces] = useState(map);
  const [pieceOne, setPieceOne] = useState<any>();
  const [pieceTwo, setPieceTwo] = useState<any>();
  const swapPieces = (p1: number, p2: number) => {
    if (chessPieces[p1].piece.icon == "pawn") {
       if(chessPieces[p1].piece.color == "white"){
        console.log("swapping white");
        console.log(chessPieces[p1], chessPieces[p2], p2 - p1);
        if (Math.abs(p2 - p1) == 8 || Math.abs(p2 - p1) == 16) {
         console.log("cehcking",chessPieces[p1 - 8].piece.icon);
          if (!chessPieces[p1 - 8].piece.icon) {
            [chessPieces[p1].piece, chessPieces[p2].piece] = [
              chessPieces[p2].piece,
              chessPieces[p1].piece,
            ];
            setChessPieces(chessPieces);
          }
        }
       }else if(chessPieces[p1].piece.color == "black"){
        console.log("swapping black");
        console.log(chessPieces[p1], chessPieces[p2], p2 - p1);
        if (p2 - p1 == 8 || p2 - p1 == 16) {
         console.log("cehcking",chessPieces[p1 + 8].piece.icon);
          if (!chessPieces[p1 + 8].piece.icon) {
            [chessPieces[p1].piece, chessPieces[p2].piece] = [
              chessPieces[p2].piece,
              chessPieces[p1].piece,
            ];
            setChessPieces(chessPieces);
          }
        }
       }

    }
    setPieceOne(null);
    setPieceTwo(null);
    console.log(chessPieces[p1], chessPieces[p2]);
  };
  const addIndex = (index: number) => {
    if (pieceOne == null && pieceTwo == null) {
      setPieceOne(index);
    } else if (pieceOne && pieceTwo == null) {
      setPieceTwo(index);
    }
  };
  useEffect(() => {
    if (pieceOne) {
      if (pieceTwo && pieceOne) {
        swapPieces(pieceOne, pieceTwo);
      }
    }
  }, [pieceOne, pieceTwo]);
  useEffect(() => {
    console.log("pieces moved");
  }, [chessPieces]);
  return (
    <>
      {children({
        chessPieces,
        pieceOne,
        setPieceOne,
        pieceTwo,
        setPieceTwo,
        swapPieces,
        addIndex,
      })}
    </>
  );
};

export default ChessProvider;
