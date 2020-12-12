import React from 'react';
import { render } from '@testing-library/react';

import EmployeeDropdown from './employee-dropdown';

describe('EmployeeDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
