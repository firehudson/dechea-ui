import React from 'react';

interface ArrowIconProps {
  active?: boolean;
}

const ArrowIcon = (props: ArrowIconProps) => (
  <img
    src={`assets/arrow-${props.active ? 'up' : 'down'}.svg`}
    alt="dropdown-arrow"
  />
);

export default ArrowIcon;
