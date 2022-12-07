import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CreateRoom from "../src/components/game/createButton/CreateRoom";
import DateButton from "../src/components/game/dateButton/DateButton";
import GameTables from "../src/components/GameTables";
import Navbar from "../src/components/Navbar/Navbar";
import styles from "../src/styles/games.module.css";
import { useDispatch, useSelector } from "react-redux";
import CreateGameModal from "../src/components/game/CreateGameModal";
import { addGame } from "../src/redux/reducers/games/gamesByIdSlice";
import { addGameId } from "../src/redux/reducers/games/allGamesSlice";
import { LineWave } from 'react-loader-spinner';
import { RootState } from "../src/redux/store";

const Game = () => {
  const game = useSelector((state:RootState) => state.game);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const user = useSelector((state:RootState) => state.user);
  // useEffect(() => {
  //   setIsLoading(true)
  //   if (user.address === '' || !user.address) {

        
  //     router.push('/');
  //     setIsLoading(false);
  //   }

  //   setTimeout(()=>     setIsLoading(false), 2000)
  // },[] );
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
        id: new Date().getTime(),
        ended: false,
        limit: 2,
        currency,
        entryFee: entryFee,
        privacy,
        created_on: creta,
      };
      console.log("adding 55" , data )

      dispatch(addGame(data));
      dispatch(addGameId(data))
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
        <title>Chess: Games</title>
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
      <main className={`${show ? "blur-sm" : ""} w-full md:w-full px-4 md:px-20 mx-auto`}>
        <Navbar />
        {isLoading ? <div className="w-full flex h-1/3 justify-center items-center">
          <LineWave
                wrapperStyle={{
                  height: '100',
                  display: 'flex',
                  alignItems: 'center',
                  justifySelf: 'top'
                }}
                wrapperClass="linewave"
                visible={true}
                firstLineColor="blue"
                middleLineColor="white"
                lastLineColor="cyan"
              />
        </div> :
        (
          <section className={'w-full md:w-full '}>
        <div className="w-full flex mx-auto justify-end  sm:mx-auto ">
          <DateButton />
          <CreateRoom show={show} setShow={setShow} />
        </div>
        <div className="w-full  mx-auto  justify-start ">
          <div className={styles.tabHeader}>
            <div
              onClick={() => {
                setAvailable(!available);
              }}
              className={`
                ${
                  available ? "border-b-2 border-solid border-colors-black" : ""
                } text-normal text-center
              `}
              style={{fontFamily: 'Gilroy'}}
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
        </section>
        )
        }
        
        
      </main>
      {show && (
        <CreateGameModal
          show={show}
          setShow={setShow}
          addGames={addGames}
          entryFee={entryFee}
          setCurrency={setCurrency}
          currency={currency}
          setPrivacy={setPrivacy}
          privacy={privacy}
          setEntryFee={setEntryFee}
        />
      )}
    </div>
  );
};

export default Game;
