import {useNavigation} from '@react-navigation/native';

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const navigateTo = (screen: any, params?: any) => {
    if (params) {
      // @ts-ignore
      navigation.navigate(screen, params);
    } else {
      // @ts-ignore
      navigation.navigate(screen);
    }
  };

  return {navigateTo};
};
