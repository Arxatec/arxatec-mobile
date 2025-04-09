import {STYLES} from '@/utils';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  style,
  titleStyle,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {children}
      {title && <Text style={[styles.buttonText, titleStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: STYLES.colors.blue[600],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },

  buttonText: {
    fontSize: 14,
    color: STYLES.colors.white[1],
    fontFamily: STYLES.fonts.semi_bold,
  },
});
