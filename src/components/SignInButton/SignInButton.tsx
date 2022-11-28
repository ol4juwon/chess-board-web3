import React, { FC } from "react";
import { Metamask } from "./Icons";
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
        "w-320 text-sm md:text-md flex flex-row md:px-10 md:py-2 rounded-full items-center justify-center md:justify-start my-5 md:w-400px mx-auto"
      }
      style={{
        backgroundColor: bg ? "#438FFE" : "transparent",
        border: bg ? "none" : "1px solid black",
      }}
    >
      <div className="w-1/4 py-2 ">
        <Metamask />
      </div>
      <div className="py-2 w-3/4">
        <p
          className="text-center mx-auto"
          style={{ color: bg ? "white" : "black" }}
        >
          {title}
        </p>{" "}
      </div>
    </div>
  );
};
export default SignInButton;
