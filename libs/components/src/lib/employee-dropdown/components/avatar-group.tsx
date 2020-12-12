import React from 'react';
import styles from './avatar-group.module.css';
import Avatar, { AvatarSize } from './avatar';
import Icon1 from '../../../assets/tausend.svg';
import Icon2 from '../../../assets/xavier.svg';

export interface AvatarProps {
  avatars?: string[];
}

const AvatarGroups = (props: AvatarProps) => {
  return (
    <div className={styles.container}>
      <Avatar count={12} size={AvatarSize.md} className={styles.firstAvatar} />
      <img src={Icon2} className={styles.centerAvatar} alt="xavier" />
      <img src={Icon1} className={styles.lastAvatar} alt="tausend" />
    </div>
  );
};

AvatarGroups.defaultProps = {
  avatars: [],
};

export default AvatarGroups;
