export enum Routes {
  Introduction = 'Introduction',
  Register = 'Register',
  Login = 'Login',
  AuthOptions = 'AuthOptions',
  ForgotPassword = 'ForgotPassword',
  Tabs = 'Tabs',
}

export enum RoutesTabs {
  Home = 'Home',
  Messages = 'Messages',
  Posts = 'Posts',
  Cases = 'Cases',
  Calendar = 'Calendar',
}

export type RootStackParamList = {
  [Routes.Introduction]: undefined;
  [Routes.Register]: undefined;
  [Routes.AuthOptions]: undefined;
  [Routes.ForgotPassword]: undefined;
  [Routes.Login]: undefined;
  [Routes.Tabs]: undefined;
};
