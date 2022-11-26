import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateRoom from "../src/components/game/createButton/CreateRoom";
import DateButton from "../src/components/game/dateButton/DateButton";
import GameTables, { Games } from "../src/components/GameTables";
import Navbar from "../src/components/Navbar";
import styles from "../src/styles/games.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addGame } from "../src/redux/actions/game";
import CreateGameModal from "../src/components/game/CreateGameModal";
// type AddGameType = {
//   currency: string;
//   entryFee: number;
//   privacy: string;
// };
const Game = () => {
  const game = useSelector((state: any) => state.games.games);
  const router = useRouter();
  const user = useSelector((state:any) => state.auth);
  useEffect(() => {
    if (!user?.isAuthenticated) {
      router.back();
    }
  }, [user]);
  const [available, setAvailable] = useState(true);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState("ETH");
  const [privacy, setPrivacy] = useState("public");
  const [entryFee, setEntryFee] = useState(0.05);

  const startGame = (id: string, type: string) => {
    // router.push(`/room/${id}/${type}`)
  };

  const addGames = () => {
    try {
      const creta = `${new Date(Date.now()).getDay()}/${new Date(
        Date.now()
      ).getMonth()}/${new Date(Date.now()).getUTCFullYear()}`;
      const data = {
        id: game ? game.length + 1 : 1,
        ended: false,
        limit: 2,
        currency,
        entryFee: entryFee,
        privacy,
        created_on: creta,
      };
      const payload = [...game, data];
      dispatch(addGame(payload));
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log(currency);
  }, [currency]);
  return (
    <div>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Chess app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main className={show ? "blur-sm" : ""}>
        <Navbar />
        <div className="w-full flex mx-auto justify-end sm:w-11/12 sm:mx-auto xs:w-11/12">
          <DateButton />
          <CreateRoom show={show} setShow={setShow} />
        </div>
        <div className="  mx-auto w-4/5 justify-start sm:w-11/12 xs:w-11/12">
          <div className={styles.tabHeader}>
            <div
              onClick={() => {
                setAvailable(!available);
              }}
              className={`
                ${
                  available ? "border-b-2 border-solid border-colors-black" : ""
                } text-bold text-center
              `}
            >
              Available Games
            </div>{" "}
            <div
              onClick={() => {
                setAvailable(!available);
              }}
              className={`
                ${
                  !available
                    ? "b border-b-2 border-solid border-colors-black"
                    : ""
                } text-center`}
            >
              Unavailable Games
            </div>
          </div>
          <div className="bg-colors-white">
            <GameTables goto={startGame} available={available} />
          </div>
        </div>
      </main>
      {show && (
        <CreateGameModal
          show={show}
          setShow={setShow}
          addGames={addGames}
          entryFee={entryFee}
          currency={currency}
          privacy={privacy}
        />
      )}
    </div>
  );
};

export default Game;
