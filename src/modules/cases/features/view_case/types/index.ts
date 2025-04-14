import {ReactNode} from 'react';

export interface CaseInfoItemType {
  id: number;
  label: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export interface FileItemType {
  id: number;
  fileName: string;
  uploadDate: string;
  fileSize: string;
}
