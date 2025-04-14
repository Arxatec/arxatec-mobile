import {CustomInput, PrimaryButton} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {AccountInquiry} from '@/modules/auth/components/atoms';
import {Routes} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Toast} from 'toastify-react-native';

export const Form = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(Routes.Register);
  const navigateToTabs = () => navigateTo(Routes.Tabs);
  const navigateToForgotPassword = () => navigateTo(Routes.ForgotPassword);

  const handleLogin = () => {
    Toast.show({
      type: 'success',
      text1: '¡Bienvenido!',
      text2: 'Has iniciado sesión correctamente',
      position: 'bottom',
      visibilityTime: 3000,
      bottomOffset: 50,
    });
    navigateToTabs();
  };

  return (
    <View>
      <View style={styles.containerForm}>
        <CustomInput
          label="Correo electrónico:"
          placeholder="Ej. email@email.com"
          inputMode="email"
          autoComplete="email"
        />

        <View style={styles.inputSeparator}>
          <CustomInput
            label="Contraseña: "
            placeholder="Ej. BawW235gS#"
            inputMode="text"
            autoComplete="password"
            isPassword={true}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={navigateToForgotPassword}>
            <Text style={styles.buttonLinkText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerActions}>
        <View>
          <PrimaryButton title="Ingresar" onPress={handleLogin} />
        </View>

        <AccountInquiry
          text="¿No tienes cuenta?"
          buttonText="Crear cuenta"
          action={navigateToRegister}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    marginTop: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  inputSeparator: {
    marginTop: 16,
  },
  forgotPasswordContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 16,
  },
  buttonLinkText: {
    fontSize: 12,
    color: STYLES.colors.blue[500],
    fontFamily: STYLES.fonts.regular,
    textAlign: 'center',
  },
  containerActions: {
    marginTop: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
});
