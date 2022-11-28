import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import Chessboard from "../../src/components/room/chessboard/Chessboard";
import Navbar from "../../src/components/Navbar/Navbar";
import PlayerTag from "../../src/components/room/common/PlayerTag";
import Timer from "../../src/components/room/common/Timer";
import styles from "../../src/styles/Room.module.css";
import { withRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../src/redux/rootReducer";

const Room: FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user.address === "" || !user.address) {
      router.push("/");
    }
  }, []);
  const { roomId } = router.query;
  const spectating = Object(roomId)[1] === "2";
  const goBack = () => {
    router.push("/game");
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
      <main className={"h-screen md:h-auto w-full lg:w-full bg-colors-black"}>
        <section className="h-full w-screen md:px-20 px-4 flex flex-col justify-start items-center">
          <Navbar locaction="room" />

          <div className="w-full relative h-full flex-col mx-auto text-colors-white">
            <div className="w-full md:absolute md:top-6 md:left-4 flex flex-row items-center">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              <span onClick={()=> {router.back()}}>go back</span>
            </div>

            <div className="w-full flex flex-col justify-between items-center ">
              {spectating && (
                <div className="w-full lg:w-660px py-6 font-Gilroy font-bold text-2xl flex flex-row justify-center items-center">
                  Spectating
                </div>
              )}
              {/* <div className="w-auto flex flex-row justify-center max-w-7xl"> */}
              <div className="md:w-660px w-full flex justify-between">
                <PlayerTag />
                <Timer />
              </div>
              {/* </div>  */}

              <Chessboard />
              <div className="md:w-660px w-full flex justify-between">
                <PlayerTag />
                <Timer />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default withRouter(Room);
