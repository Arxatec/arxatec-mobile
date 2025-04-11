import {CustomInput, PrimaryButton} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';

export default function ChangePassword() {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(Home.Settings);
  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToDashboard}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
          </TouchableOpacity>
          <Text style={styles.title}>Cambiar contraseña</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 8,
            padding: 16,
          }}>
          <CustomInput
            placeholder="Ej. sawGaq%!#A13"
            label="Contraseña actual"
            isPassword
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            borderRadius: 8,
            padding: 16,
            gap: 8,
            marginTop: 4,
          }}>
          <CustomInput
            placeholder="Ej. sawGaq%!#A13"
            label="Nueva contraseña"
            isPassword
          />
          <CustomInput
            placeholder="Ej. sawGaq%!#A13"
            label="Confirma tu nueva contraseña"
            isPassword
          />
        </View>
        <PrimaryButton
          style={{
            marginTop: 4,
          }}
          title="Cambiar contraseña"></PrimaryButton>
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
});
