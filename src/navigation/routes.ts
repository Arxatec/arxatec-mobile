export enum Routes {
  Register = 'Register',
  Login = 'Login',
  Home = 'Home',
}

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.Register]: undefined;
  [Routes.Login]: undefined;
};
