import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../src/components/Navbar/Navbar";
import styles from "../src/styles/Home.module.css";
import SignInButton from "../src/components/SignInButton/SignInButton";
import { useDispatch, useSelector } from "react-redux";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { RootState } from "../src/redux/rootReducer";
import { resetUser } from "../src/redux/reducers/authReducers";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [walletConnected, setWalletConnected] = useState(false);
const user = useSelector((state: RootState) => state.user);
useEffect(()=> {
  localStorage.clear();
})

  const signInOptions = [
    {
      name: "Metamask",
      title: "Sign in with Metamask",
      icon: "/metamask_fox.svg",
      bg: "#438FFE",
      onClick: () => {
        console.log("metamask");
      },
    },
    // {
    //   name: "Coinbase wallet",
    //   title: "Sign in with Coinbase wallet",
    //   icon: "/metamask_fox.svg",
    //   bg: "",
    //   onClick: () => {
    //     console.log("coinbase");
    //   },
    // },
  ];


  useEffect(()=> {
    dispatch(resetUser());
  },[])
  return (
    <div>
      <Head>
        <title>Chess</title>
        <meta name="description" content="Chess app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full lg:w-11/12 mx-auto'>
        <Navbar locaction="index" />
        <section className={styles.container}>
          <h1 className={styles.heading}>Welcome to Chess Games</h1>

          <p className={styles.tagLine}>
            Sign in with your wallet to be able to authenticate and play games
          </p>
          <div className="my-12 mx-auto">
            {signInOptions.map((opts) => {
              return (
                <SignInButton
                  key={opts.name}
                  walletConnected={walletConnected}
                  setWalletConnected={setWalletConnected}
                  title={opts.title}
                  name={opts.name}
                  icon={opts.icon}
                  bg={opts.bg}
                />
              );
            })}
          </div>
          <div className="w-full flex justify-center underline">
            <a className="mx-auto">Show more options</a>
          </div>
        </section>
      </main>
      <Script src="https://code.iconify.design/3/3.0.0/iconify.min.js"></Script>
    </div>
  );
}
