import React from 'react';
import { EmployeeDropdown } from '@dechea/components';
import { getEmployeesByGroup, getPinnedEmployees } from '@dechea/constants';

import './app.css';

export function App() {
  return (
    <>
      <h2>Dechea-UI demo page</h2>
      <EmployeeDropdown
        selectAllOptionLabel="All employee"
        employeesByGroup={getEmployeesByGroup()}
        pinnedEmployees={getPinnedEmployees()}
      />
    </>
  );
}

export default App;
