import { useRouter } from "next/router";
// import { useWeb3Modal, Web3Button, Web3Modal } from '@web3modal/react'
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/authReducers";
import { Metamask } from "./Icons";
import { providers, Contract, BigNumber, ethers } from "ethers";
import WalletLink from "walletlink";

import { LineWave } from "react-loader-spinner";
import Web3Modal from "web3modal";
import useWeb3modal from 'web3modal';
import web3Button from 'web3modal';

var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
interface SignInProps {
  walletConnected: boolean;
  setWalletConnected: any;
  name: string;
  icon: any;
  title: string;
  bg?: string;
}
const providerOptions = {
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "metamask",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Metamask", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_: any, options: any) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};
let web3Modal: Web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}
const SignInButton: FC<SignInProps> = ({
  walletConnected,
  setWalletConnected,
  title,
  bg,
}: SignInProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!walletConnected) {
      connectWallet();
    }
  }, [walletConnected]);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Rinkeby network, let them know and throw an error
    const x = await web3Provider.getNetwork();
    console.log("chain ids", x, provider.state);
    if (x.chainId !== 5) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }
    const signer = web3Provider.getSigner();
    return { web3Provider, signer };
  };

  const connectWallet = async () => {
    try {
      // setIsLoading(true)
      await getProviderOrSigner();
      const { signer } = await getProviderOrSigner(true);
      // BigNumber.({DECIMAL_PLACES: 5})
      const u = await signer.getBalance();
      const account = await signer.getAddress();
      const n = ethers.utils.formatEther(u);
      dispatch(setUser({ address: account, balance: n }));

      setWalletConnected(true);
      setIsLoading(false);
      router.push("/game");
    } catch (err) {
      setIsLoading(false)
      console.error(err);
    }
  };

  return (
    <div
      onClick={
        isLoading ? () => alert("Wait while we connect you!") : connectWallet
      }
      className={
        "w-300px text-sm md:text-md flex flex-row md:px-10 md:py-2 rounded-full items-center justify-center md:justify-start my-5 md:w-400px mx-auto"
      }
      style={{
        backgroundColor: bg ? "#438FFE" : "transparent",
        border: bg ? "none" : "1px solid black",
      }}
    >
      {isLoading ? (
        <div className="py-2 h-11 w-4/5 mx-auto">
          {" "}
          <LineWave
            wrapperStyle={{
              height: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifySelf: "top",
              borderWidth: "2",
              borderColor: "red",
              borderStyle: "solid",
            }}
            wrapperClass="linewave"
            visible={true}
            firstLineColor="blue"
            middleLineColor="white"
            lastLineColor="cyan"
          />
        </div>
      ) : (
        <>
          <div className="w-1/4 py-2 ">
            <Metamask />
          </div>
          <div className="py-2 w-4/5">
            <p
              className="text-center mx-auto"
              style={{ color: bg ? "white" : "black" }}
            >
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default SignInButton;
