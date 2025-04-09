import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ArchiveBoxIcon,
  UsersIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterIcon,
} from 'react-native-heroicons/solid';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {RoutesTabs} from '../routes';
import ViewCases from '@/modules/cases/features/view_cases/pages/view_cases';
import Calendar from '@/modules/calendar/features/calendar/pages/calendar';
import MessageNavigator from '../message_navigator';
import CommunityNavigator from '../community_navigator';
import HomeNavigator from '../home_navigator';
import {STYLES} from '@/utils';

const Tab = createBottomTabNavigator();

type TabParamList = {
  Dashboard: undefined;
  StackSpace: undefined;
  Profile: undefined;
  Notification: undefined;
};

const Tabs = [
  {
    name: RoutesTabs.Home,
    component: HomeNavigator,
    iconActive: HomeIcon,
    label: 'Inicio',
  },
  {
    name: RoutesTabs.Cases,
    component: ViewCases,
    iconActive: ArchiveBoxIcon,
    label: 'Casos',
  },
  {
    name: RoutesTabs.Calendar,
    component: Calendar,
    iconActive: CalendarDaysIcon,
    label: 'Calendario',
  },
  {
    name: RoutesTabs.Community,
    component: CommunityNavigator,
    iconActive: UsersIcon,
    label: 'Comunidad',
  },
  {
    name: RoutesTabs.Messages,
    component: MessageNavigator,
    iconActive: ChatBubbleBottomCenterIcon,
    label: 'Mensajes',
  },
];

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: STYLES.colors.white[1],
    borderWidth: 0,
    borderColor: STYLES.colors.white[1],
    elevation: 0,
    height: 70,
  },
};
const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};
export default function TabNavigator() {
  const navigation = useNavigation<NavigationProp<TabParamList>>();
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const state = e.data.state;
      if (state) {
        const currentRoute = state.routes[state.index];

        // @ts-ignore
        if (currentRoute.name === 'Tabs' && currentRoute.state) {
          const tabState = currentRoute.state;
          setTabActive(tabState.index || 0);
        }
      }
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <Tab.Navigator
      initialRouteName={RoutesTabs.Home}
      screenOptions={{
        ...screenOptions,
        tabBarItemStyle: {
          paddingVertical: 10,
        },
      }}>
      {Tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab.name}
          component={tab.component}
          options={{
            ...tabOptions,
            tabBarShowLabel: true,
            tabBarIcon: ({size}) => {
              return tabActive === idx ? (
                <tab.iconActive color={STYLES.colors.blue[600]} size={22} />
              ) : (
                <tab.iconActive color={STYLES.colors.black[500]} size={22} />
              );
            },
            tabBarLabel: tab.label,
            tabBarLabelStyle: {
              fontFamily:
                tabActive === idx ? STYLES.fonts.bold : STYLES.fonts.medium,
              fontSize: 12,
              color:
                tabActive === idx
                  ? STYLES.colors.blue[600]
                  : STYLES.colors.black[500],
            },
            tabBarActiveTintColor: STYLES.colors.blue[600],
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
