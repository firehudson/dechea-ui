import React from 'react';
import cx from 'classnames';
import styles from './avatar-group.module.css';
import Avatar, { AvatarSize } from './avatar-count';
import Icon1 from '../../../assets/tausend.svg';
import Icon2 from '../../../assets/xavier.svg';

export interface AvatarProps {
  className?: string;
  avatars?: string[];
}

const AvatarGroupDark = (props: AvatarProps) => {
  return (
    <div className={cx(styles.container, props.className)}>
      <Avatar count={12} size={AvatarSize.sm} className={cx(styles.firstAvatar, styles.darkBorder)} />
      <img src="assets/dr-xavier.svg" className={styles.centerAvatar} alt="xavier" />
      <img src="assets/dr-tausend.svg" className={styles.lastAvatar} alt="tausend" />
    </div>
  );
};

AvatarGroupDark.defaultProps = {
  avatars: [],
};

export default AvatarGroupDark;
