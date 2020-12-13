import React from 'react';
import SearchInput from './search-input';
import styles from './dropdown-body.module.css';
import AvatarGroups from './avatar-group';
import DropdownOption from './dropdown-option';
import { EmployeeDropdownGroup } from '../employee-dropdown.typings';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownBodyProps {
  selectAllOptionLabel?: string;
  optionsGroup: EmployeeDropdownGroup[];
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>((props, ref) => {
  return (
    <div ref={ref} className={styles.container} {...props}>
      <SearchInput />
      {/* {props.selectAllOptionLabel && (
        <>
          <AvatarGroups />
          {props.selectAllOptionLabel}
          <input type="checkbox" />
        </>
      )} */}
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
