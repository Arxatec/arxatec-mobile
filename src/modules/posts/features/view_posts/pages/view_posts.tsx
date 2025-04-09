import {PageContainer} from '@/components/layout';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ShortPost} from '../components/molecules/short_post';
import {STYLES} from '@/utils';
import Share from 'react-native-share';
import {PlusIcon} from 'react-native-heroicons/outline';
import {useAppNavigation} from '@/hooks';
import {Community} from '@/navigation/routes';

export default function ViewPosts() {
  const postsData = [
    {
      id: '1',
      username: 'Carlos Mendoza',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      timestamp: 'hace 2 horas',
      title: '¿Qué hacer si te despiden injustamente?',
      content:
        'Si consideras que tu despido fue arbitrario, es importante revisar tu contrato y contactar a un abogado laboral. Puedes tener derecho a una indemnización.',
      likesCount: 52,
      commentsCount: 10,
    },
    {
      id: '2',
      username: 'María González',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      timestamp: 'hace 3 horas',
      title: 'Cómo registrar una marca en Perú',
      content:
        'Si tienes un emprendimiento, protege tu marca. Aquí te explico paso a paso cómo hacerlo mediante Indecopi.',
      likesCount: 78,
      commentsCount: 19,
    },
    {
      id: '3',
      username: 'Alejandro Torres',
      avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg',
      timestamp: 'hace 5 horas',
      title: 'Derechos del inquilino frente al desalojo',
      content:
        'Muchos arrendadores desconocen los procesos legales. Si te quieren desalojar sin orden judicial, eso es ilegal.',
      likesCount: 66,
      commentsCount: 13,
    },
    {
      id: '4',
      username: 'Laura Ramírez',
      avatarUrl: 'https://imagen-que-no-existe.jpg',
      timestamp: 'ayer',
      title: 'Diferencias entre conciliación y juicio',
      content:
        'La conciliación puede ser una vía rápida y económica para resolver conflictos legales. Conoce cuándo es mejor usarla.',
      likesCount: 39,
      commentsCount: 6,
    },
    {
      id: '5',
      username: 'Eduardo Salazar',
      avatarUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
      timestamp: 'ayer',
      title: '¿Qué es una demanda de alimentos?',
      content:
        'Si uno de los padres no cumple con sus obligaciones, puedes iniciar una demanda para garantizar el sustento del menor.',
      likesCount: 91,
      commentsCount: 21,
    },
    {
      id: '6',
      username: 'Paola Villanueva',
      avatarUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
      timestamp: 'hace 2 días',
      title: 'Consejos para denunciar violencia familiar',
      content:
        'No estás sola. Existen canales legales y líneas de ayuda para denunciar violencia familiar. Aquí los principales pasos.',
      likesCount: 102,
      commentsCount: 33,
    },
    {
      id: '7',
      username: 'Miguel Campos',
      avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      timestamp: 'hace 2 días',
      title: 'Herencias: qué hacer si no hay testamento',
      content:
        'En caso de fallecimiento sin testamento, entra en juego la sucesión intestada. Te explico cómo se reparte la herencia.',
      likesCount: 61,
      commentsCount: 9,
    },
    {
      id: '8',
      username: 'Lucía Espinoza',
      avatarUrl: 'https://randomuser.me/api/portraits/women/19.jpg',
      timestamp: 'hace 3 días',
      title: 'Proceso para registrar una empresa',
      content:
        'Desde la minuta hasta la Sunat. Esta es la guía legal para formalizar tu negocio en Perú.',
      likesCount: 84,
      commentsCount: 17,
    },
    {
      id: '9',
      username: 'Renato Gamarra',
      avatarUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
      timestamp: 'hace 4 días',
      title: '¿Puedo grabar conversaciones como prueba?',
      content:
        'En algunos casos sí, pero depende del contexto. Aquí explico cuándo es legal usar grabaciones como evidencia.',
      likesCount: 73,
      commentsCount: 11,
    },
    {
      id: '10',
      username: 'Valeria Rojas',
      avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
      timestamp: 'hace 4 días',
      title: '¿Qué pasa si firmé un contrato sin leer?',
      content:
        'La ley presume que lo conoces. Siempre consulta a un abogado antes de firmar cualquier contrato.',
      likesCount: 44,
      commentsCount: 5,
    },
    {
      id: '11',
      username: 'Andrés León',
      avatarUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
      timestamp: 'hace 5 días',
      title: 'Diferencia entre denuncia y querella',
      content:
        'Ambos son mecanismos legales, pero tienen procesos distintos. Aquí te explico cuál usar según tu caso.',
      likesCount: 58,
      commentsCount: 8,
    },
    {
      id: '12',
      username: 'Diana Ruiz',
      avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      timestamp: 'hace 5 días',
      title: '¿Qué hacer si recibes una demanda?',
      content:
        'No ignores una demanda. Tienes plazos para responder. Aquí te explico los primeros pasos.',
      likesCount: 69,
      commentsCount: 14,
    },
    {
      id: '13',
      username: 'Jorge Cabrera',
      avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
      timestamp: 'hace 6 días',
      title: 'El rol del abogado en una conciliación',
      content:
        'Tu abogado puede ayudarte a negociar condiciones favorables antes de llegar a juicio.',
      likesCount: 36,
      commentsCount: 4,
    },
    {
      id: '14',
      username: 'Sofía Delgado',
      avatarUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
      timestamp: 'hace 1 semana',
      title: '¿Qué es el habeas corpus?',
      content:
        'Es un mecanismo constitucional para proteger tu libertad personal frente a detenciones arbitrarias.',
      likesCount: 88,
      commentsCount: 20,
    },
    {
      id: '15',
      username: 'Gabriel Ortega',
      avatarUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
      timestamp: 'hace 1 semana',
      title: 'Diferencias entre contrato civil y comercial',
      content:
        'Ambos regulan acuerdos, pero tienen implicancias legales distintas. Aquí una comparación práctica.',
      likesCount: 48,
      commentsCount: 7,
    },
  ];

  const handleLike = (postId: string) => {
    console.log(`Post ${postId} liked`);
  };

  const handleComment = (postId: string) => {
    console.log(`Commenting on post ${postId}`);
  };

  const share = async () => {
    try {
      const result = await Share.open({
        title: 'Compartir algo',
        message: 'Esto es un mensaje para compartir',
        url: 'https://example.com',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleShare = (postId: string) => {
    console.log(`Sharing post ${postId}`);
    share();
  };

  const handleOptionSelected = (postId: string, option: string) => {
    console.log(`Option ${option} selected for post ${postId}`);
  };

  const {navigateTo} = useAppNavigation();

  const navigateToCreatePost = () => navigateTo(Community.CreatePost);

  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}
      scrollEnabled={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Publicaciones</Text>
        <TouchableOpacity onPress={navigateToCreatePost}>
          <PlusIcon
            size={20}
            strokeWidth={2}
            color={STYLES.colors.black[900]}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          borderRadius: 10,
        }}>
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
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
});
