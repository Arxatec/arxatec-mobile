import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FolderIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface CaseIconProps {
  color?: string;
  size?: number;
}

export const CaseIcon: React.FC<CaseIconProps> = ({
  color = STYLES.colors.blue[600],
  size = 20,
}) => {
  return (
    <View style={styles.container}>
      <FolderIcon size={size} color={color} strokeWidth={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
