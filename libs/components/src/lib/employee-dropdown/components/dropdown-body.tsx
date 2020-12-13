import React from 'react';
import SearchInput from './search-input';
import styles from './dropdown-body.module.css';
import AvatarGroup from './avatar-group-dark';
import DropdownOption from './dropdown-option';
import Checkbox from './checkbox';
import { Employee, EmployeeDropdownGroup } from '../employee-dropdown.typings';
import { AvatarSize } from './avatar-count';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownBodyProps {
  selectAllOptionLabel?: string;
  optionsGroup: EmployeeDropdownGroup[];
  pinnedEmployees: Employee[];
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>((props, ref) => {
  return (
    <div ref={ref} className={styles.container} {...props}>
      <SearchInput />
      {props.selectAllOptionLabel && (
        <div className={styles.selectAllOption}>
          <AvatarGroup size={AvatarSize.sm} count={10} dark />
          <span className={styles.selectAllOptionLabel}>{props.selectAllOptionLabel}</span>
          <Checkbox />
        </div>
      )}
      <div className={styles.divider} />
      {props.pinnedEmployees.map((employee: Employee) => (
        <DropdownOption
          key={employee.id}
          value={employee.id}
          label={employee.displayName}
          avatar={employee.avatar}
          actionType="radio"
        />
      ))}
      <div className={styles.divider} />
      {props.optionsGroup.map((optionGroup: EmployeeDropdownGroup, index: number) => (
        <>
          <DropdownOption
            key={optionGroup.id}
            value={optionGroup.id}
            label={optionGroup.label}
            isGroupLabelOption
          />
          {optionGroup.options.map(option => (
            <DropdownOption
              key={option.id}
              value={option.id}
              label={option.displayName}
              avatar={option.avatar}
            />
          ))}
          {(props.optionsGroup.length - 1) !== index && (
            <div className={styles.divider} />
          )}
        </>
      ))}
    </div>
  );
});

export default DropdownBody;
