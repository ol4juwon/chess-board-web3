import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import Chessboard from "../../src/components/room/chessboard/Chessboard";
import Navbar from "../../src/components/Navbar";
import PlayerTag from "../../src/components/room/common/PlayerTag";
import Timer from "../../src/components/room/common/Timer";
import styles from "../../src/styles/Room.module.css";
import { withRouter } from 'next/router';
import { useSelector } from 'react-redux';
interface Props {
  spectating: boolean;
  roomId: string;
  players: string;
  hasEnded?: boolean;
}
const Room: FC = () => {
  const router = useRouter();

  const user = useSelector((state:any) => state.auth);
  if(!user?.isAuthenticated){
      // router.back()
  }
  useEffect(()=>{
      if(!user?.isAuthenticated){
          router.back()
      }  
  })
  const { roomId } = router.query;
  const spectating = Object(roomId)[1] === "2";
  const goBack = () => {
    router.push('/game');
  };
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
      <main className={styles.body}>
        <Navbar locaction="room" />
        <div className={styles.board}>
          <div
            className="w-full flex lg:flex-row  text-center justify-between lg:align-top"
            onClick={goBack}
          >
            <div><span className="w-auto flex flex-row justify-start items-center text-center ">
              <i className="fa fa-angle-left p-1" aria-hidden="true"></i>{" "}
              <span>Go Back</span>
            </span></div>
            
            {spectating && (
              <div className="lg:w-3/4 w-3/4 mx-auto flex flex-row mb-12 justify-center lg:text-2xl text-xl font-extrabold">
                SPECTATING
              </div>
            )}
          </div>
          <div className="w-full">
           
            <div className="w-320px md:w-320px mx-auto flex lg:w-640px">
              <div className=" w-1/2 flex justify-start">
                <PlayerTag name="andy" />
              </div>
              <div className=" w-1/2 flex justify-end">
                <Timer />
              </div>
            </div>
            <div className="w-320px mx-auto lg:w-640px ">
              <Chessboard />
            </div>

            <div className="w-320px mx-auto flex lg:w-640px">
              <div className=" w-1/2 flex justify-start">
                <PlayerTag name="me" />
              </div>
              <div className=" w-1/2 flex justify-end">
                <Timer />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default withRouter(Room);
