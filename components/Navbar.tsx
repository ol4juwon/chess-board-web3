import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import chessPawn from '@iconify/icons-noto/chess-pawn';
// const Button = styled.nav`

//     display: none;
// @media screen and (max-width: 640px) {

//         display: block;
// }
// `
const Account = styled.div`
width: 200px;
height: 60px;
border-radius: 10px;
display: flex;
@media screen and (max-width: 640px) {
// display: none;
}
`
const Balance = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px 0 0 10px;
color: white;
background: #438FFE;
`

const Brand = styled.div`
padding: 10px;
lineheight: 40px;
color: #000;
`
const Address = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0 10px 10px 0 ;
color: black;
background: white;
`
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className={styles.nav}>
            <h1 className={styles.head}>Chess <span className='noto-chess-board' ></span> Games</h1>
            <div className={styles.account}>
                <div className={styles.balance}>
                    0.04ETH
                </div>
                <div className={styles.address}>
                    0xffdees
                </div>
            </div>
        </div>
    )
}

export default Navbar