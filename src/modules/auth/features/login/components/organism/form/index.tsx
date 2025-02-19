import {CustomInput, PrimaryButton} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {AccountInquiry} from '@/modules/auth/components/atoms';
import {Routes} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Form = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(Routes.Register);
  const navigateToForgotPassword = () => navigateTo(Routes.ForgotPassword);
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
      </View>

      <View style={{flex: 1, alignItems: 'flex-end', marginTop: 16}}>
        <TouchableOpacity onPress={navigateToForgotPassword}>
          <Text style={style.buttonLinkText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <View style={style.buttonSeparator}>
        <PrimaryButton title="Ingresar" />
      </View>

      <AccountInquiry
        text={'No tienes cuenta?'}
        buttonText={'Crear cuenta'}
        action={navigateToRegister}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    marginTop: 40,
  },
  inputSeparator: {
    marginTop: 16,
  },
  buttonSeparator: {
    marginTop: 32,
  },
  containerForm: {
    marginTop: 32,
  },
  buttonLinkText: {
    fontSize: 14,
    color: STYLES.colors.blue[600],
    fontFamily: STYLES.fonts.regular,
    textAlign: 'center',
  },
});
