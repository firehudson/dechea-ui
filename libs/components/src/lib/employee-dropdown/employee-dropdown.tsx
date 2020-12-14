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
  const [active, setActive] = useState<boolean>(false);
  const [isPinnedOptionSelected, setIsPinnedOptionSelected] = useState<boolean>(false);
  const [allOptions, setAllItems] = useState<Employee[]>([]);
  const [filteredOptions, setFilteredItems] = useState<Employee[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const allEmployees = [];
    props.employeesByGroup.forEach(employeeGroup => {
      employeeGroup.options.forEach(employee => allEmployees.push({
        ...employee,
        groupId: employeeGroup.id,
      }));
    });
    setAllItems(allEmployees);
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  const onChangeSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setFilteredItems(allOptions.filter((option: Employee) => option.displayName.includes(searchTerm)));
  };

  const findGroupById = (groupId: string): EmployeeDropdownGroup => {
    return props.employeesByGroup.find(
      ({ id }: EmployeeDropdownGroup) => id === groupId
    );
  };

  const isAllGroupOptionsSelected = (groupId: string, updateOptions: number[]) => {
    const group = findGroupById(groupId);
    return group.options.reduce(
      (accumulatedValue: boolean, currentValue: Employee) => {
        return accumulatedValue && updateOptions.includes(currentValue.id)
      },
      true,
    );
  };

  const updateGroupSelection = (groupId: string, options: number[]) => {
    const shouldSelectGroup = isAllGroupOptionsSelected(groupId, options);
    const groupAlreadySelected = selectedGroups.includes(groupId);

    // only select if not already selected
    if (shouldSelectGroup && !groupAlreadySelected) {
      setSelectedGroups([...selectedGroups, groupId]);
    }

    // only remove if already selected
    if (!shouldSelectGroup && groupAlreadySelected) {
      const newGroups = [...selectedGroups]
      newGroups.splice(
        selectedGroups.indexOf(groupId),
        1
      );
      setSelectedGroups(newGroups);
    }
  };

  const onSelectOption = (option: Employee, groupId: string) => {
    const options = isPinnedOptionSelected
      ? [] // start afresh list
      : [...selectedOptions] // use exisitng selected items;
    const existingIndex = options.indexOf(option.id);

    if (existingIndex === -1) {
      options.push(option.id);
    } else {
      options.splice(existingIndex, 1);
    }

    setSelectedOptions(options);
    updateGroupSelection(groupId, options);

    if (isPinnedOptionSelected) {
      // revoke pinned selection state
      setIsPinnedOptionSelected(false);
    }
  };

  const onSelectPinnedOption = (option: Employee) => {
    setSelectedOptions([option.id]);
    setSelectedGroups([]);
    setIsPinnedOptionSelected(true);
  };

  const selectAllGroupItems = (groupId: string) => {
    const group = findGroupById(groupId);
    const optionsToMarkSelected = group.options
      .filter(
        option => !selectedOptions.includes(option.id) // filter all unselected options 
      )
      .map(({ id }: Employee) => id);

    setSelectedOptions([...selectedOptions, ...optionsToMarkSelected]);
  };

  const deselectAllGroupItems = (groupId: string) => {
    const group = findGroupById(groupId);

    const options = [...selectedOptions]
    group.options.forEach((option: Employee) => {
      const existingIndex = options.indexOf(option.id);
      if (existingIndex !== -1) {
        options.splice(existingIndex, 1);
      }
    });

    setSelectedOptions(options);
  };

  const onSelectGroup = (groupId: string) => {
    const groups = [...selectedGroups];
    const existingIndex = groups.indexOf(groupId);

    if (existingIndex === -1) {
      groups.push(groupId);
      selectAllGroupItems(groupId);
    } else {
      groups.splice(existingIndex, 1);
      deselectAllGroupItems(groupId);
    }

    setSelectedGroups(groups);
  };

  const onSelectAll = () => {
    const shouldSelectAll = selectedOptions.length === allOptions.length;
    const options = shouldSelectAll
      ? [] // deselect all options
      : allOptions.map(({ id }: Employee) => id);

    const groups = shouldSelectAll
      ? [] // deselect all groups
      : props.employeesByGroup.map(({ id }: EmployeeDropdownGroup) => id);

    // mark options as selected
    setSelectedOptions(options);
    // mark groups as selected
    setSelectedGroups(groups);
  };

  useBlurHandler(
    ref,
    () => setActive(false),
    'anchor',
  );

  return (
    <div>
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
          isAllOptionsSelected={allOptions.length === selectedOptions.length}
          selectedOptions={selectedOptions}
          onSelectOption={onSelectOption}
          selectedGroups={selectedGroups}
          onSelectPinnedOption={onSelectPinnedOption}
          onSelectGroup={onSelectGroup}
          onSelectAll={onSelectAll}
        />
      )}
    </div>
  );
}

EmployeeDropdown.defaultProps = {
  placeholder: 'Select employee',
};

export default EmployeeDropdown;
