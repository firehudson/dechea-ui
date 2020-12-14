export interface Employee {
  id: number;
  avatar: string;
  displayName: string;
}

export interface EmployeeDropdownGroup {
  id: number;
  label: string;
  options: Employee[];
}
