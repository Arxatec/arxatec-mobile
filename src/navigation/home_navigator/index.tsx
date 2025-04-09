import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@/navigation/routes.ts';
import {default as HomeScreen} from '@/modules/home/features/home/pages/home';
import Settings from '@/modules/home/features/settings/pages/settings';
import Notification from '@/modules/home/features/notification/pages/notification';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={Home.Dashboard}>
      <Stack.Screen name={Home.Dashboard} component={HomeScreen} />
      <Stack.Screen name={Home.Settings} component={Settings} />
      <Stack.Screen name={Home.Notification} component={Notification} />
    </Stack.Navigator>
  );
}
