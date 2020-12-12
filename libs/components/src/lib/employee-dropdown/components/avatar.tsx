import React from 'react';
import cx from 'classnames';
import styles from './avatar.module.css';

export enum AvatarSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export interface AvatarProps {
  count?: number;
  size: AvatarSize;
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className={cx(
      styles.container,
        {
          [styles.counterAvatar]: props.count,
          [styles[props.size]]: props.size,
          [props.className]: props.className,
        }
      )}
    >
      {props.count}
    </div>
  );
};

Avatar.defaultProps = {
  size: AvatarSize.md,
};

export default Avatar;
