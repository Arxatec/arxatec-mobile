import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface NotificationTextProps {
  text: string;
  type: 'title' | 'description' | 'timestamp';
  numberOfLines?: number;
  lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip';
}

export const NotificationText = ({
  text,
  type,
  numberOfLines,
  lineBreakMode,
}: NotificationTextProps) => {
  let textStyle;

  switch (type) {
    case 'title':
      textStyle = styles.title;
      break;
    case 'description':
      textStyle = styles.description;
      break;
    case 'timestamp':
      textStyle = styles.timestamp;
      break;
    default:
      textStyle = styles.description;
  }

  return (
    <Text
      style={textStyle}
      numberOfLines={numberOfLines}
      lineBreakMode={lineBreakMode}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  description: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    marginTop: 4,
    color: STYLES.colors.black[500],
  },
  timestamp: {
    fontSize: 12,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.regular,
  },
});
