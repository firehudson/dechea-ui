import React, { useRef, useState } from 'react';
import cx from 'classnames';
import AvatarGroup from './components/avatar-group';
import styles from './employee-dropdown.module.css';
import ArrowIcon from './icons/arrow-icon';
import DropdownBody from './components/dropdown-body';
import useBlurHandler from './hooks/useBlurHandler';

/* eslint-disable-next-line */
export interface EmployeeDropdownProps {
  placeholder: string;
}

export function EmployeeDropdown(props: EmployeeDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  useBlurHandler(
    ref,
    () => setActive(false),
    'anchor',
  );

  return (
    <>
    <div id="anchor" className={cx(styles.container, active && styles.active)} onClick={toggleActive}>
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
      <DropdownBody ref={ref} />
    )}
    </>
  );
}

EmployeeDropdown.defaultProps = {
  placeholder: 'Select employee',
};

export default EmployeeDropdown;
