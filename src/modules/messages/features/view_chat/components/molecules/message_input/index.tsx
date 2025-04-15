import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {CustomInput} from '@/components/atoms';
import {SendButton} from '../../atoms';
import {PaperClipIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface MessageInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSendPress: () => void;
  onAttachPress: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChangeText,
  onSendPress,
  onAttachPress,
}) => {
  return (
    <View style={styles.inputLayout}>
      <CustomInput
        placeholder="Escribe un mensaje..."
        value={value}
        onChangeText={onChangeText}
        style={{
          borderWidth: 0,
          borderRadius: 4,
        }}
        endAdornment={
          <TouchableOpacity onPress={onAttachPress}>
            <PaperClipIcon size={18} color={STYLES.colors.black[400]} />
          </TouchableOpacity>
        }
      />
      <SendButton onPress={onSendPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
});

export default MessageInput;
