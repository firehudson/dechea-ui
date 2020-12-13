import React from 'react';
import cx from 'classnames';
import styles from './dropdown-option.module.css';
import Checkbox from './checkbox';
import RadioButton from './radio-button';

interface DropdownOptionProps {
  label: string;
  avatar?: string;
  isGroupLabelOption?: boolean;
  value: string;
  actionType: 'checkbox' | 'radio'
}

const actionTypeMap = {
  checkbox: Checkbox,
  radio: RadioButton,
};

const DropdownOption = (props: DropdownOptionProps) => {
  const ActionComponent = actionTypeMap[props.actionType];
  return (
    <div className={styles.container}>
      {Boolean(props.avatar) && (
        <img className={styles.avatar} src={props.avatar} alt={props.value} />
      )}
      <span className={cx(styles.label, props.isGroupLabelOption && styles.groupLabel)}>{props.label}</span>
      <ActionComponent />
    </div>
  );
};

DropdownOption.defaultProps = {
  actionType: 'checkbox',
};

export default DropdownOption;
