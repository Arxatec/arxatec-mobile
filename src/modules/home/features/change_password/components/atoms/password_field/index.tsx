import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomInput} from '@/components/atoms';

interface PasswordFieldProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  placeholder = 'Ej. sawGaq%!#A13',
  value,
  onChangeText,
}) => {
  return (
    <CustomInput
      label={label}
      placeholder={placeholder}
      isPassword
      value={value}
      onChangeText={onChangeText}
    />
  );
};
