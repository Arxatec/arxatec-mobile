import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface HeaderTitleProps extends TextProps {
  title: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  style,
  ...props
}) => {
  return (
    <Text style={[styles.title, style]} {...props}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
});
