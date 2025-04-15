import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {ChatHeader, MessageInput} from '../components/molecules';
import {MessageList} from '../components/organisms';
import {Message, mockMessages} from '../types';
import {pickDocument} from '../utils';

const ViewChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const {navigateTo} = useAppNavigation();
  const navigateToChats = () => navigateTo(Messages.ViewChats);
  const navigateToInfoChat = () => navigateTo(Messages.InfoChat);

  useEffect(() => {
    setMessages(mockMessages);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'Me',
      text: input,
      time: 'Now',
      type: 'sent',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const handleAttach = async () => {
    await pickDocument();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader
        title="Juan Perez"
        onBackPress={navigateToChats}
        onMorePress={navigateToInfoChat}
      />
      <MessageList messages={messages} />
      <MessageInput
        value={input}
        onChangeText={setInput}
        onSendPress={handleSend}
        onAttachPress={handleAttach}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
    paddingHorizontal: 16,
  },
});

export default ViewChat;
