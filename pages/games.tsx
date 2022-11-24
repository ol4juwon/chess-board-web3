import Head from 'next/head'
import React from 'react'
import CreateRoom from '../components/CreateRoom'
import DateButton from '../components/DateButton'
import Navbar from '../components/Navbar'
import styles from '../styles/games.module.css';
const Games = () => {
    return (
        <div>
            <Head>
                <title>Chess</title>
                <meta name="description" content="Chess app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>
            <Navbar />
            <div className=' flex justify-end sm:w-full sm:mx-auto' >
                <DateButton />
                <CreateRoom />

            </div>
            <div className=''>
                <div className={styles.tabHeader}><div>Available Games</div> <div>Unavailable Games</div></div>
            </div>

        </div>
    )
}

export default Games