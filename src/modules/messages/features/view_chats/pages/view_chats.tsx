import {PageContainer} from '@/components/layout';
import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ChatList, Header, type Chat} from '../components';
import {STYLES} from '@/utils';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';
import {CustomInput} from '@/components/atoms';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
const chats: Chat[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    message:
      'Abogado, tengo algunas preguntas sobre el contrato de arrendamiento que estamos revisando.',
    time: '10:30 AM',
    image:
      'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seen: true,
  },
  {
    id: '2',
    name: 'Laura González',
    message:
      '¿Podemos hablar sobre el caso de la herencia este viernes? Necesito saber más detalles.',
    time: '09:15 AM',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seen: true,
  },
  {
    id: '3',
    name: 'Carlos Méndez',
    message:
      'Tengo dudas sobre la apelación que estamos preparando. ¿Puedes darme una actualización?',
    time: '08:45 AM',
    image:
      'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seen: false,
  },
  {
    id: '4',
    name: 'Ana Rodríguez',
    message:
      'Gracias por la ayuda con el divorcio, pero tengo algunas preguntas adicionales.',
    time: '07:30 AM',
    image:
      'https://images.pexels.com/photos/2584278/pexels-photo-2584278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seen: true,
  },
  {
    id: '5',
    name: 'David Herrera',
    message:
      'Abogado, tengo una consulta urgente sobre un caso de accidentes de tráfico.',
    time: '06:45 AM',
    image:
      'https://images.pexels.com/photos/7590864/pexels-photo-7590864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seen: true,
  },
];

export default function ViewChats() {
  const [searchText, setSearchText] = useState('');
  const {navigateTo} = useAppNavigation();
  const navigateToChat = () => navigateTo(Messages.ViewChat);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleChatPress = (chatId: string) => {
    console.log('Chat pressed:', chatId);
    navigateToChat();
  };

  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.container}>
        <Header title="Conversaciones" />
        <View
          style={{
            height: 40,
            marginBottom: 4,
          }}>
          <CustomInput
            style={{
              borderColor: '#FFF',
            }}
            placeholder="Buscar..."
            startAdornment={
              <TouchableOpacity>
                <MagnifyingGlassIcon
                  size={18}
                  color={STYLES.colors.black[400]}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <ChatList chats={filteredChats} onChatPress={handleChatPress} />
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
