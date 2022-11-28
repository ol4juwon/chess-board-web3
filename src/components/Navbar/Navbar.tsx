import React, { FC } from "react";
import styles from "../../styles/Navbar.module.css";
import { useSelector } from 'react-redux';
import Link from "next/link";
import { RootState } from "../../redux/rootReducer";
import { Bishop } from "./Bishop";
interface Props {
  locaction?: any;
}
const Navbar: FC<Props> = ({ locaction }: Props) => {
  const user = useSelector((state:RootState) => state.user);
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
        <Bishop fontSize="large" style={{width: '400px'}} />
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
          {user?.address ? `${user.address.substring(0,6)}` : 'Unk'}
        </div>
      </div>)
      }
 
    </div>
  );
};

export default Navbar;
