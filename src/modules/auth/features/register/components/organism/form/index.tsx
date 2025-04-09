import {CustomInput, PrimaryButton} from '@/components/atoms';
import {AccountInquiry} from '@/modules/auth/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Routes} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {StyleSheet, View} from 'react-native';

export const Form = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToLogin = () => navigateTo(Routes.Login);
  return (
    <View>
      <View style={style.containerForm}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            width: '100%',
            gap: 16,
          }}>
          <View style={{flex: 1}}>
            <CustomInput
              label="Nombre:"
              placeholder="Ej. Jorge"
              inputMode="text"
              autoComplete="name"
            />
          </View>
          <View style={{flex: 1}}>
            <CustomInput
              label="Apellido:"
              placeholder="Ej. Perez"
              inputMode="text"
              autoComplete="family-name"
            />
          </View>
        </View>
        <View style={style.inputSeparator}>
          <CustomInput
            label="Correo electrónico:"
            placeholder="Ej. email@email.com"
            inputMode="email"
            autoComplete="email"
          />
        </View>

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

      <View style={style.buttonSeparator}>
        <PrimaryButton title="Registrarse" />
      </View>

      <AccountInquiry
        text={'Ya tienes cuenta?'}
        buttonText={'Iniciar sesión'}
        action={navigateToLogin}
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
    fontSize: 12,
    color: STYLES.colors.blue[500],
    fontFamily: STYLES.fonts.regular,
    textAlign: 'center',
  },
});
