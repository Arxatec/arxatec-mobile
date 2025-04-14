import React from 'react';
import {StyleSheet} from 'react-native';
import {CustomAvatar} from '@/components/atoms/custom_avatar';

interface ClientAvatarProps {
  avatar: string;
  username: string;
  size?: number;
}

export const ClientAvatar: React.FC<ClientAvatarProps> = ({
  avatar,
  username,
  size = 50,
}) => {
  return <CustomAvatar avatar={avatar} size={size} username={username} />;
};
