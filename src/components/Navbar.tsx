import React, { FC, useState } from "react";
import styles from "../styles/Navbar.module.css";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import chessPawn from "@iconify/icons-noto/chess-pawn";
import { useSelector } from 'react-redux';
import Link from "next/link";
import { RootState } from "../redux/rootReducer";
interface Props {
  locaction?: any;
}
const Navbar: FC<Props> = ({ locaction }: Props) => {
  const user = useSelector((state:RootState) => state.user);
  console.log("-->",user)
  const isIndex = locaction === 'index';
  const isRoom = locaction === 'room';
  return (
    <div className={styles.nav}>
      <Link href='/'>
      <div className="w-auto flex flex-row items-center justify-center">
        <span
        className={`${
          isRoom ? "text-colors-white " : "text text-colors-black"
        } lg:font-extrabold lg:text-4xl`}
      >
        Chess
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{float:"inline-start",}}
          width="40"
          height="40"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 128 128"
        >
          <path
            fill="#474C50"
            d="M79.05 13.39L49.63 32.88s1 1.42 1.68 2.07c1.42 1.36 2.34 1.81 2.34 1.81l-.58 2l-7.33 4.25s-.26 3.36 3.48 5.3c3.1 1.61 6.19 1.62 6.19 1.62v4.83s3.08 6 9.34 6S74 53.93 74 53.93l.08-4.17s2.82-.28 5.51-1.85c2.04-1.2 2.76-3.16 2.78-4.83c.02-1.42-.11-1.7-.11-1.7l-8.52-4.45s3.79-2.3 5.83-7.5c3.84-9.75-.52-16.04-.52-16.04zM63.32 76.52l-21.21 5.05s-.56.78-.55 1.62c.02 1.41.62 1.74.62 1.74L33.71 95.2s-.99 2.03-.94 4.6c.05 2.46 1.07 3.97 1.21 3.9l-2.75 3.67l-1.75.75s-.95 1.54-.83 3.42c.15 2.32 1.65 4.79 7.5 7.5c6.05 2.81 12.59 5.33 27.76 5.33s26.67-3 31.42-6.33s5.13-6.23 5.21-7.48a5.2 5.2 0 0 0-.55-2.69c-.04-.07-.13-.21-.13-.21l-3.75-4.05s.9-2.23.79-4.6c-.14-2.99-1.65-5.15-1.65-5.15l-8.84-7.67l.08-2s.15-.64-.14-1.71c-.25-.92-.45-1.43-.66-1.75c-.62-.95-1.38-.85-1.38-.85l-20.99-3.36z"
          />
          <path
            fill="#5E6367"
            d="M49.6 32.88s-4.69-5.79-2.69-14.96S57.15 2.84 66.49 4.17s13.09 10.17 13.09 10.17s-.27 11.02-10.36 16.36s-19.62 2.18-19.62 2.18z"
          />
          <path
            fill="#FFFFFE"
            d="M62.66 7.09c2.21 1.26 1.01 2.67-2.33 4.83c-3.1 2.01-6.83 7.92-7.84 9.42s-1.67 1.67-2.17 1.33s-2.08-1.17-.67-5.92s5.17-7.75 7-8.84c1.84-1.07 4.26-1.82 6.01-.82z"
          />
          <path
            fill="#5E6367"
            d="M53.65 36.76s4.71 3.14 9.79 3.2c7.17.07 10.3-3.03 10.3-3.03s3.39-.35 5.81.91c2.12 1.1 2.71 3.56 2.71 3.56s-2.24 5.83-18.56 5.39c-16.33-.44-17.96-3.77-17.96-3.77s-.43-3.43 2.48-5.11c2.44-1.42 5.43-1.15 5.43-1.15z"
          />
          <path
            fill="#AEAEAF"
            d="M50.63 38.49c-1.56-.15-3.95.81-3.66 2.93c.29 2.12 5.13 3.08 7.47 3.22s6.08.44 6-1.76c-.07-2.2-5.71-1.1-7.91-2.27s.37-1.9-1.9-2.12z"
          />
          <path
            fill="#5E6367"
            d="M55.4 54.77s2.99 1.3 9.21 1.3c6.22 0 9.38-2.13 9.38-2.13s-.01 7.04 2.92 14.14c2.93 7.1 5.05 10.54 5.05 10.54s1.91-.13 2.64.46c.73.59 1.44 2.38 1.44 2.38c-.24.33-5.45 5.16-21.1 4.82c-16.69-.36-22.83-4.72-22.83-4.72s.98-1.63 2.1-2c1.35-.45 2.22-.33 2.22-.33s5.01-6.03 7.06-11.96c2.04-5.93 1.91-12.5 1.91-12.5z"
          />
          <path
            fill="#B0B0AF"
            d="M64.25 81.69c6.15 0 11.5-1.24 13.77-1.9s3.99-1.77 5.75-1.18c.99.33 1.37 1.08 1.37 1.08s-6.54 5.5-20.96 4.94c-15.37-.59-21.25-4.11-21.25-4.11s1-1.43 3.25-1.29c.6.04 1.16.21 4.6 1.01s7.46 1.45 13.47 1.45z"
          />
          <path
            fill="#5E6367"
            d="M42.18 84.92s10.13 4.01 22.07 4.17c15.97.21 22.25-4.9 22.25-4.9s3.75 3.44 5.28 5.05s3.47 4.62 3.47 4.62s-6.69 11.05-31.14 10.83c-24.46-.22-30.4-9.49-30.4-9.49s1.29-3.38 3.96-6.18c1.64-1.73 4.51-4.1 4.51-4.1z"
          />
          <path
            fill="#B0B0AF"
            d="M41.99 89.45c-1.82-.49-5.42 3.15-4.98 5.42c.22 1.16.87 2.45 4.39 3.73c3.22 1.17 8.2 1.11 8.2-.81c0-2.49-4.32-2.26-5.42-4.47c-.87-1.74-.29-3.35-2.19-3.87z"
          />
          <path
            fill="#5E6367"
            d="M33.98 103.69s-1.44.98-2.56 2.08c-1.41 1.39-1.94 2.34-1.94 2.34s3.23 11.62 34.27 11.87c30.39.25 36.11-12.33 36.11-12.33s-.99-1.43-2.03-2.47c-1.04-1.04-1.73-1.57-1.73-1.57s-8.81 9.95-32.56 9.69c-22.64-.23-29.56-9.61-29.56-9.61z"
          />
          <path
            fill="#B0B0AF"
            d="M32.42 106.89c-.83.93-.8 2.86 1.65 4.47c2.62 1.72 6.84 4.17 12.89 5.3c6.16 1.15 12.58.8 12.18-1.26c-.27-1.41-5.61.17-15.08-3.58c-5.56-2.2-7.28-3.41-8.41-4.21c-.73-.53-2.03-2.06-3.23-.72zm7.17-10.61c1.93 0 1.93-3 0-3s-1.93 3 0 3z"
          />
        </svg>
        <span
              className={`${
                isRoom ? "text-colors-white " : "text text-colors-black"
              } lg:font-extrabold lg:text-4xl`}
        >
        Games
      </span>
        </div>
      </Link>
     
      {
        !isIndex &&  (<div className={styles.account}>
        <div className={styles.balance}> {user?.balance  } ETH</div>
        <div
          className={`w-1/2 ${
            locaction ? "bg-primary-grey text-colors-white" : "bg-colors-white"
          } rounded-r-md text-center flex items-center justify-center `}
        >
          {user?.address ? `${user.address.substring(0,6)}...` : 'Unk'}
        </div>
      </div>)
      }
 
    </div>
  );
};

export default Navbar;
