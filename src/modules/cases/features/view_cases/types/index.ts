export interface Case {
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

export interface CaseOption {
  id: number;
  title: string;
  icon: any;
  color: string;
  action: () => void;
}
