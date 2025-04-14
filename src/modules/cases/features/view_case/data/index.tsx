import React from 'react';
import {
  CalendarDaysIcon,
  PlayCircleIcon,
  ScaleIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {CaseInfoItemType, FileItemType} from '../types';

export const CASE_INFO_ITEMS: CaseInfoItemType[] = [
  {
    id: 3,
    label: 'Tipo de caso',
    value: 'Contrato laboral',
    icon: <ScaleIcon size={20} color={STYLES.colors.cyan[500]} />,
    color: STYLES.colors.cyan[100],
  },
  {
    id: 2,
    label: 'Estado caso',
    value: 'Activo',
    icon: <PlayCircleIcon size={20} color={STYLES.colors.sky[500]} />,
    color: STYLES.colors.sky[100],
  },
  {
    id: 1,
    label: 'Creación',
    value: '10/10/2025',
    icon: <CalendarDaysIcon size={20} color={STYLES.colors.blue[500]} />,
    color: STYLES.colors.blue[100],
  },
];

export const FILE_LIST: FileItemType[] = [
  {
    id: 1,
    fileName: 'Contrato laboral',
    uploadDate: '20/10/2025',
    fileSize: '2.5 MB',
  },
  {
    id: 2,
    fileName: 'Demanda civil',
    uploadDate: '18/10/2025',
    fileSize: '1.8 MB',
  },
  {
    id: 3,
    fileName: 'Factura ervicios',
    uploadDate: '15/10/2025',
    fileSize: '500 KB',
  },
];
