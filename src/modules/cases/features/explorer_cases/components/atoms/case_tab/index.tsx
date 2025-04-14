import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {STYLES} from '@/utils';
import {TabId, TabItem} from '../../../types';

interface CaseTabProps {
  tab: TabItem;
  isActive: boolean;
  onPress: (id: TabId) => void;
}

export const CaseTab: React.FC<CaseTabProps> = ({tab, isActive, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTabButton]}
      onPress={() => onPress(tab.id)}>
      <Text
        style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>
        {tab.label}
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
