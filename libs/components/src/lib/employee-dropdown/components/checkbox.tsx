import React from 'react';
import styles from './checkbox.module.css';

const Checkbox = (props) => (
  <input
    className={styles.checkbox}
    type="checkbox"
    {...props}
  />
);

export default Checkbox;
