import React from 'react';
import cx from 'classnames';
import styles from './avatar-group.module.css';
import Avatar, { AvatarSize } from './avatar-count';

export interface AvatarProps {
  className?: string;
  avatars?: string[];
}

const AvatarGroups = (props: AvatarProps) => {
  return (
    <div className={cx(styles.container, props.className)}>
      <Avatar count={12} size={AvatarSize.md} className={styles.firstAvatar} />
      <img src="assets/don-lite.png" className={styles.centerAvatar} alt="xavier" />
      <img src="assets/tausend-lite.png" className={styles.lastAvatar} alt="tausend" />
    </div>
  );
};

AvatarGroups.defaultProps = {
  avatars: []
};

export default AvatarGroups;
