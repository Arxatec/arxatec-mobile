import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {ChatInfo} from '../../molecules/chat_info';
import {ChatTimeIndicator} from '../../molecules/chat_time_indicator';

export interface ChatItemProps {
  id: string;
  name: string;
  message: string;
  time: string;
  image: string;
  seen: boolean;
  onPress?: () => void;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  name,
  message,
  time,
  image,
  seen,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.chatItem} onPress={onPress}>
      <CustomAvatar avatar={image} size={50} username={name} />
      <ChatInfo name={name} message={message} />
      <ChatTimeIndicator time={time} seen={seen} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 4,
    borderRadius: 10,
  },
});
