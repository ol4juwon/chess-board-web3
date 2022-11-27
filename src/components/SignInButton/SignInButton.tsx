import Image from "next/image";
import React, { FC } from "react";
import { Metamask } from "./Icons";
// import styled from 'styled-components';
import styles from "./SignInButton.module.css";
interface SignInProps {
  name: string;
  icon: any;
  title: string;
  bg?: string;
  onClick?: any;
}

const SignInButton: FC<SignInProps> = ({
  name,
  icon,
  title,
  bg,
  onClick,
}: SignInProps) => {
  return (
    <div
      onClick={onClick}
      className={
        "w-1/2 lg:w-400px rounded-full flex flex-row items-center justify-center px-10 py-4 my-5 mx-auto"
      }
      style={{
        backgroundColor: bg ? "#438FFE" : "transparent",
        border: bg ? "none" : "1px solid black",
      }}
    >
      <Metamask />
      <p className={styles._heading} style={{ color: bg ? "white" : "black" }}>
        {title}
      </p>
    </div>
  );
};
export default SignInButton;
