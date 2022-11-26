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

 const SignInButton: FC<SignInProps> = ({name, icon, title, bg, onClick}: SignInProps) => {
  return <div onClick={onClick} className={styles.button_container} style={{backgroundColor: bg? '#438FFE' : 'transparent', border: bg ? 'none': '1px solid black'}}>
     <Image className={styles._img} src="/metamask_fox.svg" alt="Vercel Logo" width={30} height={30} />
     <p className={styles._heading}  style={{color: bg? 'white': 'black'}}>{title}</p>
  </div>
}
export default SignInButton;
