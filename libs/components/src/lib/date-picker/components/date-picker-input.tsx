import React from 'react';
import styles from './date-picker-input.module.css';

interface DatePickerInputProps {
  onClick: () => void;
  date: string;
}

const DatePickerInput = (props: DatePickerInputProps) => {
  return (
    <>
      <div
        className={styles.container}
        onClick={props.onClick}
      >
        <img className={styles.icon} src="assets/date-picker.svg" alt="date-picker-icon" />
        <span className={styles.label}>{props.date}</span>
        <img className={styles.icon} src="assets/cheverons.svg" alt="cheverons-icon" />
      </div>
      <div className={styles.divider} />
    </>
  );
};

export default DatePickerInput;
