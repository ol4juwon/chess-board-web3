import React, { FC } from 'react'
interface Props {
  type: string;
  onClick: any;
  enabled?:  boolean;
}
const LoungeButton: FC<Props> = ({type,onClick, enabled}:Props) => {
  return (
    <div className={`w-28 lg:w-28 text-center text-lg ${type == 'enter' ? enabled ?  'bg-colors-blue-400' : ' bg-accent-grey' :' border-solid border-2 border-colors-blue-400'} mx-1 flex flex-row items-center justify-center rounded-lg p-2 my-0 lg:text-sm lg:text-center lg:mx-1 lg:flex  lg:justify-center lg:p-2 lg:flex-row lg:items-center `}>
      
      <p className={`text-xs ${ type == 'enter' ? 'text-colors-white': 'text-colors-blue-400'}`}>{type == 'enter'? 'Request To Join': 'Spectate'}</p></div>
  )
}

export default LoungeButton