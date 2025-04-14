import React from 'react';
import {View, StyleSheet} from 'react-native';

interface OptionIconProps {
  icon: React.ReactNode;
  backgroundColor: string;
}

export const OptionIcon: React.FC<OptionIconProps> = ({
  icon,
  backgroundColor,
}) => {
  return (
    <View style={[styles.optionIconContainer, {backgroundColor}]}>{icon}</View>
  );
};

const styles = StyleSheet.create({
  optionIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
