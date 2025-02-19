import {CustomInput, PrimaryButton} from '@/components/atoms';
import {StyleSheet} from 'react-native';

interface Props {
  handleStep: () => void;
}

export const EnterEmailStep: React.FC<Props> = ({handleStep}) => {
  return (
    <>
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
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
});
