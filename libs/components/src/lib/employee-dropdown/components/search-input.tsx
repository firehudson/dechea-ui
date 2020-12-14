import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';
import styles from './search-input.module.css';

interface SearchInputProps {
  children?: React.ReactNode;
  placeholder?: string;
  searchTerm: string;
  onChangeSearchTerm: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeSearchTerm(event.target.value);
  };

  const onClear = () => props.onChangeSearchTerm('');

  // focus on input element to allow user to start search immediately
  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className={cx(styles.container, active && styles.active)}>
      <SearchIcon className={styles.searchIcon} />
      <input
        ref={input}
        className={styles.input}
        placeholder={props.placeholder}
        value={props.searchTerm}
        onFocus={toggleActive}
        onBlur={toggleActive}
        onChange={onTextChange}
      />
      {Boolean(props.searchTerm.length) && (
        <div className={styles.clearButton} onClick={onClear}>clear</div>
      )}
    </div>
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search employee...',
}

export default SearchInput;
