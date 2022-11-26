import React from 'react'
import styles from './chess.module.css';
const Chessboard = () => {
  return (
             <div className='w-full mx-auto'>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-rook"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas black-items  fa-chess-knight"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-bishop"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-queen"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas black-items  fa-chess-king"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-bishop"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-knight"></i><i></i></div></div>
                <div className={styles.black}><div><i className='h-full text-text-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>h</i><i className=" px-0.5 fas fa-chess-rook black-items flex justify-center items-center w-8/10"></i><i className='num-tag text-off-bron'>8</i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.black}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i></i></div></div>
                <div className={styles.white}><div className='flex flex-row items-center justify-between'><i></i><i className="fas  black-items fa-chess-pawn"></i><i className='num-tag text-text-bron'>7</i></div> </div>

                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}><div><i className='h-full text-text-bron items-end text-xs lg:text-sm align-bottom pl-1 pb-1 invisible'>d</i><i className=" px-0.5 fas text-colors-white fa-chess-pawn  invisible justify-center items-center w-8/10"></i><i className='num-tag text-off-bron'>6</i></div></div>

                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}><div><i className='h-full text-text-bron items-end text-xs lg:text-sm align-bottom pl-1 pb-1 invisible'>d</i><i className=" px-0.5 fas text-colors-white fa-chess-pawn  invisible justify-center items-center w-8/10"></i><i className='num-tag text-text-bron'>5</i></div></div>

                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}><div><i className='h-full text-text-bron items-end text-xs lg:text-sm align-bottom pl-1 pb-1 invisible'>d</i><i className=" px-0.5 fas text-colors-white fa-chess-pawn  invisible justify-center items-center w-8/10"></i><i className='num-tag text-off-bron'>4</i></div></div>

                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}><div><i className='h-full text-text-bron items-end text-xs lg:text-sm align-bottom pl-1 pb-1 invisible'>d</i><i className=" px-0.5 fas text-colors-white fa-chess-pawn  invisible justify-center items-center w-8/10"></i><i className='num-tag text-text-bron'>3</i></div></div>
                <div className={styles.white}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.black}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.white}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.black}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.white}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.black}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.white}><i className="fas fa-chess-pawn"></i></div>
                <div className={styles.black}><div><i className='h-full text-text-bron items-end text-xs lg:text-sm align-bottom pl-1 pb-1 invisible'>f</i><i className=" px-0.5 fas text-colors-white fa-chess-pawn  flex justify-center items-center w-8/10"></i><i className='num-tag text-off-bron'>2</i></div></div>
                <div className={styles.black}><div><i className='h-full text-off-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>a</i><i className=" px-0.5 fas text-colors-white fa-chess-rook flex justify-center  items-center w-8/10"></i><i></i></div></div>
                <div className={styles.white}><div><i className='h-full text-text-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>b</i><i className=" px-0.5 fas text-colors-white fa-chess-knight flex justify-center  items-center w-8/10"></i><i></i></div></div>
                <div className={styles.black}><div><i className='h-full text-off-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>c</i><i className=" px-0.5 fas text-colors-white fa-chess-bishop  flex justify-center items-center w-8/10"></i></div></div>
                <div className={styles.white}><div><i className='h-full text-text-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>d</i><i className=" px-0.5 fas text-colors-white fa-chess-queen flex justify-center  items-center w-8/10"></i></div></div>
                <div className={styles.black}><div><i className='h-full text-off-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>e</i><i className=" px-0.5 fas text-colors-white fa-chess-king  flex justify-center items-center w-8/10"></i></div></div>
                <div className={styles.white}><div><i className='h-full text-text-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>f</i><i className=" px-0.5 fas text-colors-white fa-chess-bishop  flex justify-center items-center w-8/10"></i></div></div>
                <div className={styles.black}><div><i className='h-full text-off-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>g</i><i className=" px-0.5 fas text-colors-white fa-chess-knight  flex justify-center items-center w-8/10"></i></div></div>
                <div className={styles.white}><div><i className='h-full text-text-bron flex items-end text-xs lg:text-sm align-bottom pl-1 pb-1'>h</i><i className=" px-0.5 fas text-colors-white fa-chess-rook  flex justify-center items-center w-8/10"></i><i className='num-tag text-text-bron'>1</i></div></div>
              </div>
  )
}

export default Chessboard