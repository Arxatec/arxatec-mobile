import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface HeaderIconProps {
  icon: React.ReactNode;
  onPress: () => void;
}

export const HeaderIcon: React.FC<HeaderIconProps> = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: STYLES.colors.white[1],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: STYLES.colors.black[100],
  },
});
