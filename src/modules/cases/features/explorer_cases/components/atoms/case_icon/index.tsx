import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FolderIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface CaseIconProps {
  size?: number;
}

export const CaseIcon: React.FC<CaseIconProps> = ({size = 20}) => {
  return (
    <View style={styles.caseIconContainer}>
      <FolderIcon size={size} color={STYLES.colors.blue[600]} strokeWidth={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  caseIconContainer: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
