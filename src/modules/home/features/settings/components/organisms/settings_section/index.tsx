import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface SettingsSectionProps {
  children: React.ReactNode;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({children}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 4,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
});
