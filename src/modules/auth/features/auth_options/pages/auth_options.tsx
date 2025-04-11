import {PrimaryButton} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Header} from '@/modules/auth/components/atoms';
import {Routes} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {Image, StyleSheet, Text, View} from 'react-native';
import {EnvelopeIcon} from 'react-native-heroicons/solid';
import googleIcon from '@/assets/icons/google_icon.png';
import facebookIcon from '@/assets/icons/facebook_icon.png';

export default function AuthOptions() {
  const {navigateTo} = useAppNavigation();
  const navigateToRegister = () => navigateTo(Routes.Register);
  const navigateToIntroduction = () => navigateTo(Routes.Introduction);
  return (
    <PageContainer>
      <Header
        title="Ingresa fácilmente"
        text="Accede de forma rápida y segura eligiendo tu método preferido."
        action={navigateToIntroduction}
      />
      <View style={styles.containerOptions}>
        <PrimaryButton style={styles.button}>
          <Image source={googleIcon} style={styles.iconLogo} />
          <Text style={styles.buttonText}>Ingresar con Google</Text>
          <View />
        </PrimaryButton>

        <PrimaryButton style={styles.button}>
          <Image source={facebookIcon} style={styles.iconLogo} />
          <Text style={styles.buttonText}>Ingresar con Facebook</Text>
          <View />
        </PrimaryButton>

        <PrimaryButton style={styles.button} onPress={navigateToRegister}>
          <EnvelopeIcon size={20} color={STYLES.colors.black[900]} />
          <Text style={styles.buttonText}>Ingresar con correo electrónico</Text>
          <View />
        </PrimaryButton>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  containerOptions: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginTop: 4,
    gap: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    backgroundColor: '#FFF',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
  },
  iconLogo: {
    width: 20,
    height: 20,
    objectFit: 'cover',
  },
});
