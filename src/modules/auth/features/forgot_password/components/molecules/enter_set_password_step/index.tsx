import {CustomInput, PrimaryButton} from '@/components/atoms';
import {StyleSheet, View} from 'react-native';

interface Props {
  handleStep: () => void;
}

export const EnterSetPassword: React.FC<Props> = ({handleStep}) => {
  return (
    <>
      <CustomInput
        label="Contraseña: "
        placeholder="Ej. BawW235gS#"
        inputMode="text"
        autoComplete="password"
        isPassword={true}
      />
      <View style={styles.inputDivider}>
        <CustomInput
          label="Confirmar contraseña: "
          placeholder="Ej. BawW235gS#"
          inputMode="text"
          autoComplete="password"
          isPassword={true}
        />
      </View>

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
  inputDivider: {
    marginTop: 16,
  },
});
