import React, { FC } from 'react'
interface Props {
    spectating: boolean;
    roomId: string;
    players: string;
    hasEnded?: boolean;
}
const Room: FC<Props> = ({spectating, roomId, players, hasEnded}: Props) => {
  return (
    <div>Room</div>
  )
}

export default Room