import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Notification} from '../../../types';
import {NotificationItem} from '../../molecules';

interface NotificationListProps {
  notifications: Notification[];
}

export const NotificationList = ({notifications}: NotificationListProps) => {
  const renderItem = ({item}: {item: Notification}) => (
    <NotificationItem notification={item} />
  );

  return (
    <FlatList
      style={styles.flatList}
      data={notifications}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    borderRadius: 10,
  },
  listContainer: {
    paddingVertical: 0,
  },
});
