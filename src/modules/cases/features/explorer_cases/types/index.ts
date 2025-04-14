export interface CaseItem {
  id: number;
  title: string;
  client: string;
  date: string;
  status: 'active' | 'pending' | 'completed';
}

export type TabId =
  | 'all'
  | 'job'
  | 'self'
  | 'family'
  | 'economy'
  | 'culture'
  | 'home';

export interface TabItem {
  id: TabId;
  label: string;
}

export interface ModalOption {
  label: string;
  onPress: () => void;
}

export interface DropdownOption {
  label: string;
  value: string;
}
