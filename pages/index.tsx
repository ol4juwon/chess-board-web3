import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../src/components/Navbar";
import styles from "../src/styles/Home.module.css";
import SignInButton from "../src/components/SignInButton/SignInButton";
import { wrapper } from "../src/redux/store";
import { useDispatch } from "react-redux";
import Script from "next/script";
import { setUser } from "../src/redux/reducers/authReducers";
import { useEffect } from "react";
// import { resetGame } from "../src/redux/reducers/games/gameReducers";
var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
useEffect(()=> {
  localStorage.clear();
  // dispatch(resetGame());
})
  const isWalletConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("not connected");
    }
    console.log(ethereum);
    try {
      ethereum.enable().then(async (rs: string[]) => {
        let balance = await web3.eth.getBalance(rs[0]);
        console.log(rs, balance, "..");
        // login(rs[0], balance);
        const add = rs[0];
        dispatch(setUser({address: add, balance: 4}));
        router.push("/game");
      });
    } catch (error) {
      console.log("lk", error);
    }
  };
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
    {
      name: "Coinbase wallet",
      title: "Sign in with Coinbase wallet",
      icon: "/metamask_fox.svg",
      bg: "",
      onClick: () => {
        console.log("coinbase");
      },
    },
  ];
  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
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
                  title={opts.title}
                  name={opts.name}
                  icon={opts.icon}
                  bg={opts.bg}
                  onClick={isWalletConnected}
                />
              );
            })}
          </div>
          <div className="w-full flex justify-center underline">
            <a className="mx-auto">Show More Options</a>
          </div>
        </section>
      </main>
      <Script src="https://code.iconify.design/3/3.0.0/iconify.min.js"></Script>
    </div>
  );
}
Home.getInitialProps = wrapper.getInitialPageProps(
  ({ dispatch }) =>
    async () => {
      console.log('first loD')
      //get user
    }
);
