import Head from "next/head";
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useLogin } from "../hooks/useLogin";
import SignInButton from "../components/SignInButton";
var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
export default function Home() {
  const { login } = useLogin();
  const router = useRouter();

  const isWalletConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("not connected");
    }
    console.log(ethereum);
    try {
      ethereum.enable().then(async (rs) => {
        let balance = await web3.eth.getBalance(rs[0]);
        console.log(rs, balance, "..");
        login(rs[0], balance);
       router.push('/game');
      });
    } catch (error) {
      console.log(error);
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
        <link rel="stylesheet" href="../styles/Home.css" />
        <script src="https://code.iconify.design/3/3.0.0/iconify.min.js"></script>
      </Head>

      <main className={styles.main}>
        <Navbar />
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
    </div>
  );
}
