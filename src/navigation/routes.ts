export enum Routes {
  Introduction = 'Introduction',
  Register = 'Register',
  Login = 'Login',
  AuthOptions = 'AuthOptions',
  ForgotPassword = 'ForgotPassword',
  Home = 'Home',
}

export type RootStackParamList = {
  [Routes.Introduction]: undefined;
  [Routes.Home]: undefined;
  [Routes.Register]: undefined;
  [Routes.AuthOptions]: undefined;
  [Routes.ForgotPassword]: undefined;
  [Routes.Login]: undefined;
};
