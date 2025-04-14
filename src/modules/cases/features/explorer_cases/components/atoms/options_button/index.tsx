import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface OptionsButtonProps {
  onPress: () => void;
  size?: number;
}

export const OptionsButton: React.FC<OptionsButtonProps> = ({
  onPress,
  size = 24,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <EllipsisVerticalIcon size={size} color={STYLES.colors.black[900]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
