import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STYLES} from '@/utils';

export interface ChatInfoProps {
  name: string;
  message: string;
}

export const ChatInfo: React.FC<ChatInfoProps> = ({name, message}) => {
  return (
    <View style={styles.chatInfo}>
      <Text style={styles.chatName}>{name}</Text>
      <Text style={styles.chatMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[800],
  },
  chatMessage: {
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
  },
});
