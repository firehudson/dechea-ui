import React from 'react';
import styles from './radio-button.module.css';

const RadioButton = (props) => (
  <input
    className={styles.radioButton}
    type="radio"
    {...props}
  />
);

export default RadioButton;
