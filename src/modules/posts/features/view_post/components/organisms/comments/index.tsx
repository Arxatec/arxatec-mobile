import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/es'; // Import Spanish locale for moment
import {STYLES} from '@/utils';
import {
  ChatBubbleLeftIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from 'react-native-heroicons/solid';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type Comment = {
  id: string;
  user: User;
  text: string;
  date: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
};

const initialComments: Comment[] = [
  {
    id: '1',
    user: {
      id: 'user1',
      name: 'María García',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: '¡Qué buena publicación! Me encantó la información que compartiste.',
    date: '2023-05-15T14:30:00',
    likes: 12,
    dislikes: 1,
  },
  {
    id: '2',
    user: {
      id: 'user3',
      name: 'Carlos Rodríguez',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Interesante perspectiva. Me gustaría saber más sobre este tema.',
    date: '2023-05-16T09:20:00',
    likes: 5,
    dislikes: 1,
    replies: [
      {
        id: '3',
        user: {
          id: 'user2',
          name: 'Ana López',
          avatar: '/placeholder.svg?height=40&width=40',
        },
        text: '¡Gracias por compartir!',
        date: '2023-05-16T10:30:00',
        likes: 3,
        dislikes: 0,
      },
    ],
  },
  {
    id: '4',
    user: {
      id: 'user4',
      name: 'Luis Fernández',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'No estoy de acuerdo con algunos puntos, pero es una buena discusión.',
    date: '2023-05-17T08:45:00',
    likes: 8,
    dislikes: 2,
  },
  {
    id: '5',
    user: {
      id: 'user5',
      name: 'Sofía Martínez',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Muy interesante, ¿tienes fuentes adicionales para profundizar?',
    date: '2023-05-18T11:10:00',
    likes: 6,
    dislikes: 1,
  },
  {
    id: '6',
    user: {
      id: 'user6',
      name: 'Diego Ríos',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Excelente contenido, lo compartiré con mis amigos.',
    date: '2023-05-19T13:25:00',
    likes: 15,
    dislikes: 0,
  },
  {
    id: '7',
    user: {
      id: 'user7',
      name: 'Andrea Torres',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Creo que faltó abordar un punto importante, pero en general está bien.',
    date: '2023-05-20T15:50:00',
    likes: 7,
    dislikes: 3,
  },
  {
    id: '8',
    user: {
      id: 'user8',
      name: 'Fernando Vega',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Muy claro y bien explicado. ¡Gracias!',
    date: '2023-05-21T17:00:00',
    likes: 10,
    dislikes: 1,
  },
  {
    id: '9',
    user: {
      id: 'user9',
      name: 'Camila Herrera',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'No me convence del todo, pero aprecio el esfuerzo.',
    date: '2023-05-22T19:30:00',
    likes: 4,
    dislikes: 5,
  },
  {
    id: '10',
    user: {
      id: 'user10',
      name: 'Javier Méndez',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Me gustaría ver más contenido como este.',
    date: '2023-05-23T21:15:00',
    likes: 9,
    dislikes: 0,
  },
  {
    id: '11',
    user: {
      id: 'user11',
      name: 'Paula Díaz',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'El artículo me ayudó mucho, gracias por compartirlo.',
    date: '2023-05-24T10:40:00',
    likes: 14,
    dislikes: 1,
  },
  {
    id: '12',
    user: {
      id: 'user12',
      name: 'Ricardo Salazar',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    text: 'Espero que hagas más publicaciones similares pronto.',
    date: '2023-05-25T12:30:00',
    likes: 11,
    dislikes: 2,
  },
];

export const Comments = () => {
  // Set locale to Spanish
  moment.locale('es');

  const [comments, setComments] = useState<Comment[]>(
    initialComments.slice(0, 6),
  ); // Show only first 6 comments initially
  const [newComment, setNewComment] = useState<string>('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    const date = moment(dateString);
    const now = moment();
    const diffInYears = now.diff(date, 'years');

    return `hace ${diffInYears} año${diffInYears !== 1 ? 's' : ''}`;
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      if (replyingTo) {
        // Add reply to a comment
        const updatedComments = comments.map(comment => {
          if (comment.id === replyingTo) {
            return {
              ...comment,
              replies: [
                ...(comment.replies || []),
                {
                  id: `reply-${Date.now()}`,
                  user: {
                    id: 'currentUser',
                    name: 'Usuario Actual',
                    avatar: '/placeholder.svg?height=40&width=40',
                  },
                  text: newComment,
                  date: moment().toISOString(),
                  likes: 0,
                  dislikes: 0,
                },
              ],
            };
          }
          return comment;
        });
        setComments(updatedComments);
        setReplyingTo(null);
      } else {
        // Add new comment
        const newCommentObj: Comment = {
          id: `comment-${Date.now()}`,
          user: {
            id: 'currentUser',
            name: 'Usuario Actual',
            avatar: '/placeholder.svg?height=40&width=40',
          },
          text: newComment,
          date: moment().toISOString(),
          likes: 0,
          dislikes: 0,
        };
        setComments([newCommentObj, ...comments]);
      }
      setNewComment('');
    }
  };

  const handleLike = (
    commentId: string,
    isReply: boolean = false,
    parentId?: string,
  ) => {
    if (isReply && parentId) {
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId && comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply.id === commentId
                ? {...reply, likes: reply.likes + 1}
                : reply,
            ),
          };
        }
        return comment;
      });
      setComments(updatedComments);
    } else {
      const updatedComments = comments.map(comment =>
        comment.id === commentId
          ? {...comment, likes: comment.likes + 1}
          : comment,
      );
      setComments(updatedComments);
    }
  };

  const handleDislike = (
    commentId: string,
    isReply: boolean = false,
    parentId?: string,
  ) => {
    if (isReply && parentId) {
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId && comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply.id === commentId
                ? {...reply, dislikes: reply.dislikes + 1}
                : reply,
            ),
          };
        }
        return comment;
      });
      setComments(updatedComments);
    } else {
      const updatedComments = comments.map(comment =>
        comment.id === commentId
          ? {...comment, dislikes: comment.dislikes + 1}
          : comment,
      );
      setComments(updatedComments);
    }
  };

  const handleReply = (commentId: string) => {
    setReplyingTo(commentId);
    setNewComment('');
  };

  const renderReply = (reply: Comment, parentId: string) => (
    <View style={styles.replyContainer} key={reply.id}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{reply.user.name.charAt(0)}</Text>
      </View>
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.userName}>{reply.user.name}</Text>
          <Text style={styles.commentDate}>{formatDate(reply.date)}</Text>
        </View>
        <Text style={styles.commentText}>{reply.text}</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleLike(reply.id, true, parentId)}>
            <Text style={styles.likeIcon}>
              {' '}
              <HandThumbUpIcon size={18} color={STYLES.colors.black[400]} />
            </Text>
            <Text style={styles.actionCount}>{reply.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleDislike(reply.id, true, parentId)}>
            <Text style={styles.dislikeIcon}>
              <HandThumbDownIcon size={18} color={STYLES.colors.black[400]} />
            </Text>
            <Text style={styles.actionCount}>{reply.dislikes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.replyButton}>
            <ChatBubbleLeftIcon size={18} color={STYLES.colors.black[400]} />
            <Text style={styles.replyText}>Responder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderComment = ({item}: {item: Comment}) => (
    <View style={styles.commentContainer}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{item.user.name.charAt(0)}</Text>
      </View>
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.commentDate}>{formatDate(item.date)}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleLike(item.id)}>
            <Text style={styles.likeIcon}>
              <HandThumbUpIcon size={18} color={STYLES.colors.black[400]} />
            </Text>
            <Text style={styles.actionCount}>{item.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => handleDislike(item.id)}>
            <Text style={styles.dislikeIcon}>
              <HandThumbDownIcon size={18} color={STYLES.colors.black[400]} />
            </Text>
            <Text style={styles.actionCount}>{item.dislikes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.replyButton}
            onPress={() => handleReply(item.id)}>
            <ChatBubbleLeftIcon size={18} color={STYLES.colors.black[400]} />
            <Text style={styles.replyText}>Responder</Text>
          </TouchableOpacity>
        </View>
        {item.replies && item.replies.map(reply => renderReply(reply, item.id))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Agregar comentario"
          value={newComment}
          onChangeText={setNewComment}
          placeholderTextColor={STYLES.colors.black[500]}
          multiline
          cursorColor={STYLES.colors.blue[500]}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleAddComment}>
          <Text style={styles.submitButtonText}>
            {replyingTo ? 'Responder' : 'Comentar'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.commentsList}>
        {comments.map(comment => renderComment({item: comment}))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  input: {
    minHeight: 40,
    fontSize: 14,
    color: STYLES.colors.black[950],
    fontFamily: STYLES.fonts.regular,
  },
  submitButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: STYLES.colors.blue[600],
    borderRadius: 6,
    marginTop: 8,
  },
  submitButtonText: {
    color: STYLES.colors.white[1],
    fontFamily: STYLES.fonts.medium,
  },
  commentsList: {},
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 12,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: STYLES.colors.black[600],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: STYLES.colors.white[1],
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[950],
    marginRight: 8,
  },
  commentDate: {
    fontSize: 12,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.medium,
  },
  commentText: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    marginBottom: 8,
    lineHeight: 20,
    fontFamily: STYLES.fonts.regular,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: STYLES.colors.white[1],
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionCount: {
    marginLeft: 4,
    fontSize: 14,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.medium,
  },
  likeIcon: {
    fontSize: 14,
  },
  dislikeIcon: {
    fontSize: 14,
  },
  replyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 8,
  },
  replyText: {
    fontSize: 14,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.medium,
  },
  replyContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: STYLES.colors.black[100],
  },
});
