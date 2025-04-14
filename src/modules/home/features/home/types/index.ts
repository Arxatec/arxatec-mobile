export type TabId = 'clients' | 'earnings' | 'closed' | 'visits';

export interface TabItem {
  id: TabId;
  label: string;
}

export interface CardData {
  title: string;
  amount: string;
  update: string;
  button: string;
}

export type CardDataMap = {
  [key in TabId]: CardData;
};

export interface Meeting {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
}

export interface CaseItem {
  id: number;
  title: string;
  client: string;
  date: string;
  status: string;
}

export interface ActionOption {
  id: number;
  title: string;
  icon: any;
  color: string;
  action: () => void;
}
