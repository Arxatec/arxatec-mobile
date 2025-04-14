import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

interface BackButtonProps extends TouchableOpacityProps {
  size?: number;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  size = 20,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <ArrowLeftIcon size={size} color={STYLES.colors.black[900]} />
    </TouchableOpacity>
  );
};
