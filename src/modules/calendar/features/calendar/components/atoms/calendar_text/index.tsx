import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import {STYLES} from '@/utils/styles-utils';

type TextVariant =
  | 'title'
  | 'subtitle'
  | 'weekday'
  | 'date'
  | 'eventTitle'
  | 'eventDescription'
  | 'eventTime'
  | 'noEvents';

interface CalendarTextProps extends TextProps {
  variant: TextVariant;
  active?: boolean;
}

export const CalendarText: React.FC<CalendarTextProps> = ({
  variant,
  children,
  active = false,
  style,
  ...props
}) => {
  const textStyle = () => {
    let baseStyle = styles[variant];
    if (active && (variant === 'weekday' || variant === 'date')) {
      return [baseStyle, {color: STYLES.colors.white[1]}, style];
    }
    return [baseStyle, style];
  };

  return (
    <Text style={textStyle()} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  subtitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
    marginBottom: 4,
  },
  weekday: {
    fontSize: 13,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[500],
    marginBottom: 4,
  },
  date: {
    fontSize: 15,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
  },
  eventTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
  },
  eventTime: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[700],
  },
  noEvents: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[400],
    textAlign: 'center',
  },
});
