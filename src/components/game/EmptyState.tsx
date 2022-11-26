import React from 'react'

const EmptyState = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <i className="fas fa-chess-board font-extrabold text-9xl "></i>
    <p className="lg:text-2xl text-xl text-center">
      No Completed Chess Games yet
    </p>
  </div>
  )
}

export default EmptyState