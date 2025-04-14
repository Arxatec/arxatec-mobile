import React from 'react';
import {Modal, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface OptionsModalProps {
  visible: boolean;
  options: string[];
  onClose: () => void;
  onOptionSelected: (option: string) => void;
}

export const OptionsModal: React.FC<OptionsModalProps> = ({
  visible,
  options,
  onClose,
  onOptionSelected,
}) => {
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}>
        <View style={styles.modalContent}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.modalItem}
              onPress={() => onOptionSelected(item)}>
              <Text style={styles.modalText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalText: {
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[900],
    fontSize: 14,
  },
});
