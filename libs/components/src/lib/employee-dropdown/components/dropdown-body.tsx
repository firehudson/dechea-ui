import React from 'react';
import SearchInput from './search-input';
import styles from './dropdown-body.module.css';
import AvatarGroupDark from './avatar-group-dark';
import DropdownOption from './dropdown-option';
import Checkbox from './checkbox';
import { Employee, EmployeeDropdownGroup } from '../employee-dropdown.typings';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownBodyProps {
  selectAllOptionLabel?: string;
  optionsGroup: EmployeeDropdownGroup[];
  pinnedEmployees: Employee[];
  filteredOptions: Employee[];
  searchTerm: string;
  isSearching: boolean;
  onChangeSearchTerm: (value: string) => void;
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>((props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <SearchInput
        searchTerm={props.searchTerm}
        onChangeSearchTerm={props.onChangeSearchTerm}
      />
      {props.isSearching
        ? props.filteredOptions.map(option => (
            <DropdownOption
              key={option.id}
              value={option.id.toString()}
              label={option.displayName}
              avatar={option.avatar}
            />
          ))
        : (
          <>
            {props.selectAllOptionLabel && (
              <div className={styles.selectAllOption}>
                <AvatarGroupDark />
                <span className={styles.selectAllOptionLabel}>{props.selectAllOptionLabel}</span>
                <Checkbox />
              </div>
            )}
            <div className={styles.divider} />
            {props.pinnedEmployees.map((employee: Employee) => (
              <DropdownOption
                key={employee.id}
                value={employee.id.toString()}
                label={employee.displayName}
                avatar={employee.avatar}
                actionType="radio"
              />
            ))}
            <div className={styles.divider} />
            {props.optionsGroup.map((optionGroup: EmployeeDropdownGroup, index: number) => (
              <div key={optionGroup.id}>
                <DropdownOption
                  key={optionGroup.id}
                  value={optionGroup.id.toString()}
                  label={optionGroup.label}
                  isGroupLabelOption
                />
                {optionGroup.options.map(option => (
                  <DropdownOption
                    key={option.id}
                    value={option.id.toString()}
                    label={option.displayName}
                    avatar={option.avatar}
                  />
                ))}
                {(props.optionsGroup.length - 1) !== index && (
                  <div className={styles.divider} />
                )}
              </div>
            ))}
          </>
        )
      }
    </div>
  );
});

export default DropdownBody;
