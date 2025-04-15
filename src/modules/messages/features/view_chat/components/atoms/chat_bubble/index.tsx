import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface ChatBubbleProps {
  text: string;
  time: string;
  type: 'sent' | 'received';
}

const ChatBubble: React.FC<ChatBubbleProps> = ({text, time, type}) => {
  const isSent = type === 'sent';

  return (
    <View
      style={[
        styles.bubble,
        isSent ? styles.sentBubble : styles.receivedBubble,
      ]}>
      <Text
        style={[
          styles.messageText,
          isSent ? styles.sentText : styles.receivedText,
        ]}>
        {text}
      </Text>
      <Text
        style={[styles.time, isSent ? styles.sentTime : styles.receivedTime]}>
        {time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    padding: 12,
    borderRadius: 10,
    maxWidth: '90%',
  },
  sentBubble: {
    backgroundColor: STYLES.colors.blue[600],
    marginTop: 8,
  },
  receivedBubble: {
    backgroundColor: STYLES.colors.black[100],
    marginTop: 8,
  },
  messageText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
  },
  sentText: {
    color: STYLES.colors.white[1],
  },
  receivedText: {
    color: STYLES.colors.black[900],
  },
  time: {
    fontFamily: STYLES.fonts.light,
    marginTop: 6,
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  sentTime: {
    color: STYLES.colors.white[1],
  },
  receivedTime: {
    color: STYLES.colors.black[500],
  },
});

export default ChatBubble;
