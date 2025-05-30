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
  Community = 'Community',
  Cases = 'Cases',
  Calendar = 'Calendar',
}

export enum Messages {
  ViewChats = 'ViewChats',
  ViewChat = 'ViewChat',
  InfoChat = 'InfoChat',
}

export enum Community {
  ViewPosts = 'ViewPosts',
  ViewPost = 'ViewPost',
  CreatePost = 'CreatePost',
}

export enum Home {
  Dashboard = 'Dashboard',
  Settings = 'Settings',
  Notification = 'Notification',
  ChangePassword = 'ChangePassword',
  EditProfile = 'EditProfile',
}

export enum Cases {
  ViewCases = 'ViewCases',
  ViewCase = 'ViewCase',
  CreateCase = 'CreateCase',
  ViewClients = 'ViewClients',
  ExplorerCases = 'ExplorerCases',
}

export enum Calendar {
  CalendarDay = 'CalendarDay',
  CreateEvent = 'CreateEvent',
}

export type RootStackParamList = {
  [Routes.Introduction]: undefined;
  [Routes.Register]: undefined;
  [Routes.AuthOptions]: undefined;
  [Routes.ForgotPassword]: undefined;
  [Routes.Login]: undefined;
  [Routes.Tabs]: undefined;
};
