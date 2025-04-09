import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Community} from '@/navigation/routes.ts';
import ViewPosts from '@/modules/posts/features/view_posts/pages/view_posts';
import ViewPost from '@/modules/posts/features/view_post/page/view_post';
import CreatePost from '@/modules/posts/features/create_post/pages/create_post';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function CommunityNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={Community.ViewPosts}>
      <Stack.Screen name={Community.ViewPost} component={ViewPost} />
      <Stack.Screen name={Community.ViewPosts} component={ViewPosts} />
      <Stack.Screen name={Community.CreatePost} component={CreatePost} />
    </Stack.Navigator>
  );
}
