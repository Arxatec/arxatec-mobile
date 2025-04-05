import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  ArchiveBoxIcon,
  UsersIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
} from 'react-native-heroicons/solid';
import {
  HomeIcon as HomeIconInactive,
  UsersIcon as UsersIconInactive,
  ArchiveBoxIcon as ArchiveBoxIconInactive,
  CalendarIcon as CalendarIconInactive,
  ChatBubbleBottomCenterIcon as ChatBubbleBottomCenterIconInactive,
} from 'react-native-heroicons/outline';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {RoutesTabs} from '../routes';
import ViewPosts from '@/modules/posts/features/view_posts/pages/view_posts';
import ViewCases from '@/modules/cases/features/view_cases/pages/view_cases';
import Calendar from '@/modules/calendar/features/calendar/pages/calendar';
import Messages from '@/modules/messages/features/messages/pages/messages';
import Home from '@/modules/home/features/home/pages/home';

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
    component: Home,
    iconActive: HomeIcon,
    iconInactive: HomeIconInactive,
    label: 'Dashboard',
  },
  {
    name: RoutesTabs.Cases,
    component: ViewCases,
    iconActive: ArchiveBoxIcon,
    iconInactive: ArchiveBoxIconInactive,
    label: 'Casos',
  },
  {
    name: RoutesTabs.Calendar,
    component: Calendar,
    iconActive: CalendarIcon,
    iconInactive: CalendarIconInactive,
    label: 'Calendario',
  },
  {
    name: RoutesTabs.Posts,
    component: ViewPosts,
    iconActive: UsersIcon,
    iconInactive: UsersIconInactive,
    label: 'Publicaciones',
  },
  {
    name: RoutesTabs.Messages,
    component: Messages,
    iconActive: ChatBubbleBottomCenterIcon,
    iconInactive: ChatBubbleBottomCenterIconInactive,
    label: 'Mensajes',
  },
];

const screenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: '#f8fafc',
    borderWidth: 0,
    borderColor: '#f8fafc',
    elevation: 0,
    height: 80,
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
          paddingVertical: 18,
        },
      }}>
      {Tabs.map((tab, idx) => (
        <Tab.Screen
          key={idx}
          name={tab.name}
          component={tab.component}
          options={{
            ...tabOptions,
            tabBarLabel: `${tab.label}`,
            tabBarIcon: ({size}) => {
              return tabActive === idx ? (
                <tab.iconActive color="#2563eb" size={size} />
              ) : (
                <tab.iconInactive color="#6b7280" size={size} />
              );
            },
            tabBarLabelStyle: {
              color: tabActive === idx ? '#2563eb' : '#6b7280',
              fontSize: 12,
              letterSpacing: -0.4,
              fontFamily:
                tabActive === idx ? 'Lexend-SemiBold' : 'Lexend-Regular',
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
