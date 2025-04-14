import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {PasswordHeader, PasswordForm} from '../../molecules';

interface PasswordContentProps {
  onBackPress: () => void;
  onSubmit: (values: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => void;
}

export const PasswordContent: React.FC<PasswordContentProps> = ({
  onBackPress,
  onSubmit,
}) => {
  return (
    <>
      <PasswordHeader title="Cambiar contraseña" onBackPress={onBackPress} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <PasswordForm onSubmit={onSubmit} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
});
