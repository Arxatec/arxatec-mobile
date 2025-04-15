import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {ActionProps} from '../../../types';

export const ActionButton: React.FC<ActionProps> = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: STYLES.colors.black[100],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: STYLES.colors.black[900],
    fontFamily: STYLES.fonts.medium,
  },
});
