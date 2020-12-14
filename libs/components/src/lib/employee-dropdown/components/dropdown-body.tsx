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
  selectedOptions: number[];
  pinnedEmployees: Employee[];
  filteredOptions: Employee[];
  searchTerm: string;
  isSearching: boolean;
  onChangeSearchTerm: (value: string) => void;
  onSelectOption: any;
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>((props, ref) => {
  console.log('selectedOptions', props.selectedOptions)
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
              value={option.id}
              label={option.displayName}
              avatar={option.avatar}
              selected={props.selectedOptions.includes(option.id)}
              onSelect={() => props.onSelectOption(option)}
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
                value={employee.id}
                label={employee.displayName}
                avatar={employee.avatar}
                actionType="radio"
                selected={props.selectedOptions.includes(employee.id)}
                onSelect={() => props.onSelectOption(employee)}
              />
            ))}
            <div className={styles.divider} />
            {props.optionsGroup.map((optionGroup: EmployeeDropdownGroup, index: number) => (
              <div key={optionGroup.id}>
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
                    selected={props.selectedOptions.includes(option.id)}
                    onSelect={() => props.onSelectOption(option)}
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
