import React from 'react';
import cx from 'classnames';
import styles from './dropdown-option.module.css';
import Checkbox from './checkbox';
import RadioButton from './radio-button';

interface DropdownOptionProps {
  label: string;
  avatar?: string;
  isGroupLabelOption?: boolean;
  value: number;
  selected: boolean;
  onSelect: () => void;
  actionType: 'checkbox' | 'radio'
}

const actionTypeMap = {
  checkbox: (props: DropdownOptionProps) => (
    <Checkbox onChange={props.onSelect} checked={props.selected} />
  ),
  radio: (props: DropdownOptionProps) => <RadioButton />,
};

const DropdownOption = (props: DropdownOptionProps) => {
  const renderComponent = actionTypeMap[props.actionType];
  return (
    <div className={styles.container}>
      {Boolean(props.avatar) && (
        <img className={styles.avatar} src={props.avatar} alt={`${props.value}`} />
      )}
      <span className={cx(styles.label, props.isGroupLabelOption && styles.groupLabel)}>{props.label}</span>
      {renderComponent(props)}
    </div>
  );
};

DropdownOption.defaultProps = {
  actionType: 'checkbox',
};

export default DropdownOption;
