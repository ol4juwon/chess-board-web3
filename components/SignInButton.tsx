import Image from 'next/image';
import React, { FC } from 'react'
// import styled from 'styled-components';
import styles from './SignInButton.module.css';
interface SignInProps  {
name: string;
icon: any;
title: string;
bg?: string;
onClick?: any;
}
// const Container = styled.div<{bg: string}>`
// margin: 10px auto;
// max-width: 420px;
// width: 80%;
// height: 50px;
// display: flex;
// color: ${(props) => (props.bg ? 'white' : 'black')};
// flex-direction: row;
// justify-content: start;
// padding: 15px;
// border: ${(props) => (props.bg ? 'none' : '1px solid black')};
// background:  ${(props) => (props.bg ? props.bg : 'transparent')};
// border-radius: 100px;
// // @media screen and (max-width: 360px) {
// //     width: 80%;
// // margin: 5px 5px;
// // font-size: 10px;
// // padding: 10px;
// // // p{
// // //     width: 100%;
// // //     text-align: center;
// // //     border: 1px solid red;
// // // }
// // }
// p{
//     width: 100%;
//     display: flex;
//     flex-direction: row;
//     // text-align: center;
//     justify-content: center;
//     align-items: center;
//     margin: 0 5px;
//     // vertical-align: center;
// }
// `
 const SignInButton: FC<SignInProps> = ({name, icon, title, bg, onClick}: SignInProps) => {
  return <div className={styles.button_container} style={{backgroundColor: bg? '#438FFE' : 'transparent', border: bg? '': '1px solid black'}}>
     <Image className={styles._img} src="/metamask_fox.svg" alt="Vercel Logo" width={30} height={30} />
     <p className={styles._heading} style={{color: bg? 'white': 'black'}}>{title}</p>
  </div>
}
export default SignInButton;
