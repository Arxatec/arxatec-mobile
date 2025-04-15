import React from 'react';
import {FlatList} from 'react-native';
import {ChatItem} from '../chat_item';
import {Chat} from '../../../types';

interface ChatListProps {
  chats: Chat[];
  onChatPress?: (chatId: string) => void;
}

export const ChatList: React.FC<ChatListProps> = ({chats, onChatPress}) => {
  return (
    <FlatList
      data={chats}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ChatItem
          {...item}
          onPress={() => onChatPress && onChatPress(item.id)}
        />
      )}
    />
  );
};
