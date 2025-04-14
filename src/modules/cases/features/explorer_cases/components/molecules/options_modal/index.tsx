import React from 'react';
import {StyleSheet, Modal, TouchableOpacity, View, Text} from 'react-native';
import {STYLES} from '@/utils';
import {ModalOption} from '../../../types';

interface OptionsModalProps {
  visible: boolean;
  onClose: () => void;
  options: ModalOption[];
}

export const OptionsModal: React.FC<OptionsModalProps> = ({
  visible,
  onClose,
  options,
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
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.modalItem}
              onPress={() => {
                option.onPress();
                onClose();
              }}>
              <Text style={styles.modalText}>{option.label}</Text>
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
