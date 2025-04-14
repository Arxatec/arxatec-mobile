import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
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
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={() => onPress(id)}>
      <Text
        style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: STYLES.colors.blue[100],
  },
  tabButtonText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[600],
  },
  activeTabButtonText: {
    color: STYLES.colors.blue[600],
  },
});
