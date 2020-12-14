import React from 'react';
import { EmployeeDropdown, DatePicker } from '@dechea/components';
import { getEmployeesByGroup, getPinnedEmployees } from '@dechea/constants';

import './app.css';

const onChangeDate = (date: Date) => {
  console.log('Selected date', date);
};

export function App() {
  return (
    <>
      <h2>Dechea-UI demo page</h2>
      <div className="app-container">
        <EmployeeDropdown
          selectAllOptionLabel="All employee"
          employeesByGroup={getEmployeesByGroup()}
          pinnedEmployees={getPinnedEmployees()}
        />
        <DatePicker onChangeDate={onChangeDate} />
      </div>
    </>
  );
}

export default App;
