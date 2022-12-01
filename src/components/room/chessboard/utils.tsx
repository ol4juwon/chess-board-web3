import { METHODS } from "http";
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
  console.log(Math.abs(p1-p2) / 8)
  if(Math.abs(p1-p2) % 8 == 0 && (Math.abs(p1-p2) / 8) < 3){
    if(pick1.piece.hasFirstStep && ((Math.abs(p1-p2) / 8) > 1)){
console.log('overdo')
    }
  } else if((Math.abs(p1-p2) /7 ==1 || Math.abs(p1-p2) /9 == 1) && (Math.abs(p1-p2) / 7 == 1 || (Math.abs(p1-p2) / 9 == 1))){
      
  }
  // if (pick1.piece?.icon == "pawn" && !pick2.piece.icon) {
  //   if (pick1.piece?.color == "white") {
  //     if (pick1.piece?.hasFirstStep) {
  //       if (p2 - p1 == -7 || p2 - p1 == -8 || p2 - p1 == -9) {
  //         if (p2 - p1 == -8 && !pick2.piece.icon) {
  //           [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
  //           setChessPieces(chessPieces);
  //         } else if (p2 - p1 == -8 && pick2.piece.icon) {
  //           console.log("blocked");
  //           alert("blocked");
  //         } else {
  //           console.log("invalid");
  //           alert("invalid");
  //         }
  //       } else {
  //         alert("You can only make one move forward on the second step");
  //       }
  //     } else if (!pick1.piece?.hasFirstStep) {
  //       console.log(pick1, pick2, p2 - p1);
  //       if (p2 - p1 == -8 || p2 - p1 == -16 || p2 - p1 == -7 || p2 - p1 == -9) {
  //         switch (p2 - p1) {
  //           case -7:
  //           case -9:
  //             console.log("captured");
  //             break;
  //           case -8:
  //           case -16:
  //             console.log("moved");
  //             break;
  //         }
  //         if (!chessPieces[p1 - 8].piece.icon) {
  //           pick1.piece.hasFirstStep = true;
  //           console.log(pick1.piece.hasFirstStep);
  //           [pick1.piece, pick2.piece] = [
  //             chessPieces[p2]?.piece,
  //             chessPieces[p1]?.piece,
  //           ];
  //           setChessPieces(chessPieces);
  //         }
  //       }
  //     }
  //   } else if (chessPieces[p1].piece.color == "black") {
  //     if (pick1.piece?.hasFirstStep) {
  //       if (p2 - p1 == 8) {
  //         [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
  //         setChessPieces(chessPieces);
  //       } else {
  //         alert("You can only make one move forward on the second step");
  //       }
  //     } else if (!pick1.piece.hasFirstStep) {
  //       if (p2 - p1 == 8 || p2 - p1 == 16) {
  //         if (!chessPieces[p1 + 8].piece.icon) {
  //           pick1.piece.hasFirstStep = true;
  //           [pick1.piece, pick2.piece] = [pick2.piece, pick1.piece];
  //           setChessPieces(chessPieces);
  //         }
  //       }
  //     }
  //   }
  // } else if (pick1.piece?.icon == "pawn" && pick2.piece.icon) {
  //   if (pick1.piece?.color == "black") {
  //     if (p2 - p1 == 7 || p2 - p1 == 9) {
  //       pick2.piece = pick1.piece;
  //       pick1.piece = {};
  //     }
  //   } else if (pick1.piece.color == "white") {
  //     if (p2 - p1 == -7 || p2 - p1 == -9) {
  //       pick2.piece = pick1.piece;
  //       pick1.piece = {};
  //     }
  //   }
  // }
};
export const RookOperation = () => {
  console.log("Rook ops");
};

export const BishopOperation = (chessPieces: any[], p1: number, p2: number) => {
  console.log("bishop ops");
  const pick1 = chessPieces[p1];
  const pick2 = chessPieces[p2];
  if (Math.abs(p1 - p2) %7 == 0 || Math.abs(p1-p2) %9 == 0) {
        switch(Math.abs(p1-p2) / 7){
          case 1:
            if (pick2.piece.icon) {
              if(pick2.piece.color != pick1.piece.color){
                console.log("moving right");
                [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
              }
              

          console.log("opponent", p1 - p2);
        } else if (!pick2.piece.icon) {

              [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
              console.log("moving right");
          console.log("no opponent", p1 - p2);
        }
        break;
        case 2:
          console.log("moving right two steps");
          if(!chessPieces[p1 + 7].piece.icon || !chessPieces[p1-7].piece.icon){
            if (pick2.piece.icon) {
              if(pick2.piece.color != pick1.piece.color){
               
                [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
              }
        } else if (!pick2.piece.icon) {

              [[pick1.piece], [pick2.piece]] = [[pick2.piece], [pick1.piece]];
        }
          }
          case 3:
            case 4:
              case 5:
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
