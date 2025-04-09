import {
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  HandThumbDownIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  likesCount: number;
  commentsCount: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onOptionSelected?: (option: string) => void;
}

export const PostFooter: React.FC<Props> = ({
  onLike,
  likesCount,
  onComment,
  commentsCount,
  onShare,
}) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity style={styles.actionButton} onPress={onLike}>
        <HandThumbUpIcon size={18} color={STYLES.colors.black[400]} />
        <Text style={styles.actionText}>{likesCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={onLike}>
        <HandThumbDownIcon size={18} color={STYLES.colors.black[400]} />
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
  );
};

const styles = StyleSheet.create({
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
    fontSize: 14,
  },
  shareButton: {
    marginLeft: 'auto',
  },
});
