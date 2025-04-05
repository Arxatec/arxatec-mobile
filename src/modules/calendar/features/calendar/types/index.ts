export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time?: string;
  category?: string;
}

export type CategoryTitles = {
  [key: string]: string[];
};

export type CategoryDescriptions = {
  [key: string]: string[];
};
