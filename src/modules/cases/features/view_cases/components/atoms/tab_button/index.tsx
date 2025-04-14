import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {STYLES} from '@/utils';
import {TabId} from '../../../types';

interface TabButtonProps {
  id: TabId;
  label: string;
  isActive: boolean;
  onPress: (id: TabId) => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  id,
  label,
  isActive,
  onPress,
}) => {
  const handlePress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={handlePress}>
      <Text style={[styles.text, isActive && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: STYLES.colors.blue[100],
  },
  text: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[600],
  },
  activeText: {
    color: STYLES.colors.blue[600],
  },
});
