import {CustomAvatar, CustomInput} from '@/components/atoms';
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

export default function EditProfile() {
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
          <Text style={styles.title}>Editar perfil</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <CustomAvatar
            avatar="https://randomuser.me/api/portraits/men/1.jpg"
            size={80}
            username="María López"
          />
          <Text style={styles.name}>María López</Text>
          <Text style={styles.role}>Abogado</Text>
        </View>
        <View
          style={{
            marginTop: 4,
            borderRadius: 8,
            backgroundColor: '#FFF',
            padding: 16,
            gap: 8,
          }}>
          <CustomInput placeholder="Ej. Juan" label="Nombre" />
          <CustomInput placeholder="Ej. Perez" label="Apellido" />
          <CustomInput
            label="Correo electrónico"
            placeholder="Ej. juanperez@email.com"
          />
        </View>
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 9,
  },
  name: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginTop: 8,
  },
  role: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.regular,
  },
});
