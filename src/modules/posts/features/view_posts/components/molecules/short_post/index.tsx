import React from 'react';
import {STYLES} from '@/utils';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {PostFooter, PostHeader} from '@/modules/posts/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Community} from '@/navigation/routes';

interface Props {
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

export const ShortPost: React.FC<Props> = ({
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
  const {navigateTo} = useAppNavigation();

  const navigateToPost = () => navigateTo(Community.ViewPost);
  return (
    <TouchableOpacity style={styles.postContainer} onPress={navigateToPost}>
      <PostHeader
        username={username}
        avatarUrl={avatarUrl}
        timestamp={timestamp}
        onOptionSelected={onOptionSelected}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <PostFooter
        likesCount={likesCount}
        commentsCount={commentsCount}
        onLike={onLike}
        onComment={onComment}
        onShare={onShare}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 4,
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
});
