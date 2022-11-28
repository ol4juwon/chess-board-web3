import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import LoungeButton from "./game/LoungeButton";
import {useSelector } from 'react-redux';
import EmptyState from "./game/EmptyState";
import { RootState } from "../redux/rootReducer";
import { Games } from "../redux/types";


interface Props {
  goto: any;
  games?: Games[];
  available: boolean;
}
const GameTables: FC<Props> = ({ goto, available }: Props) => {
  const gamesId = useSelector((state:RootState) => state.game.allIds);
  const games = useSelector((state:RootState) => state.game.byId);
  const [availGames, setAvailGames] = useState<Games[]>();
  const [endedGames, setEndedGames] = useState<Games[]>();
  useEffect(() => {
    if(games && Object.entries(gamesId).length > 0 ){
      const AllGames : Games[] = [];
     Object.entries(gamesId).map((game) => {
      AllGames.push(games[game[1]]);
     })


    const filteredAvail = AllGames.filter((game) => {
      return !game.ended
    })
    setAvailGames(filteredAvail);
    const filteredUnavail =AllGames.filter((game)=> {
      return game.ended
    })
    setEndedGames(filteredUnavail);
}
  }, [games,gamesId]);
  return (
    <div className="lg:px-10 px-2">
      <div className="w-full flex flex-col lg:flex-row ">
        <div className="w-full pt-10 static  grid grid-cols-5 lg:gap-0.5 text-sm  lg:w-4/6">
          {available
            ? availGames &&
              availGames.length > 0 && (
                <>
                  <div>GameId</div>
                  <div>Limit</div>
                  <div>Entry fee</div>
                  <div>No. of players</div>
                  <div>Date Created</div>
                </>
              )
            : endedGames &&
              endedGames.length > 0 && (
                <>
                  <div>GameId</div>
                  <div>Limit</div>
                  <div>Winner</div>
                  <div>Amount Won</div>
                  <div>Date Ended</div>
                </>
              )}
        </div>
        <div className="w-full hidden lg:hidden bg-light-pink p-2 lg:w-2/6"></div>
      </div>
      <div className="h-260px md:h-400px overflow-scroll">
      {available ? (
        availGames && availGames.length > 0 ? (
          availGames.map((game,index) => {
            return (
              <div
                key={game.id}
                className="w-full flex my-5 flex-col border-b-mt-grey border-b-1 pb-4 lg:flex-row "
              >
                <div className="w-full  grid grid-cols-5 gap-x-0.5 lg:gap-0.5 lg:p-1 lg:w-4/6">
                  <div>{index+1}</div>
                  <div>{game.limit}</div>
                  <div>
                    {game.entryFee
                      ? `${game.entryFee}${game.currency}`
                      : "0.23ETH"}
                  </div>
                  <div>{game.limit}</div>
                  <div className="break-words">{game.created_on}</div>
                </div>
                <div className="w-full my-1 flex justify-around lg:w-2/6">
                  <Link href={`/room/${game.id}/1`}>
                    <LoungeButton
                      enabled
                      type="enter"
                      onClick={goto(game.id, "1")}
                    />
                  </Link>
                  <Link href={`/room/${game.id}/2`}>
                    <LoungeButton
                      enabled
                      type="spectate"
                      onClick={goto(game.id, "2")}
                    />
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
       <EmptyState/>
        )
      ) : endedGames && endedGames.length > 0 ? (
        endedGames.map((game,index) => {
          return (
            <div
              key={game.id}
              className="w-full flex my-5 flex-col border-b-light-gret border-b-1 pb-4 lg:flex-row "
            >
              <div className="w-full  grid grid-cols-5 gap-x-0.5 lg:gap-0.5 lg:p-1 lg:w-4/6">
                <div>{index+1}</div>
                <div>{game.limit}</div>
                <div>
                  {game.entryFee
                    ? `${game.entryFee}${game.currency}`
                    : "0.23ETH"}
                </div>
                <div>{game.limit}</div>
                <div className="break-words">{game.created_on}</div>
              </div>
              <div className="w-full my-1 flex justify-around lg:w-2/6">
                <LoungeButton
                  type="enter"
                  enabled={false}
                  onClick={goto(game.id, "join")}
                />
                <Link href={`/room/${game.id}/2`}>
                  <LoungeButton
                    enabled
                    type="spectate"
                    onClick={goto(game.id, "spectate")}
                  />
                </Link>
              </div>
            </div>
          );
          //    }
        })
      ) : (
      <EmptyState />
      )}</div>
    </div>
  );
};

export default GameTables;
