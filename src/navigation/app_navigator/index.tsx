import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, Routes} from '@/navigation/routes.ts';
import Login from '@/modules/auth/features/login/pages/login';
import BootSplash from 'react-native-bootsplash';
import Register from '@/modules/auth/features/register/pages/register';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
};

export default function AppNavigator() {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={Routes.Login}>
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Register} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
