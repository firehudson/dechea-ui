export interface Employee {
  id: string;
  avatar: string;
  displayName: string;
}

export interface EmployeeDropdownGroup {
  id: string;
  label: string;
  options: Employee[];
}
