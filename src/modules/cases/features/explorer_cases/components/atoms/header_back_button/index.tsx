import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

interface HeaderBackButtonProps {
  onPress: () => void;
}

export const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
