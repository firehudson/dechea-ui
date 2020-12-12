import React from 'react';
import arrowDown from '../../../assets/arrow-down.svg';
import arrowUp from '../../../assets/arrow-up.svg';

interface ArrowIconProps {
  active?: boolean;
}

const ArrowIcon = (props: ArrowIconProps) => (
  <img src={props.active ? arrowUp : arrowDown} alt="dropdown-arrow" />
);

export default ArrowIcon;
