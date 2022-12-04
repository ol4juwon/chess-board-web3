import { METHODS } from "http";
import { SetStateAction } from "react";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "./icons";
export const getIcons = (icon: string, color: string) => {
  switch (icon) {
    case "pawn":
      return <Pawn color={color} className="lg:w-40 lg:h-40 bg-primary-btn" />;
    case "rook":
      return <Rook color={color} />;
    case "bishop":
      return <Bishop color={color} />;
    case "knight":
      return <Knight color={color} />;
    case "king":
      return <King color={color} />;
    case "queen":
      return <Queen color={color} />;
  }
};
export const PawnOperation = (
  chessPieces: any[],
  p1: number,
  p2: number,
  ) => {
  const pick1 = chessPieces[p1];
  const pick2 = chessPieces[p2];
  const {color} = pick1.piece;

  if(color == 'white'){
    if(((p1-p2) / 8 == 1 ||  (p1-p2) /8  == 2) || ((p1-p2)/7 == 1 || (p1-p2)/ 9 == 1)){
      console.log("f",(p1-p2) / 8);
        if(pick1.piece.hasFirstStep){
            if(Math.abs(p1-p2) /8  == 1 && !pick2.piece.icon){
              [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
              
            }else if((Math.abs(p1-p2)/7 == 1 || Math.abs(p1-p2) / 9 == 1) && pick2.piece.icon && (pick2.piece.color != pick1.piece.color)){
              [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
              pick1.piece = {};
            }
        }else{
          if(Math.abs(p1-p2) /8  <= 2 && !pick2.piece.icon){
            pick1.piece.hasFirstStep = true;
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            
          }else if((Math.abs(p1-p2)/7 == 1 || Math.abs(p1-p2) / 9 == 1) && pick2.piece.icon && (pick2.piece.color != pick1.piece.color)){
            pick1.piece.hasFirstStep = true;
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            pick2.piece = {};
          }
        }
    }else{
      alert('Pawns Can only move forward or diagonally to capture a piece. ');
    }
  }else{
    if(((p1-p2) / 8 == -1 ||  (p1-p2) /8  == -2) || ((p1-p2)/7 == -1 || (p1-p2)/ 9 == -1)){
      console.log("f",(p1-p2) / 8);
        if(pick1.piece.hasFirstStep){
            if(Math.abs(p1-p2) /8  == 1 && !pick2.piece.icon){
              [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
              
            }else if((Math.abs(p1-p2)/7 == 1 || Math.abs(p1-p2) / 9 == 1) && pick2.piece.icon && (pick2.piece.color != pick1.piece.color)){
              [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
              pick1.piece = {};
            }
        }else{
          if(Math.abs(p1-p2) /8  <= 2 && !pick2.piece.icon){
            pick1.piece.hasFirstStep = true;
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            
          }else if((Math.abs(p1-p2)/7 == 1 || Math.abs(p1-p2) / 9 == 1) && pick2.piece.icon && (pick2.piece.color != pick1.piece.color)){
            pick1.piece.hasFirstStep = true;
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            pick2.piece = {};
          }
        }
    }else{
      alert('Pawns Can only move forward or diagonally to capture a piece. ')
    }
  }
};
export const RookOperation = () => {
  console.log("Rook ops");
};

export const BishopOperation = (chessPieces: any[], p1: number, p2: number) => {
 
  const pick1 = chessPieces[p1];
  const pick2 = chessPieces[p2];
  if (Math.abs(p1 - p2) %7 == 0 || Math.abs(p1-p2) %9 == 0) {
    console.log("bishop ops");
    if(Math.abs(p1-p2) % 7 == 0){
      switch(Math.abs(p1-p2)){
          case 1:

      }

    }else if(Math.abs(p1-p2) % 9){
      console.log('backward slash')
    }
  }
};
export const KnightOperation = (
  chessPieces: any[],
  p1: number,
  p2: number,
  setChessPieces: SetStateAction<any>
) => {
  console.log("Knight", p1, p2, p1 - p2);
  const pick1 = chessPieces[p1];
  const pick2 = chessPieces[p2];
  switch (Math.abs(p1 - p2)) {
    case 6:
    case 10:
    case 15:
    case 17:
      if (0 <= p2 && p2 <= 64) {
        if (!pick2.piece.icon) {
          console.log("ee");
          [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
        } else if (pick2.piece.icon) {
          console.log(pick2.piece.color, pick1.piece.color);
          if (pick2.piece.color != pick1.piece.color) {
            console.log("space 2", pick2.piece);
            [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
            pick1.piece = {};
          }
        }
      }
      break;
  }
};
export const QueenOperation = () => {
  console.log("queen ops");
};

export const KingOperation = () => {
  console.log("king ops");
};
