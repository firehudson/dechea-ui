import React from 'react';
import cx from 'classnames';
import styles from './dropdown-option.module.css';
import Checkbox from './checkbox';

interface DropdownOptionProps {
  label: string;
  avatar?: string;
  isGroupLabelOption?: boolean;
  value: string;
}

const DropdownOption = (props: DropdownOptionProps) => {
  return (
    <div className={styles.container}>
      {Boolean(props.avatar) && (
        <img className={styles.avatar} src={props.avatar} alt={props.value} />
      )}
      <span className={cx(styles.label, props.isGroupLabelOption && styles.groupLabel)}>{props.label}</span>
      <Checkbox />
    </div>
  );
};

export default DropdownOption;
