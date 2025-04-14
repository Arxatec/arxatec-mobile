import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomInput} from '@/components/atoms';

export const ClientForm: React.FC = () => {
  return (
    <View style={styles.formContainer}>
      <CustomInput label="Nombre del cliente" placeholder="Ej. Juan Pérez" />
      <CustomInput label="Email" placeholder="Ej. juan.perez@gmail.com" />
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
