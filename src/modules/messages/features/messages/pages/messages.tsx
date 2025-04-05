import {PageContainer} from '@/components/layout';
import {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {STYLES} from '@/utils';

const chats = [
  {
    id: '1',
    name: 'Sophia Williams',
    message: 'Hey! Are we still on for coffee this Saturday?',
    time: '11:43 AM',
    image: 'https://via.placeholder.com/40',
    seen: true,
  },
  {
    id: '2',
    name: 'Mia Kennedy',
    message: 'Guess what? I just signed up for that yoga...',
    time: '09:21 AM',
    image: 'https://via.placeholder.com/40',
    seen: true,
  },
  {
    id: '3',
    name: 'Olivia Thompson',
    message: 'Hey, quick question: Have you seen my sk...',
    time: '08:21 AM',
    image: 'https://via.placeholder.com/40',
    seen: false,
  },
  {
    id: '4',
    name: 'Emma Robinson',
    message: 'Can you believe that concert sold out in 5...',
    time: '07:00 AM',
    image: 'https://via.placeholder.com/40',
    seen: true,
  },
];

export default function Messages() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <PageContainer paddingHorizontal={16}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Conversaciones</Text>
          <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
            <MagnifyingGlassIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
        </View>

        {searchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search chats..."
            value={searchText}
            onChangeText={setSearchText}
          />
        )}

        <FlatList
          data={filteredChats}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.chatItem}>
              <CustomAvatar
                avatar={item.image}
                size={50}
                username={item.name}
              />
              <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatMessage}>{item.message}</Text>
              </View>
              <View style={styles.chatContainerTime}>
                {!item.seen && <View style={styles.unreadIndicator} />}
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainerTime: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  searchInput: {
    backgroundColor: STYLES.colors.black[200],
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    fontFamily: STYLES.fonts.regular,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 4,
    borderRadius: 10,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[800],
  },
  chatMessage: {
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
  },
  chatTime: {
    color: STYLES.colors.black[500],
    fontSize: 12,
    fontFamily: STYLES.fonts.regular,
  },
  unreadIndicator: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: STYLES.colors.blue[600],
  },
});
