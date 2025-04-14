import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {STYLES} from '@/utils';

interface HeaderProfileProps {
  username: string;
  avatarUrl: string;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  username,
  avatarUrl,
}) => {
  return (
    <View style={styles.headerLeft}>
      <CustomAvatar avatar={avatarUrl} size={40} username={username} />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hola, Bienvenido</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeContainer: {
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: STYLES.colors.black[700],
    fontFamily: STYLES.fonts.medium,
  },
  username: {
    fontSize: 16,
    color: STYLES.colors.black[900],
    fontFamily: STYLES.fonts.semi_bold,
  },
});
