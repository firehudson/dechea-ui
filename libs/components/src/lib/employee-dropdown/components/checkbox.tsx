import React from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  value: number;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = (props: CheckboxProps) => (
  <>
    <input
      id={`checkbox-${props.value}`}
      checked={props.checked}
      className={styles.checkbox}
      type="checkbox"
      onChange={props.onChange}
    />
    <label htmlFor={`checkbox-${props.value}`} />
  </>
);

export default Checkbox;
