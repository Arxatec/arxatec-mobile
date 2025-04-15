import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProfileAvatar} from '../../atoms/profile_avatar';

interface ProfileInfoProps {
  name: string;
  role: string;
  avatar: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  role,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <ProfileAvatar name={name} role={role} avatar={avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
