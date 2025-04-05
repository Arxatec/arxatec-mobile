import {STYLES} from '@/utils';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
} from 'react-native-heroicons/solid';
import {CustomAvatar} from '@/components/atoms/custom_avatar';

interface ShortPostProps {
  username: string;
  avatarUrl: string;
  timestamp: string;
  title: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onOptionSelected?: (option: string) => void;
}

export const ShortPost: React.FC<ShortPostProps> = ({
  username,
  avatarUrl,
  timestamp,
  title,
  content,
  likesCount,
  commentsCount,
  onLike,
  onComment,
  onShare,
  onOptionSelected,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
    onOptionSelected?.(option);
  };

  return (
    <View style={styles.postContainer}>
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
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={onLike}>
          <HandThumbUpIcon size={18} color={STYLES.colors.black[400]} />
          <Text style={styles.actionText}>{likesCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onComment}>
          <ChatBubbleLeftIcon size={18} color={STYLES.colors.black[400]} />
          <Text style={styles.actionText}>{commentsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <ShareIcon size={18} color={STYLES.colors.black[400]} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerInfo: {
    marginLeft: 12,
  },
  postContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 4,
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
  title: {
    marginBottom: 5,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[800],
    fontSize: 14,
  },
  content: {
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: STYLES.colors.black[50],
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  actionText: {
    marginLeft: 5,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
    fontSize: 12,
  },
  shareButton: {
    marginLeft: 'auto',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
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
