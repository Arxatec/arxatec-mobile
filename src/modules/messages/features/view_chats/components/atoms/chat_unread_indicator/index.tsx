import React from 'react';
import {View} from 'react-native';
import {STYLES} from '@/utils';

interface ChatUnreadIndicatorProps {
  seen: boolean;
}

export const ChatUnreadIndicator: React.FC<ChatUnreadIndicatorProps> = ({
  seen,
}) => {
  if (seen) return null;

  return (
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: STYLES.colors.blue[600],
        marginLeft: 8,
      }}
    />
  );
};
