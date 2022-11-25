import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import CreateRoom from '../components/game/createButton/CreateRoom'
import DateButton from '../components/game/dateButton/DateButton'
import GameTables, { Games } from '../components/GameTables'
import Navbar from '../components/Navbar'
import styles from '../styles/games.module.css';
import { useAddGame } from '../hooks/useAddGame';
import { useGameContext } from '../hooks/useGameContext'
type AddGameType = {
    currency: string;
    entryFee: number;
    privacy: string;
}
const Game = () => {
    const {game} = useGameContext();
    const { error, loading, addGame } = useAddGame();
    const [available, setAvailable] = useState(true);
    const [show, setShow] = useState(false);
    const router = useRouter();
    const [games, setGames] = useState(game);
    const [currency, setCurrency] = useState('ETH');
    const [privacy, setPrivacy] = useState('public')
    const [entryFee, setEntryFee] = useState(0.05);

    const startGame = (id: string, type: string) => {

        // router.push(`/room/${id}/${type}`)
    }


    const addGames = () => {
        try {
            const creta = `${new Date(Date.now()).getDay()}/${new Date(Date.now()).getMonth()}/${new Date(Date.now()).getUTCFullYear()}`;
            console.log('ee', creta)
            const data = { id: games.length + 1, ended: false, limit: 2, currency, entryFee: entryFee, privacy, created_on: creta };
            // setGames(prevGame => [...prevGame, data]);
              console.log(typeof games, games)
            setGames(prevGame => [...prevGame, data])
            addGame(games);
          
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
        console.log(currency)
    }, [currency])
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
            <main className={show ? 'blur-sm' : ''}>
                <Navbar />
                <div className='w-full flex mx-auto justify-end sm:w-11/12 sm:mx-auto xs:w-11/12' >
                    <DateButton />
                    <CreateRoom show={show} setShow={setShow} />

                </div>
                <div className='  mx-auto w-4/5 justify-start sm:w-11/12 xs:w-11/12' >

                    <div className={styles.tabHeader}><div onClick={() => { setAvailable(!available) }} className={available ? 'border-b-2 border-solid border-colors-black' : ''}>Available Games</div> <div onClick={() => { setAvailable(!available) }} className={!available ? 'b border-b-2 border-solid border-colors-black' : ''}>Unavailable Games</div></div>
                    <div className='bg-colors-white'>
                        <GameTables goto={startGame} games={games} available={available}/>
                    </div>
                </div>



            </main>
            {show && <div className={`flex  justify-center  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-mofa `}>
                <div className=' p-10 w-300px lg:w-500px shadow-md  bg-colors-white'>
                    <div>
                        <h2 className='my-2 font-extrabold text-md'> Create New Room</h2>
                        <form>
                            <div className='my-3'>
                                <label >
                                    <span>Entry Fee</span>
                                    <div className='w-full border-mt-grey border-1 p-2 px-5 rounded-md'>
                                        <input type='num' value={entryFee} onChange={(e) => { setEntryFee(e.target.value) }} className='w-4/5' />
                                        <select value={currency} onChange={(e) => setCurrency(e.target.value)} className='w-1/5'>
                                            <option value='ETH'>
                                                ETH
                                            </option>
                                            <option value='BSD'>
                                                BUSD
                                            </option>
                                            <option value='BTC'>
                                                BTC
                                            </option>
                                        </select>
                                    </div>

                                </label></div>
                            <div className='my-3'>
                                <label>
                                    <span>
                                        Room Privacy
                                    </span>
                                    <div className='w-full p-2 rounded-md px-5 border-mt-grey border-1'>
                                        <select value={privacy} onChange={(e) => { setPrivacy(e.target.value) }} className='w-full '>
                                            <option value='public'>
                                                Public
                                            </option>
                                            <option value="private">
                                                Private
                                            </option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                            <div className='w-full my-3 flex text-xs justify-end'>
                                <button onClick={() => setShow(!show)} className='mx-2 w-20 p-2 border-colors-black border-solid border-1 rounded-lg'>Cancel</button>
                                <button onClick={addGames} className='p-2 bg-primary-btn w-20 rounded-lg text-colors-white' type="button" aria-label='save' name="save">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Game