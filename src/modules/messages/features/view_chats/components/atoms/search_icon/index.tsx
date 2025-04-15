import React from 'react';
import {TouchableOpacity} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

interface SearchIconProps {
  onPress?: () => void;
  size?: number;
  color?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
  onPress,
  size = 18,
  color = STYLES.colors.black[400],
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MagnifyingGlassIcon size={size} color={color} />
    </TouchableOpacity>
  );
};
