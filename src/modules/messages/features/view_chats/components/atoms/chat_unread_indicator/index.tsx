import React from 'react';
import {StyleSheet, View} from 'react-native';
import {STYLES} from '@/utils';

export interface ChatUnreadIndicatorProps {
  size?: number;
  color?: string;
}

export const ChatUnreadIndicator: React.FC<ChatUnreadIndicatorProps> = ({
  size = 7,
  color = STYLES.colors.blue[600],
}) => {
  return (
    <View
      style={[
        styles.unreadIndicator,
        {width: size, height: size, backgroundColor: color},
      ]}
    />
  );
};

const styles = StyleSheet.create({
  unreadIndicator: {
    borderRadius: 5,
  },
});
