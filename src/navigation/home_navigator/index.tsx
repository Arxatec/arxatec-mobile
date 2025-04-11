import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@/navigation/routes.ts';
import {default as HomeScreen} from '@/modules/home/features/home/pages/home';
import Settings from '@/modules/home/features/settings/pages/settings';
import Notification from '@/modules/home/features/notification/pages/notification';
import ChangePassword from '@/modules/home/features/change_password/pages/change_password';
import EditProfile from '@/modules/home/features/edit_profile/pages/edit_profile';

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
      <Stack.Screen name={Home.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={Home.EditProfile} component={EditProfile} />
    </Stack.Navigator>
  );
}
