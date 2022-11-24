import React from 'react'
import styles from './DateButton.module.css';

interface Props {
    value?: any;
    setValue?: any;

}
const DateButton = ({value, setValue}:Props) => {
  return (
    <select className={styles.dateButton}>
        {/* <i className="fa fa-calendar"></i> */}
        <option>
           May 8th - Jan 8th
        </option>
    </select>
  )
}

export default DateButton