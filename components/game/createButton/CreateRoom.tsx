import React, { FC } from 'react'
import styles from './CreateButton.module.css';
interface Props {
  show: boolean;
  setShow: any;
}
const CreateRoom: FC<Props> = ({show, setShow}:Props) => {
  return (
    <div onClick={()=> {setShow(!show)}} className={styles.create}> <i className="fas fa-plus text-light-blue"></i>{" "} <span className='mx-1 text-light-blue'>Create New Room</span></div>
  )
}

export default CreateRoom