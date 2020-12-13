import React from 'react';
import SearchInput from './search-input';
import styles from './dropdown-body.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DropdownBodyProps {}

const DropdownBody = (props: DropdownBodyProps) => {
  return (
    <div className={styles.container} {...props}>
      <SearchInput />
    </div>
  );
};

export default DropdownBody;
