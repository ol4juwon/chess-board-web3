import React from 'react'
import styles from './CreateButton.module.css';
const CreateRoom = () => {
  return (
    <div className={styles.create}> <i className="fas fa-plus text-light-blue"></i>{" "} <span className='mx-1 text-light-blue'>Create New Room</span></div>
  )
}

export default CreateRoom