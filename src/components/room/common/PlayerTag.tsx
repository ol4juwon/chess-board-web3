import React from 'react'
interface Props {
name?: string;
avatar?: string;
}
const PlayerTag = ({name, avatar}: Props) => {
  return (
    <div className='h-auto  flex flex-row justify-start items-end '>
        <div className='py-2'>
        <i className='fas fa-user mr-1 h-8 bg-player-tag w-8 flex text-center justify-center items-end text-md'></i>

        </div>
        <div className='p-2'>
            <p>{name ?  name: 'Anonymous'}</p>
        </div>
        {/* <div>
        <i className='fas fa-user bg-colors-slate-500 pt-2 px-2 mr-2'></i>
        </div>
        <span>{name ?  name: 'Anonymous'}</span> */}
    </div>
  )
}

export default PlayerTag