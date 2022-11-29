import React, { ReactNode, useEffect, useState } from "react";
import { Pawn } from "./icons";

import {
  BishopOperation,
  KingOperation,
  KnightOperation,
  PawnOperation,
  QueenOperation,
  RookOperation,
} from "./utils";

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
  const pawn = { hasFirstStep: false, icon: "pawn",color: "black" };
  const rook = { icon: "rook", color: "black" };
  const bishop = { icon: "bishop", color: "black" };
  const knight = { icon: "knight", color: "black" };
  const king = { icon: "king", color: "black" };
  const queen = { icon: "queen", color: "black" };
  const pawn_w = { hasFirstStep: false, icon: "pawn", color: "white" };
  const rook_w = { icon: "rook", color: "white" };
  const bishop_w = { icon: "bishop", color: "white" };
  const knight_w = { icon: "knight", color: "white" };
  const king_w = { icon: "king", color: "white" };
  const queen_w = { icon: "queen", color: "white" };
  const map = [
    { piece: rook },
    { piece: knight },
    { piece: bishop },
    { piece: king },
    { piece: queen },
    { piece: bishop },
    { piece: knight },
    { piece: rook, num: "8" },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "black" }, num: "7" },
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
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" } },
    { piece: { hasFirstStep: false, icon: "pawn", color: "white" }, num: "2" },
    { piece: rook_w, let: "a" },
    { piece: knight_w, let: "b" },
    { piece: bishop_w, let: "c" },
    { piece: king_w, let: "d" },
    { piece: queen_w, let: "e" },
    { piece: bishop_w, let: "f" },
    { piece: knight_w, let: "g" },
    { piece: rook_w, let: "h", num: "1" },
  ];
  const [chessPieces, setChessPieces] = useState(map);
  const [pieceOne, setPieceOne] = useState<any>();
  const [pieceTwo, setPieceTwo] = useState<any>();
  const swapPieces = (p1: number, p2: number) => {
    const pick1 = chessPieces[p1];
    const pick2 = chessPieces[p2];
    switch (pick1.piece.icon) {
      case "pawn":
        PawnOperation(chessPieces, p1, p2,setChessPieces);
        break;
      case "rook":
        RookOperation();
        break;
      case "knight":
        KnightOperation();
        break;
      case "bishop":
        BishopOperation();
        break;
      case "queen":
        QueenOperation();
        break;
      case "king":
        KingOperation();
        break;
      default:
        break;
    }
    setPieceOne(null);
    setPieceTwo(null);
    console.log("pieces moved ", "p1", chessPieces[p1], "p2", chessPieces[p2]);
  };

  const addIndex = (index: number) => {
    if (pieceOne == null && pieceTwo == null) {
      setPieceOne(index);
    } else if (pieceOne && pieceTwo == null) {
      setPieceTwo(index);
    }
  };
  useEffect(() => {
    // if (pieceOne) {
    if (pieceTwo && pieceOne) {
      swapPieces(pieceOne, pieceTwo);
    }
    // }
  }, [pieceOne, pieceTwo]);
  useEffect(() => {}, [chessPieces]);
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
