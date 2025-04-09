import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {PostFooter, PostHeader} from '@/modules/posts/components/atoms';
import {Community} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {Comments} from '../components/organisms';

export default function ViewPost() {
  const {navigateTo} = useAppNavigation();
  const navigateToViewPosts = () => navigateTo(Community.ViewPosts);
  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToViewPosts}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postContainer}>
          <PostHeader
            username={'Diana Ruiz'}
            avatarUrl={'https://randomuser.me/api/portraits/women/12.jpg'}
            timestamp={'hace 7 días'}
          />
          <Text style={styles.title}>¿Qué hacer si tienes una demanda?</Text>
          <Text style={styles.content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            laudantium, nobis cupiditate aliquid ut eligendi sed repellendus
            explicabo iure voluptas id similique voluptates dolor vero impedit?
            Saepe deleniti quis eius Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Tenetur ipsa, aspernatur animi aliquam adipisci
            eligendi optio numquam cupiditate. Quam, dolores. Ducimus itaque
            possimus laudantium eos porro, incidunt nemo veniam assumenda.
          </Text>

          <PostFooter likesCount={10} commentsCount={30} />
        </View>
        <Comments />
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },
  postContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 4,
  },
});
