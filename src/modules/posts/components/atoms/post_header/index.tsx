import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {EllipsisHorizontalIcon} from 'react-native-heroicons/solid';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {STYLES} from '@/utils';
import React, {useState} from 'react';

interface Props {
  username: string;
  avatarUrl: string;
  timestamp: string;
  onOptionSelected?: (option: string) => void;
}

export const PostHeader: React.FC<Props> = ({
  username,
  avatarUrl,
  timestamp,

  onOptionSelected,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
    onOptionSelected?.(option);
  };
  return (
    <>
      <View style={styles.header}>
        <CustomAvatar avatar={avatarUrl} size={40} username={username} />
        <View style={styles.headerInfo}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => setModalVisible(true)}>
          <EllipsisHorizontalIcon size={20} color={STYLES.colors.black[700]} />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {['Guardar', 'Ocultar', 'Reportar'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleOptionSelected(item)}>
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  headerInfo: {
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
  },
  timestamp: {
    color: STYLES.colors.black[500],
    fontSize: 12,
    fontFamily: STYLES.fonts.medium,
  },
  moreButton: {
    marginLeft: 'auto',
  },
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
