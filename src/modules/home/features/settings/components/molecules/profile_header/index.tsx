import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomAvatar} from '@/components/atoms';
import {SettingsText} from '../../atoms/settings_text';

interface ProfileHeaderProps {
  avatar?: string;
  username?: string;
  email?: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatar = 'https://images.pexels.com/photos/4975660/pexels-photo-4975660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  username = 'Rafael Aguirre',
  email = 'rafaelaguirre@gmail.com',
}) => {
  return (
    <View style={styles.profileInfo}>
      <CustomAvatar avatar={avatar} size={45} username={username} />
      <View style={styles.profileTextContainer}>
        <SettingsText variant="profileName">{username}</SettingsText>
        <SettingsText variant="profileEmail">{email}</SettingsText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
});
