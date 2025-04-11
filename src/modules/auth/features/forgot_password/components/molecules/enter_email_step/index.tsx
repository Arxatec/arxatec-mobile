import {CustomInput, PrimaryButton} from '@/components/atoms';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  handleStep: () => void;
}

export const EnterEmailStep: React.FC<Props> = ({handleStep}) => {
  return (
    <View style={styles.container}>
      <CustomInput
        label="Correo electrónico"
        placeholder="Ej. email@email.com"
        inputMode="email"
        autoComplete="email"
      />
      <PrimaryButton
        title="Restablecer contraseña"
        style={styles.button}
        onPress={handleStep}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});
