import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/authReducers";
import { Metamask } from "./Icons";
import { LineWave } from "react-loader-spinner";

var Web3 = require("web3");
var web3 = new Web3(
  Web3.givenProvider || "ws://some.local-or-remote.node:8546"
);
interface SignInProps {
  name: string;
  icon: any;
  title: string;
  bg?: string;
}

const SignInButton: FC<SignInProps> = ({
  name,
  icon,
  title,
  bg,
}: SignInProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const isWalletConnected = async () => {
    setIsLoading(true);
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please connect to metamask");
      setIsLoading(false);
      return;
    }
    console.log(ethereum);
    try {
      ethereum.enable().then(async (rs: string[]) => {
        let balance = await web3.eth.getBalance(rs[0]);
        dispatch(setUser({ address: rs[0], balance }));
        router.push("/game");
        setTimeout(() => setIsLoading(false), 2000);
      });
    } catch (error) {
      console.log("lk", error);
    }
  };
  return (
    <div
      onClick={
        isLoading
          ? () => alert("Wait while we connect you!")
          : isWalletConnected
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
              justifyContent: 'center',
              justifySelf: "top",
              borderWidth: '2',
              borderColor: 'red',
              borderStyle: 'solid'
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
