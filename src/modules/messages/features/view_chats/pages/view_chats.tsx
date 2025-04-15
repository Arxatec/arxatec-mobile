import {PageContainer} from '@/components/layout';
import {useState} from 'react';
import {View} from 'react-native';
import {ChatList, Header} from '../components';
import {STYLES} from '@/utils';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';
import {SearchInput} from '../components/molecules';
import {chatsData} from '../utils';

export default function ViewChats() {
  const [searchText, setSearchText] = useState('');
  const {navigateTo} = useAppNavigation();
  const navigateToChat = () => navigateTo(Messages.ViewChat);

  const filteredChats = chatsData.filter(chat =>
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
      <View
        style={{
          flex: 1,
        }}>
        <Header title="Conversaciones" />
        <SearchInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Buscar..."
        />
        <ChatList chats={filteredChats} onChatPress={handleChatPress} />
      </View>
    </PageContainer>
  );
}
