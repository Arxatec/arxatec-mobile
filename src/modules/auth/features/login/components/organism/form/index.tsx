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
      <View style={style.containerForm}>
        <CustomInput
          label="Correo electrónico:"
          placeholder="Ej. email@email.com"
          inputMode="email"
          autoComplete="email"
        />

        <View style={style.inputSeparator}>
          <CustomInput
            label="Contraseña: "
            placeholder="Ej. BawW235gS#"
            inputMode="text"
            autoComplete="password"
            isPassword={true}
          />
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', marginTop: 16}}>
          <TouchableOpacity onPress={navigateToForgotPassword}>
            <Text style={style.buttonLinkText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.containerActions}>
        <View>
          <PrimaryButton title="Ingresar" onPress={handleLogin} />
        </View>

        <AccountInquiry
          text={'No tienes cuenta?'}
          buttonText={'Crear cuenta'}
          action={navigateToRegister}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  containerActions: {
    marginTop: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  inputSeparator: {
    marginTop: 16,
  },

  containerForm: {
    marginTop: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  buttonLinkText: {
    fontSize: 14,
    color: STYLES.colors.blue[600],
    fontFamily: STYLES.fonts.regular,
    textAlign: 'center',
  },
});
