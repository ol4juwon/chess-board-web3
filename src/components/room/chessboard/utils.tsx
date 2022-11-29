import { SetStateAction } from "react";
import { Bishop, King, Knight, Pawn, Queen, Rook } from "./icons";
export const getIcons = (icon: string, color: string) => {
  switch (icon) {
    case "pawn":
      return <Pawn color={color} />;
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
  setChessPieces: SetStateAction<any>
) => {
  const pick1 = chessPieces[p1];
  const pick2 = chessPieces[p2];
  //   console.log(p2 - p1, pick1, pick2, "eee");
  if (pick1.piece?.icon == "pawn" && !pick2.piece.icon) {
    if (pick1.piece?.color == "white") {
      if (pick1.piece?.hasFirstStep) {
        if (p2 - p1 == -7 || p2 - p1 == -8 || p2 - p1 == -9) {
          if (p2 - p1 == -8 && !pick2.piece.icon) {
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            setChessPieces(chessPieces);
          } else if (p2 - p1 == -8 && pick2.piece.icon) {
            console.log("blocked");
            alert("blocked");
          } else {
            console.log("invalid");
            alert("invalid");
          }
        } else {
          alert("You can only make one move forward on the second step");
        }
      } else if (!pick1.piece?.hasFirstStep) {
        console.log(pick1, pick2, p2 - p1);
        if (p2 - p1 == -8 || p2 - p1 == -16 || p2 - p1 == -7 || p2 - p1 == -9) {
          switch (p2 - p1) {
            case -7:
            case -9:
              console.log("captured");
              break;
            case -8:
            case -16:
              console.log("moved");
              break;
          }
          if (!chessPieces[p1 - 8].piece.icon) {
            pick1.piece.hasFirstStep = true;
            console.log(pick1.piece.hasFirstStep);
            [pick1.piece, pick2.piece] = [
              chessPieces[p2]?.piece,
              chessPieces[p1]?.piece,
            ];
            setChessPieces(chessPieces);
          }
        }
      }
    } else if (chessPieces[p1].piece.color == "black") {
      if (pick1.piece?.hasFirstStep) {
        if (p2 - p1 == 8) {
          [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
          setChessPieces(chessPieces);
        } else {
          alert("You can only make one move forward on the second step");
        }
      } else if (!pick1.piece.hasFirstStep) {
        if (p2 - p1 == 8 || p2 - p1 == 16) {
          if (!chessPieces[p1 + 8].piece.icon) {
            pick1.piece.hasFirstStep = true;
            [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
            setChessPieces(chessPieces);
          }
        }
      }
    }
  } else if (pick1.piece?.icon == "pawn" && pick2.piece.icon) {
    if (pick1.piece?.color == "black") {
      if (p2 - p1 == 7 || p2 - p1 == 9) {
        pick2.piece = pick1.piece;
        pick1.piece = {};
      }
    } else if (pick1.piece.color == "white") {
      if (p2 - p1 == -7 || p2 - p1 == -9) {
        pick2.piece = pick1.piece;
        pick1.piece = {};
      }
    }
  }
};
export const RookOperation = () => {
  console.log("Rook ops");
};

export const BishopOperation = () => {
  console.log("bishop ops");
};
export const KnightOperation = () => {
  console.log("knight ops");
};
export const QueenOperation = () => {
  console.log("queen ops");
};

export const KingOperation = () => {
  console.log("king ops");
};
