import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Messages} from '@/navigation/routes.ts';
import ViewChats from '@/modules/messages/features/view_chats/pages/view_chats';
import ViewChat from '@/modules/messages/features/view_chat/pages/view_chat';
import InfoChat from '@/modules/messages/features/info_chat/pages/info_chat';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function MessageNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={Messages.ViewChats}>
      <Stack.Screen name={Messages.ViewChats} component={ViewChats} />
      <Stack.Screen name={Messages.ViewChat} component={ViewChat} />
      <Stack.Screen name={Messages.InfoChat} component={InfoChat} />
    </Stack.Navigator>
  );
}
