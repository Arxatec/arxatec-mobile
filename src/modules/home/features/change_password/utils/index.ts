import {PasswordFormValues} from '../types';

export const validatePassword = (password: string): boolean => {
  // Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula y un número
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

export const validatePasswordForm = (
  values: PasswordFormValues,
): {isValid: boolean; errors: Record<string, string>} => {
  const errors: Record<string, string> = {};

  if (!values.currentPassword) {
    errors.currentPassword = 'La contraseña actual es requerida';
  }

  if (!values.newPassword) {
    errors.newPassword = 'La nueva contraseña es requerida';
  } else if (!validatePassword(values.newPassword)) {
    errors.newPassword =
      'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un número';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Debes confirmar la nueva contraseña';
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
