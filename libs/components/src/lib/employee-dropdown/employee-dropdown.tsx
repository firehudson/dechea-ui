import React, { useState } from 'react';
import cx from 'classnames';
import AvatarGroup from './components/avatar-group';
import styles from './employee-dropdown.module.css';
import ArrowIcon from './icons/arrow-icon';
import DropdownBody from './components/dropdown-body';

/* eslint-disable-next-line */
export interface EmployeeDropdownProps {
  placeholder: string;
}

export function EmployeeDropdown(props: EmployeeDropdownProps) {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <>
    <div className={cx(styles.container, active && styles.active)} onClick={toggleActive}>
      <AvatarGroup />
      <span
        className={cx(
          styles.placeholder,
          {
            [styles.placeholderActive]: active
          }
        )}
      >
        {props.placeholder}
      </span>
      <ArrowIcon active={active} />
    </div>
    {active && (
      <DropdownBody />
    )}
    </>
  );
}

EmployeeDropdown.defaultProps = {
  placeholder: 'Select employee',
};

export default EmployeeDropdown;
