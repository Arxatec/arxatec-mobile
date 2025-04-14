import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {useNavigation} from '@react-navigation/native';

interface Client {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const clients: Client[] = [
  {
    id: '1',
    name: 'María López',
    email: 'maria.lopez@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: '2',
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '3',
    name: 'Ana García',
    email: 'ana.garcia@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '4',
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '5',
    name: 'Laura Martínez',
    email: 'laura.martinez@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '6',
    name: 'Diego Sánchez',
    email: 'diego.sanchez@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '7',
    name: 'Carmen Fernández',
    email: 'carmen.fernandez@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '8',
    name: 'Roberto Morales',
    email: 'roberto.morales@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '9',
    name: 'Isabel Torres',
    email: 'isabel.torres@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '10',
    name: 'Miguel Herrera',
    email: 'miguel.herrera@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '11',
    name: 'Patricia Ruiz',
    email: 'patricia.ruiz@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '12',
    name: 'Fernando Castro',
    email: 'fernando.castro@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: '13',
    name: 'Sofía Ortiz',
    email: 'sofia.ortiz@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: '14',
    name: 'Alejandro Medina',
    email: 'alejandro.medina@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: '15',
    name: 'Valentina Núñez',
    email: 'valentina.nunez@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: '16',
    name: 'Gabriel Jiménez',
    email: 'gabriel.jimenez@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: '17',
    name: 'Lucía Romero',
    email: 'lucia.romero@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: '18',
    name: 'Andrés Vargas',
    email: 'andres.vargas@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: '19',
    name: 'Elena Moreno',
    email: 'elena.moreno@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: '20',
    name: 'Javier Reyes',
    email: 'javier.reyes@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: '21',
    name: 'Daniela Cruz',
    email: 'daniela.cruz@email.com',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: '22',
    name: 'Ricardo Flores',
    email: 'ricardo.flores@email.com',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
];

const ClientItem = ({client}: {client: Client}) => (
  <View style={styles.clientItem}>
    <CustomAvatar avatar={client.avatar} size={50} username={client.name} />
    <View style={styles.clientInfo}>
      <Text style={styles.clientName}>{client.name}</Text>
      <Text style={styles.clientEmail}>{client.email}</Text>
    </View>
  </View>
);

export default function ViewClients() {
  const {goBack} = useNavigation();
  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={goBack}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Tus clientes</Text>
        </View>
      </View>

      <FlatList
        data={clients}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ClientItem client={item} />}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
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
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },
  clientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 4,
  },
  clientInfo: {
    marginLeft: 16,
  },
  clientName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[800],
  },
  clientEmail: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
  },
  contentContainer: {
    borderRadius: 16,
  },
});
