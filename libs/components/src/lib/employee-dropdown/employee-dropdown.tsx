import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import AvatarGroup from './components/avatar-group';
import styles from './employee-dropdown.module.css';
import ArrowIcon from './icons/arrow-icon';
import DropdownBody from './components/dropdown-body';
import useBlurHandler from './hooks/useBlurHandler';
import { Employee, EmployeeDropdownGroup } from './employee-dropdown.typings';


export interface EmployeeDropdownProps {
  selectAllOptionLabel?: string;
  employeesByGroup: EmployeeDropdownGroup[];
  pinnedEmployees: Employee[];
  placeholder: string;
}

export function EmployeeDropdown(props: EmployeeDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(true);
  const [allOptions, setAllItems] = useState<Employee[]>([]);
  const [filteredOptions, setFilteredItems] = useState<Employee[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const allEmployees = [];
    props.employeesByGroup.forEach(employeeGroup => {
      employeeGroup.options.forEach(employee => allEmployees.push(employee))
    })
    setAllItems(allEmployees);
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  const onChangeSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setFilteredItems(allOptions.filter((option: Employee) => option.displayName.includes(searchTerm)));
  };

  const onSelectOption = (option: Employee) => {
    const options = [...selectedOptions];
    const existingIndex = options.indexOf(option.id);

    if (existingIndex === -1) {
      options.push(option.id);
    } else {
      options.splice(existingIndex, 1);
    }

    setSelectedOptions(options);
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
      <DropdownBody
        ref={ref}
        selectAllOptionLabel={props.selectAllOptionLabel}
        optionsGroup={props.employeesByGroup}
        pinnedEmployees={props.pinnedEmployees}
        searchTerm={searchTerm}
        onChangeSearchTerm={onChangeSearchTerm}
        filteredOptions={filteredOptions}
        isSearching={Boolean(searchTerm.length)}
        selectedOptions={selectedOptions}
        onSelectOption={onSelectOption}
      />
    )}
    </>
  );
}

EmployeeDropdown.defaultProps = {
  placeholder: 'Select employee',
};

export default EmployeeDropdown;
