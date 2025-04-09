import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ChatItem} from '../chat_item';

export interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  image: string;
  seen: boolean;
}

export interface ChatListProps {
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

const styles = StyleSheet.create({});
