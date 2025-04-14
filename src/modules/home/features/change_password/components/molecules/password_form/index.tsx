import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {PasswordField} from '../../atoms';
import {PrimaryButton} from '@/components/atoms';
import {validatePasswordForm} from '../../../utils';
import {PasswordFormValues} from '../../../types';
import {STYLES} from '@/utils';

interface PasswordFormProps {
  onSubmit: (values: PasswordFormValues) => void;
}

export const PasswordForm: React.FC<PasswordFormProps> = ({onSubmit}) => {
  const [values, setValues] = useState<PasswordFormValues>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof PasswordFormValues) => (text: string) => {
    setValues(prev => ({...prev, [field]: text}));
    // Limpiar el error cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => ({...prev, [field]: ''}));
    }
  };

  const handleSubmit = () => {
    const validation = validatePasswordForm(values);
    if (validation.isValid) {
      onSubmit(values);
    } else {
      setErrors(validation.errors);
    }
  };

  return (
    <>
      <View style={styles.singleFieldContainer}>
        <PasswordField
          label="Contraseña actual"
          value={values.currentPassword}
          onChangeText={handleChange('currentPassword')}
        />
        {errors.currentPassword ? (
          <Text style={styles.errorText}>{errors.currentPassword}</Text>
        ) : null}
      </View>
      <View style={styles.multiFieldContainer}>
        <PasswordField
          label="Nueva contraseña"
          value={values.newPassword}
          onChangeText={handleChange('newPassword')}
        />
        {errors.newPassword ? (
          <Text style={styles.errorText}>{errors.newPassword}</Text>
        ) : null}
        <PasswordField
          label="Confirma tu nueva contraseña"
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
        />
        {errors.confirmPassword ? (
          <Text style={styles.errorText}>{errors.confirmPassword}</Text>
        ) : null}
      </View>
      <PrimaryButton
        style={styles.button}
        title="Cambiar contraseña"
        onPress={handleSubmit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  singleFieldContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 4,
  },
  multiFieldContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    gap: 8,
    marginBottom: 4,
  },
  button: {
    marginTop: 4,
  },
  errorText: {
    color: '#E53E3E',
    fontSize: 12,
    marginTop: 4,
    fontFamily: STYLES.fonts.regular,
  },
});
