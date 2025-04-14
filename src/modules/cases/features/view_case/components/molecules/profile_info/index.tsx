import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {CustomAvatar} from '@/components/atoms';

interface ProfileInfoProps {
  avatar: string;
  username: string;
  email: string;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  avatar,
  username,
  email,
}) => {
  return (
    <View style={styles.profileInfo}>
      <CustomAvatar avatar={avatar} size={45} username={username} />
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileName}>{username}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
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
  profileName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
  },
  profileEmail: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    marginTop: 2,
    fontFamily: STYLES.fonts.regular,
  },
});
