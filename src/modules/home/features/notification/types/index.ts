export interface Notification {
  id: string;
  type:
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'document'
    | 'comment'
    | 'meeting'
    | 'payroll'
    | 'permission'
    | 'evaluation'
    | 'post';
  title: string;
  description: string;
  timestamp: string;
  user?: {
    name: string;
    avatar: string;
  };
  isNew: boolean;
}
