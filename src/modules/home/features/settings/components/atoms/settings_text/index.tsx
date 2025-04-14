import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import {STYLES} from '@/utils';

type TextVariant =
  | 'title'
  | 'menuTitle'
  | 'menuSubtitle'
  | 'profileName'
  | 'profileEmail';

interface SettingsTextProps extends TextProps {
  variant: TextVariant;
  color?: string;
}

export const SettingsText: React.FC<SettingsTextProps> = ({
  variant,
  children,
  style,
  color,
  ...props
}) => {
  const textStyle = () => {
    if (color) {
      return [styles[variant], {color}, style];
    }
    return [styles[variant], style];
  };

  return (
    <Text style={textStyle()} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  menuTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[700],
  },
  menuSubtitle: {
    fontSize: 12,
    color: STYLES.colors.black[500],
    marginTop: 2,
    fontFamily: STYLES.fonts.regular,
  },
  profileName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
  },
  profileEmail: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    marginTop: 2,
    fontFamily: STYLES.fonts.regular,
  },
});
