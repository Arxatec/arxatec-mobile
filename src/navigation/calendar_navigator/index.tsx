import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateEvent from '@/modules/calendar/features/create_event/pages/create_event';
import Calendar from '@/modules/calendar/features/calendar/pages/calendar';
import {Calendar as CalendarRoutes} from '@/navigation/routes';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function CalendarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={CalendarRoutes.CalendarDay}>
      <Stack.Screen name={CalendarRoutes.CalendarDay} component={Calendar} />
      <Stack.Screen name={CalendarRoutes.CreateEvent} component={CreateEvent} />
    </Stack.Navigator>
  );
}
