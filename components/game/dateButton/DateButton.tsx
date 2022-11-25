import React from "react";
import styles from "./DateButton.module.css";

interface Props {
  value?: any;
  setValue?: any;
}
const DateButton = ({ value, setValue }: Props) => {
  return (
    <div className={styles.dateButton}>
      <i className="fas fa-calendar" aria-hidden="true"></i>
    <select className='bg-colors-transparent'>
        
        <option>
           May 8th - Jan 8th
        </option>
    </select>
    </div>
  );
};

export default DateButton;
