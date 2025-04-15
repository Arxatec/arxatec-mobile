export interface MediaItem {
  id: string;
  uri: string;
}

export interface ProfileData {
  name: string;
  role: string;
  avatar: string;
  description: string;
  email: string;
  phone: string;
}

export interface ActionProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}
