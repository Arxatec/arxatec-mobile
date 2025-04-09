import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {STYLES} from '@/utils';

export interface ChatTimeProps {
  time: string;
}

export const ChatTime: React.FC<ChatTimeProps> = ({time}) => {
  return <Text style={styles.chatTime}>{time}</Text>;
};

const styles = StyleSheet.create({
  chatTime: {
    color: STYLES.colors.black[500],
    fontSize: 12,
    fontFamily: STYLES.fonts.regular,
  },
});
