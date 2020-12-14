import React, { useEffect } from 'react';
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
  selectedGroups: string[];
  pinnedEmployees: Employee[];
  filteredOptions: Employee[];
  searchTerm: string;
  isSearching: boolean;
  isAllOptionsSelected: boolean;
  onChangeSearchTerm: (value: string) => void;
  onSelectOption: (option: Employee, groupId: string) => void;
  onSelectGroup: (groupId: string) => void;
  onSelectPinnedOption: (option: Employee) => void;
  onSelectAll: () => void;
}

const DropdownBody = React.forwardRef<HTMLDivElement, DropdownBodyProps>(
  (props, ref) => {
    useEffect(() => {
      return () => {
        props.onChangeSearchTerm('');
      };
    }, []);

    return (
      <div ref={ref} className={styles.container}>
        <SearchInput
          searchTerm={props.searchTerm}
          onChangeSearchTerm={props.onChangeSearchTerm}
        />
        {props.isSearching ? (
          props.filteredOptions.map((option) => (
            <DropdownOption
              key={option.id}
              value={option.id}
              label={option.displayName}
              avatar={option.avatar}
              selected={props.selectedOptions.includes(option.id)}
              onSelect={() => props.onSelectOption(option, option.groupId)}
            />
          ))
        ) : (
          <>
            {props.selectAllOptionLabel && (
              <div className={styles.selectAllOption}>
                <AvatarGroupDark />
                <span className={styles.selectAllOptionLabel}>
                  {props.selectAllOptionLabel}
                </span>
                <Checkbox
                  value={12}
                  checked={props.isAllOptionsSelected}
                  onChange={props.onSelectAll}
                />
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
                onSelect={() => props.onSelectPinnedOption(employee)}
              />
            ))}
            <div className={styles.divider} />
            {props.optionsGroup.map(
              (optionGroup: EmployeeDropdownGroup, index: number) => (
                <div key={optionGroup.id}>
                  <DropdownOption
                    key={optionGroup.id}
                    value={parseInt(optionGroup.id)}
                    className={styles.groupLabel}
                    label={optionGroup.label}
                    isGroupLabelOption
                    selected={props.selectedGroups.includes(optionGroup.id)}
                    onSelect={() => props.onSelectGroup(optionGroup.id)}
                  />
                  {optionGroup.options.map((option) => (
                    <DropdownOption
                      key={option.id}
                      value={option.id}
                      label={option.displayName}
                      avatar={option.avatar}
                      selected={props.selectedOptions.includes(option.id)}
                      onSelect={() =>
                        props.onSelectOption(option, optionGroup.id)
                      }
                    />
                  ))}
                  {props.optionsGroup.length - 1 !== index && (
                    <div className={styles.divider} />
                  )}
                </div>
              )
            )}
          </>
        )}
      </div>
    );
  }
);

export default DropdownBody;
