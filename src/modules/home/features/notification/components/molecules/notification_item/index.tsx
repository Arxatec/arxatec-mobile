import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomAvatar} from '@/components/atoms';
import {Notification} from '../../../types';
import {NotificationDot, NotificationIcon, NotificationText} from '../../atoms';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = ({notification}: NotificationItemProps) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        {notification.user ? (
          <CustomAvatar
            avatar={notification.user.avatar}
            size={45}
            username={notification.user.name}
          />
        ) : (
          <NotificationIcon type={notification.type} />
        )}
      </View>
      <View style={styles.textContainer}>
        <NotificationText text={notification.title} type="title" />
        <NotificationText
          text={notification.description}
          type="description"
          numberOfLines={1}
          lineBreakMode="tail"
        />
      </View>
      <View style={styles.metaContainer}>
        <NotificationText text={notification.timestamp} type="timestamp" />
        <NotificationDot isNew={notification.isNew} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  metaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 4,
  },
});
