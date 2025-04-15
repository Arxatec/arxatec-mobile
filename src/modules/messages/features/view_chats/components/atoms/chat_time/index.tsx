import React from 'react';
import {Text} from 'react-native';
import {STYLES} from '@/utils';

interface ChatTimeProps {
  time: string;
}

export const ChatTime: React.FC<ChatTimeProps> = ({time}) => {
  return (
    <Text
      style={{
        fontSize: 12,
        color: STYLES.colors.black[500],
        fontFamily: STYLES.fonts.regular,
      }}>
      {time}
    </Text>
  );
};
