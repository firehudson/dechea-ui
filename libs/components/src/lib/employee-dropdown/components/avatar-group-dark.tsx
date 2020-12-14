import React from 'react';
import cx from 'classnames';
import styles from './avatar-group.module.css';
import Avatar, { AvatarSize } from './avatar-count';

export interface AvatarProps {
  className?: string;
  avatars?: string[];
}

const AvatarGroupDark = (props: AvatarProps) => {
  return (
    <div className={cx(styles.container, props.className)}>
      <Avatar count={12} size={AvatarSize.sm} className={cx(styles.firstAvatar, styles.darkBorder)} />
      <img src="assets/dr-xavier.png" className={styles.centerAvatar} alt="xavier" />
      <img src="assets/dr-tausend.png" className={styles.lastAvatar} alt="tausend" />
    </div>
  );
};

AvatarGroupDark.defaultProps = {
  avatars: [],
};

export default AvatarGroupDark;
