export interface Employee {
  id: number;
  avatar: string;
  displayName: string;
  groupId?: string;
}

export interface EmployeeDropdownGroup {
  id: string;
  label: string;
  options: Employee[];
}
