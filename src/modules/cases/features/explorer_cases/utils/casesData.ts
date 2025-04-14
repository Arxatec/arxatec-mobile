import {CaseItem, TabItem} from '../types';

export const casesList: CaseItem[] = [
  {
    id: 1,
    title: 'Asesoramiento en derecho laboral',
    client: 'Maria Lopez',
    date: '20/10/2025',
    status: 'active',
  },
  {
    id: 2,
    title: 'Demanda por incumplimiento de contrato',
    client: 'Juan Pérez',
    date: '18/10/2025',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Reclamo por servicios profesionales',
    client: 'Ana Martínez',
    date: '15/10/2025',
    status: 'active',
  },
  {
    id: 4,
    title: 'Asesoría en propiedad intelectual',
    client: 'Carlos Rodríguez',
    date: '12/10/2025',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Defensa en caso de accidente laboral',
    client: 'Laura Sánchez',
    date: '10/10/2025',
    status: 'active',
  },
  {
    id: 6,
    title: 'Mediación en conflicto comercial',
    client: 'Roberto García',
    date: '08/10/2025',
    status: 'pending',
  },
  {
    id: 7,
    title: 'Asesoramiento en derecho de familia',
    client: 'Sofía Torres',
    date: '05/10/2025',
    status: 'active',
  },
  {
    id: 8,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 9,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 10,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 11,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 12,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
];

export const tabs: TabItem[] = [
  {id: 'all', label: 'Todos'},
  {id: 'job', label: 'Laboral'},
  {id: 'self', label: 'Personal'},
  {id: 'family', label: 'Familiar'},
  {id: 'culture', label: 'Cultura'},
  {id: 'economy', label: 'Economía'},
  {id: 'home', label: 'Vivienda'},
];

export const typeOptions = [
  {label: 'Caso', value: 'case'},
  {label: 'Consulta', value: 'question'},
  {label: 'Asesoría', value: 'advice'},
];
