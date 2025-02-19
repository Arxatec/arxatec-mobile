import {PrimaryButton} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Routes} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Introduction() {
  const insets = useSafeAreaInsets();
  const {navigateTo} = useAppNavigation();
  const navigateToAuthOptions = () => navigateTo(Routes.AuthOptions);
  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <View style={[styles.imageContainer, {marginTop: insets.top}]}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg',
          }}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>
          Conecta clientes y abogados en un solo lugar
        </Text>
        <Text style={styles.text}>
          Maneja tus casos con eficiencia, accede a asesoría legal al instante y
          forma parte de una comunidad activa para compartir conocimientos.
        </Text>
        <PrimaryButton
          onPress={navigateToAuthOptions}
          title="Empezar ahora"
          style={styles.button}
        />
        <Text style={styles.disclaimerText}>
          Al continuar, aceptas nuestros{' '}
          <Text onPress={() => {}} style={styles.disclamerTextLink}>
            términos y condiciones
          </Text>{' '}
          y nuestra{' '}
          <Text onPress={() => {}} style={styles.disclamerTextLink}>
            política de privacidad
          </Text>
          .
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
  },
  container: {
    flex: 4,
    paddingHorizontal: 32,
    paddingVertical: 24,
    justifyContent: 'center',
    backgroundColor: STYLES.colors.white[1],
  },
  imageContainer: {
    flex: 6,
    paddingHorizontal: 32,
    backgroundColor: STYLES.colors.white[1],
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  title: {
    fontFamily: STYLES.fonts.extra_bold,
    letterSpacing: -0.5,
    fontSize: 20,
    color: STYLES.colors.black[900],
    textAlign: 'center',
    lineHeight: 24,
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[700],
  },
  button: {
    marginTop: 24,
  },
  disclaimerText: {
    fontSize: 12,
    textAlign: 'center',
    color: STYLES.colors.black[500],
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontFamily: STYLES.fonts.regular,
    marginTop: 24,
  },
  disclamerTextLink: {
    fontFamily: STYLES.fonts.semi_bold,
    textDecorationLine: 'underline',
  },
});
