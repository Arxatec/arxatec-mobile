import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, Routes} from '@/navigation/routes.ts';
import BootSplash from 'react-native-bootsplash';
import Login from '@/modules/auth/features/login/pages/login';
import Register from '@/modules/auth/features/register/pages/register';
import AuthOptions from '@/modules/auth/features/auth_options/pages/auth_options';
import ForgotPassword from '@/modules/auth/features/forgot_password/pages/forgot_password';
import Introduction from '@/modules/introduction/features/introduction/pages/introduction';
import TabNavigator from '../tab_navigator';

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
        initialRouteName={Routes.Introduction}>
        <Stack.Screen name={Routes.AuthOptions} component={AuthOptions} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassword} />
        <Stack.Screen name={Routes.Introduction} component={Introduction} />
        <Stack.Screen name={Routes.Tabs} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
