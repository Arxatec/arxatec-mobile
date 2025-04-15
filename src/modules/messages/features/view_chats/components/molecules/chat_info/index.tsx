import React from 'react';
import {Text, View} from 'react-native';
import {STYLES} from '@/utils';

interface ChatInfoProps {
  name: string;
  message: string;
}

export const ChatInfo: React.FC<ChatInfoProps> = ({name, message}) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 12,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: STYLES.fonts.semi_bold,
          color: STYLES.colors.black[800],
        }}
        numberOfLines={1}>
        {name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontFamily: STYLES.fonts.regular,
          color: STYLES.colors.black[500],
          marginTop: 4,
        }}
        numberOfLines={1}>
        {message}
      </Text>
    </View>
  );
};
