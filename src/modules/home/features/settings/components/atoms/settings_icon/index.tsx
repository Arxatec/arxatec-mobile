import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface SettingsIconProps {
  icon: React.ReactNode;
  color?: string;
}

export const SettingsIcon: React.FC<SettingsIconProps> = ({
  icon,
  color = STYLES.colors.blue[50],
}) => {
  return (
    <View
      style={[styles.iconContainer, color ? {backgroundColor: color} : null]}>
      {icon}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: STYLES.colors.blue[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
});
