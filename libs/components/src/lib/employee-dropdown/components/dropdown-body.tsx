import React from 'react';
import SearchInput from './search-input';
import styles from './dropdown-body.module.css';

interface DropdownBodyProps {}

const DropdownBody = React.forwardRef<HTMLInputElement>((props: DropdownBodyProps, ref) => {
  return (
    <div className={styles.container} {...props}>
      <SearchInput ref={ref}  />
    </div>
  );
});

export default DropdownBody;
