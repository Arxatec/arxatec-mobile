import React from 'react';
import {View, StyleSheet} from 'react-native';
import {InfoSection} from '../../molecules/info_section';
import {MediaSection} from '../../molecules/media_section';
import {NotificationToggle} from '../../atoms/notification_toggle';
import {MediaItem as MediaItemType} from '../../../types';

interface ContentSectionProps {
  description: string;
  email: string;
  phone: string;
  media: MediaItemType[];
  notificationsEnabled: boolean;
  onNotificationsChange: (value: boolean) => void;
  onViewAllMedia?: () => void;
  onMediaItemPress?: (item: MediaItemType) => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  description,
  email,
  phone,
  media,
  notificationsEnabled,
  onNotificationsChange,
  onViewAllMedia,
  onMediaItemPress,
}) => {
  return (
    <View style={styles.container}>
      <InfoSection description={description} email={email} phone={phone} />

      <MediaSection
        media={media}
        onViewAll={onViewAllMedia}
        onItemPress={onMediaItemPress}
      />

      <NotificationToggle
        value={notificationsEnabled}
        onValueChange={onNotificationsChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
