import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ChatBubble} from '../../atoms';
import {Message} from '../../../types';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({message}) => {
  const isSent = message.type === 'sent';

  return (
    <View
      style={[styles.messageContainer, isSent ? styles.sent : styles.received]}>
      <ChatBubble text={message.text} time={message.time} type={message.type} />
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'column',
    marginVertical: 4,
  },
  sent: {
    alignItems: 'flex-end',
  },
  received: {
    alignItems: 'flex-start',
  },
});

export default MessageItem;
