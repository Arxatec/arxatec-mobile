import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {MessageItem} from '../../molecules';
import {Message} from '../../../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({messages}) => {
  return (
    <View style={styles.containerMessages}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MessageItem message={item} />}
        contentContainerStyle={styles.chat}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMessages: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 4,
    flex: 1,
  },
  chat: {
    padding: 12,
    paddingBottom: 80,
  },
});

export default MessageList;
