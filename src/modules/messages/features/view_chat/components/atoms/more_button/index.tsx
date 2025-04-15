import React from 'react';
import {TouchableOpacity} from 'react-native';
import {EllipsisVerticalIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

interface MoreButtonProps {
  onPress: () => void;
}

const MoreButton: React.FC<MoreButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <EllipsisVerticalIcon size={24} color={STYLES.colors.black[700]} />
    </TouchableOpacity>
  );
};

export default MoreButton;
