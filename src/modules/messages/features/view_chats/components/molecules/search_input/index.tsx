import React from 'react';
import {View} from 'react-native';
import {CustomInput} from '@/components/atoms';
import {SearchIcon} from '../../atoms';

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Buscar...',
}) => {
  return (
    <View
      style={{
        height: 40,
        marginBottom: 4,
      }}>
      <CustomInput
        style={{
          borderColor: '#FFF',
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        startAdornment={<SearchIcon />}
      />
    </View>
  );
};
