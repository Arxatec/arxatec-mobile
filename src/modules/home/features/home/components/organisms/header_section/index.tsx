import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderProfile} from '../../molecules';
import {HeaderIcon} from '../../atoms';
import {BellIcon, Cog6ToothIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface HeaderSectionProps {
  username: string;
  avatarUrl: string;
  onSettingsPress: () => void;
  onNotificationPress: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  username,
  avatarUrl,
  onSettingsPress,
  onNotificationPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderProfile username={username} avatarUrl={avatarUrl} />
        <View style={styles.headerRight}>
          <HeaderIcon
            icon={<Cog6ToothIcon size={18} color={STYLES.colors.black[500]} />}
            onPress={onSettingsPress}
          />
          <HeaderIcon
            icon={<BellIcon size={18} color={STYLES.colors.black[500]} />}
            onPress={onNotificationPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
