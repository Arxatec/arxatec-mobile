import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cases} from '@/navigation/routes.ts';
import ViewCase from '@/modules/cases/features/view_case/pages/view_case';
import ViewCases from '@/modules/cases/features/view_cases/pages/view_cases';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function CasesNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={Cases.ViewCases}>
      <Stack.Screen name={Cases.ViewCase} component={ViewCase} />
      <Stack.Screen name={Cases.ViewCases} component={ViewCases} />
    </Stack.Navigator>
  );
}
