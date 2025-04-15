import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
    </TouchableOpacity>
  );
};
