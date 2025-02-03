import {STYLES} from '@/utils';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: STYLES.colors.blue[500],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: STYLES.colors.white[1],
    fontFamily: STYLES.fonts.semi_bold,
  },
});
