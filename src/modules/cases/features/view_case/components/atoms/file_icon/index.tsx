import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DocumentTextIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface FileIconProps {
  size?: number;
  color?: string;
}

export const FileIcon: React.FC<FileIconProps> = ({
  size = 20,
  color = STYLES.colors.blue[600],
}) => {
  return (
    <View style={styles.fileIconContainer}>
      <DocumentTextIcon size={size} color={color} strokeWidth={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  fileIconContainer: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
