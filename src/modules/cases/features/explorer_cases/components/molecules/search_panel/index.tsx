import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomDropdown, CustomInput} from '@/components/atoms';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {DropdownOption} from '../../../types';

interface SearchPanelProps {
  selectedType: string;
  onTypeChange: (value: string) => void;
  typeOptions: DropdownOption[];
}

export const SearchPanel: React.FC<SearchPanelProps> = ({
  selectedType,
  onTypeChange,
  typeOptions,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.inputFlex}>
          <CustomInput
            startAdornment={
              <MagnifyingGlassIcon size={18} color={STYLES.colors.black[400]} />
            }
            placeholder="Buscar..."
          />
        </View>
        <View style={styles.inputFlex}>
          <CustomDropdown
            data={typeOptions}
            value={selectedType}
            onChange={onTypeChange}
            placeholder="Tipo de caso"
          />
        </View>
      </View>

      <View style={[styles.inputContainer, {marginTop: 4}]}>
        <CustomInput
          startAdornment={
            <MapPinIcon size={18} color={STYLES.colors.black[400]} />
          }
          placeholder="Ubicación"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  inputFlex: {
    flex: 1,
  },
  inputContainer: {
    height: 43,
  },
});
