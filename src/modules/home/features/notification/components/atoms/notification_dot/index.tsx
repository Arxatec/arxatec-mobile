import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface NotificationDotProps {
  isNew: boolean;
}

export const NotificationDot = ({isNew}: NotificationDotProps) => {
  if (!isNew) return null;

  return <View style={styles.dot} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: STYLES.colors.blue[600],
  },
});
