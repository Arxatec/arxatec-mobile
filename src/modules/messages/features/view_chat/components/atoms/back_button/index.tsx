import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

interface BackButtonProps {
  onPress: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
    </TouchableOpacity>
  );
};

export default BackButton;
