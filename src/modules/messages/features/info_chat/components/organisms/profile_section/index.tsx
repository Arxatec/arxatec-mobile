import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProfileInfo} from '../../molecules/profile_info';
import {ActionsRow} from '../../molecules/actions_row';
import {ActionProps} from '../../../types';

interface ProfileSectionProps {
  name: string;
  role: string;
  avatar: string;
  actions?: ActionProps[];
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  role,
  avatar,
  actions,
}) => {
  return (
    <View style={styles.container}>
      <ProfileInfo name={name} role={role} avatar={avatar} />
      <ActionsRow actions={actions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 9,
  },
});
