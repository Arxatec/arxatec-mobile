import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '@/utils';

interface ModalActionsProps {
  visible: boolean;
  onClose: () => void;
  options: string[];
  onOptionSelected: (option: string) => void;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  visible,
  onClose,
  options,
  onOptionSelected,
}) => {
  const handleOptionPress = (option: string) => {
    onOptionSelected(option);
  };

  return (
    <Modal
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}>
        <View style={styles.content}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleOptionPress(option)}>
              <Text style={styles.text}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  item: {
    paddingVertical: 10,
  },
  text: {
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[900],
    fontSize: 14,
  },
});
