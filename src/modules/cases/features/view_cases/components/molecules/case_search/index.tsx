import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {CustomInput} from '@/components/atoms';

interface CaseSearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const CaseSearch: React.FC<CaseSearchProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <CustomInput
        value={value}
        onChangeText={onChangeText}
        startAdornment={
          <MagnifyingGlassIcon size={18} color={STYLES.colors.black[400]} />
        }
        placeholder="Buscar..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
  },
});
