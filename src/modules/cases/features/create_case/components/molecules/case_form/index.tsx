import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomDropdown, CustomInput, CustomTextArea} from '@/components/atoms';
import {CASE_TYPES} from '../../../utils';

interface CaseFormProps {
  selectedType: string;
  setSelectedType: (value: string) => void;
}

export const CaseForm: React.FC<CaseFormProps> = ({
  selectedType,
  setSelectedType,
}) => {
  return (
    <View style={styles.formContainer}>
      <CustomDropdown
        label="Elige el tipo de caso"
        data={CASE_TYPES}
        value={selectedType}
        onChange={setSelectedType}
        placeholder="Seleccionar"
      />
      <CustomInput label="Título" placeholder="Ej. Caso laboral" />
      <CustomTextArea
        label="Descripción"
        placeholder="Escribe una descripción..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 4,
    gap: 8,
  },
});
