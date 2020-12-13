import React, { useState } from 'react';
import cx from 'classnames';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import styles from './search-input.module.css';

interface SearchInputProps {
  children?: React.ReactNode;
  placeholder?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>((props: SearchInputProps, ref) => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleActive = () => setActive(!active);
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={cx(styles.container, active && styles.active)}>
      <SearchIcon className={styles.searchIcon} />
      <input
        ref={ref}
        className={styles.input}
        placeholder={props.placeholder}
        value={searchTerm}
        onFocus={toggleActive}
        onBlur={toggleActive}
        onChange={onTextChange}
      />
      {Boolean(searchTerm.length) && (
        <div className={styles.clearButton}>clear</div>
      )}
    </div>
  );
});

SearchInput.defaultProps = {
  placeholder: 'Search employee...',
}

export default SearchInput;
