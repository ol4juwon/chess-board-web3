import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import styled from 'styled-components';
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
display: none;
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
            <h1 className={styles.head}>Chess <i className="fas fa-chess-bishop "></i> Games</h1>
            <button
                // className={"p-2 text-gray-700 rounded-md  outline-none focus:border-gray-400 focus:border"}
                className={styles._navButton}
                onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
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