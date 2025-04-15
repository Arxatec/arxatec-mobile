import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {PaperAirplaneIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface SendButtonProps {
  onPress: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.sendButton} onPress={onPress}>
      <PaperAirplaneIcon size={16} color="#FFF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sendButton: {
    padding: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: STYLES.colors.blue[600],
    borderRadius: 5,
  },
});

export default SendButton;
