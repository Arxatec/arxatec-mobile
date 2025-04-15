import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomAvatar} from '@/components/atoms';
import {STYLES} from '@/utils';

interface ProfileAvatarProps {
  avatar: string;
  name: string;
  role: string;
  size?: number;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  avatar,
  name,
  role,
  size = 80,
}) => {
  return (
    <View style={styles.container}>
      <CustomAvatar avatar={avatar} size={size} username={name} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginTop: 8,
  },
  role: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.regular,
  },
});
