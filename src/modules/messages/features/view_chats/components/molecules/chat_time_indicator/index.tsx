import React from 'react';
import {View} from 'react-native';
import {ChatTime, ChatUnreadIndicator} from '../../atoms';

interface ChatTimeIndicatorProps {
  time: string;
  seen: boolean;
}

export const ChatTimeIndicator: React.FC<ChatTimeIndicatorProps> = ({
  time,
  seen,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <ChatTime time={time} />
      <ChatUnreadIndicator seen={seen} />
    </View>
  );
};
