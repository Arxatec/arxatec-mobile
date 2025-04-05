import {PageContainer} from '@/components/layout';
import {StyleSheet, Text, View} from 'react-native';
import {ShortPost} from '../components/molecules/short_post';
import {STYLES} from '@/utils';

export default function ViewPosts() {
  const postsData = [
    {
      id: '1',
      username: 'Carlos Mendoza',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      timestamp: 'hace 2 horas',
      title: 'Consejos para enfrentar situaciones difíciles',
      content:
        'Cuando nos enfrentamos a momentos complicados, es importante mantener la calma y buscar apoyo. No dudes en compartir tus experiencias en la plataforma.',
      likesCount: 45,
      commentsCount: 12,
    },
    {
      id: '2',
      username: 'María González',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      timestamp: 'hace 5 horas',
      title: 'Mi experiencia de superación',
      content:
        'Quiero compartir con todos ustedes cómo logré superar una situación muy difícil. Espero que mi historia pueda ayudar a otros que estén pasando por lo mismo.',
      likesCount: 89,
      commentsCount: 24,
    },
    {
      id: '3',
      username: 'Alejandro Torres',
      avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
      timestamp: 'ayer',
      title: 'Recursos comunitarios disponibles',
      content:
        'He recopilado una lista de recursos disponibles en nuestra comunidad para quienes necesiten apoyo legal y psicológico. No duden en comentar si conocen otros.',
      likesCount: 56,
      commentsCount: 8,
    },
    {
      id: '4',
      username: 'Laura Ramírez',
      // URL intencionalmente incorrecta para mostrar las iniciales
      avatarUrl: 'https://imagen-que-no-existe.jpg',
      timestamp: 'hace 2 días',
      title: 'Grupos de apoyo virtual',
      content:
        'Les comparto información sobre grupos de apoyo virtuales que se reúnen semanalmente. Han sido de gran ayuda para muchas personas durante estos tiempos difíciles.',
      likesCount: 34,
      commentsCount: 15,
    },
  ];

  // Manejadores de eventos
  const handleLike = (postId: string) => {
    console.log(`Post ${postId} liked`);
    // Aquí irías tu lógica para dar like a un post
  };

  const handleComment = (postId: string) => {
    console.log(`Commenting on post ${postId}`);
    // Aquí iría tu lógica para mostrar o añadir comentarios
  };

  const handleShare = (postId: string) => {
    console.log(`Sharing post ${postId}`);
    // Aquí iría tu lógica para compartir un post
  };

  const handleOptionSelected = (postId: string, option: string) => {
    console.log(`Option ${option} selected for post ${postId}`);
    // Aquí manejarías las opciones como guardar, ocultar, etc.
  };
  return (
    <PageContainer paddingHorizontal={16}>
      <View style={styles.header}>
        <Text style={styles.title}>Publicaciones</Text>
      </View>
      <View>
        {postsData.map(post => (
          <ShortPost
            key={post.id}
            username={post.username}
            avatarUrl={post.avatarUrl}
            timestamp={post.timestamp}
            title={post.title}
            content={post.content}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            onLike={() => handleLike(post.id)}
            onComment={() => handleComment(post.id)}
            onShare={() => handleShare(post.id)}
            onOptionSelected={option => handleOptionSelected(post.id, option)}
          />
        ))}
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
});
