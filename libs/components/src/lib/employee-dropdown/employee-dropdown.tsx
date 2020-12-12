import React from 'react';
import AvatarGroup from './components/avatar-group';
import styles from './employee-dropdown.module.css';
import ArrowIcon from './icons/arrow-icon';

/* eslint-disable-next-line */
export interface EmployeeDropdownProps {
  placeholder: string;
}

export function EmployeeDropdown(props: EmployeeDropdownProps) {
  return (
    <div className={styles.container}>
      <AvatarGroup />
      <span className={styles.placeholder}>{props.placeholder}</span>
      <ArrowIcon />
    </div>
  );
}

EmployeeDropdown.defaultProps = {
  placeholder: 'Select employee',
};

export default EmployeeDropdown;
