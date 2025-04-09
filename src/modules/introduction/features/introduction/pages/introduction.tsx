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

export default function Introduction() {
  const {navigateTo} = useAppNavigation();
  const navigateToAuthOptions = () => navigateTo(Routes.AuthOptions);
  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor={STYLES.colors.white[1]}
        translucent={false}
        barStyle="dark-content"
      />
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg',
          }}></Image>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Conecta clientes y abogados en un solo lugar
          </Text>
          <Text style={styles.text}>
            Maneja tus casos con eficiencia, accede a asesoría legal al instante
            y forma parte de una comunidad activa para compartir conocimientos.
          </Text>
        </View>
        <View>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
  },
  container: {
    flex: 3,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 6,
    paddingHorizontal: 16,
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
    marginTop: 32,
  },
  disclaimerText: {
    fontSize: 12,
    textAlign: 'center',
    color: STYLES.colors.black[500],
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    fontFamily: STYLES.fonts.regular,
    marginTop: 10,
  },
  disclamerTextLink: {
    fontFamily: STYLES.fonts.semi_bold,
    textDecorationLine: 'underline',
  },
});
