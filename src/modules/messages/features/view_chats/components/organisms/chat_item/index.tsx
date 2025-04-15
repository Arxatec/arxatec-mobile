import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ChatInfo, ChatTimeIndicator} from '../../molecules';
import {STYLES} from '@/utils';
import {Chat} from '../../../types';
import {CustomAvatar} from '@/components/atoms';

interface ChatItemProps extends Chat {
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
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 4,
        alignItems: 'center',
      }}>
      <CustomAvatar avatar={image} size={50} username={name} />
      <ChatInfo name={name} message={message} />
      <ChatTimeIndicator time={time} seen={seen} />
    </TouchableOpacity>
  );
};
