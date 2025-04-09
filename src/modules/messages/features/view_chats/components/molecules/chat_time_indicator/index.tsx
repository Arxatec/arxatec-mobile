import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ChatTime} from '../../atoms/chat_time';
import {ChatUnreadIndicator} from '../../atoms/chat_unread_indicator';

export interface ChatTimeIndicatorProps {
  time: string;
  seen: boolean;
}

export const ChatTimeIndicator: React.FC<ChatTimeIndicatorProps> = ({
  time,
  seen,
}) => {
  return (
    <View style={styles.chatContainerTime}>
      {!seen && <ChatUnreadIndicator />}
      <ChatTime time={time} />
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainerTime: {
    alignItems: 'flex-end',
  },
});
