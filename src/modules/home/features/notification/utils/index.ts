import {Notification} from '../types';

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Operación completada',
    description: 'El proceso se ha completado exitosamente...',
    timestamp: 'hace 2 minutos',
    isNew: true,
  },
  {
    id: '2',
    type: 'info',
    title: 'Error en el sistema',
    description: 'No se pudo completar la operación...',
    timestamp: 'hace 5 minutos',
    isNew: true,
  },
  {
    id: '3',
    type: 'info',
    title: 'Actualización del sistema',
    description: 'Nueva versión disponible para...',
    timestamp: 'hace 10 minutos',
    isNew: true,
  },
  {
    id: '4',
    type: 'warning',
    title: 'Recordatorio importante',
    description: 'Tienes una tarea pendiente que...',
    timestamp: 'hace 15 minutos',
    isNew: true,
  },
  {
    id: '5',
    type: 'document',
    title: 'Nuevo documento',
    description: 'Se ha compartido un nuevo documento...',
    timestamp: 'hace 30 minutos',
    isNew: true,
  },
  {
    id: '6',
    type: 'comment',
    title: 'Nuevo comentario',
    description: 'María comentó en tu publicación...',
    timestamp: 'hace 45 minutos',
    isNew: true,
    user: {
      name: 'María González',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  },
  {
    id: '7',
    type: 'meeting',
    title: 'Reunión programada',
    description: 'Reunión de equipo a las 15:00...',
    timestamp: 'hace 1 hora',
    isNew: true,
  },
  {
    id: '8',
    type: 'success',
    title: 'Pago procesado',
    description: 'El pago ha sido procesado correctamente...',
    timestamp: 'hace 2 horas',
    isNew: false,
  },
  {
    id: '9',
    type: 'info',
    title: 'Mantenimiento programado',
    description: 'El sistema estará en mantenimiento...',
    timestamp: 'hace 3 horas',
    isNew: false,
  },
  {
    id: '10',
    type: 'document',
    title: 'Documento actualizado',
    description: 'Se han realizado cambios en el documento...',
    timestamp: 'hace 4 horas',
    isNew: false,
  },
  {
    id: '11',
    type: 'comment',
    title: 'Respuesta recibida',
    description: 'Juan respondió a tu comentario...',
    timestamp: 'hace 5 horas',
    isNew: false,
    user: {
      name: 'Juan Pérez',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    id: '12',
    type: 'meeting',
    title: 'Cancelación de reunión',
    description: 'La reunión de mañana ha sido cancelada...',
    timestamp: 'hace 6 horas',
    isNew: false,
  },
  {
    id: '13',
    type: 'warning',
    title: 'Vencimiento próximo',
    description: 'Tienes un documento por vencer...',
    timestamp: 'hace 7 horas',
    isNew: false,
  },
  {
    id: '14',
    type: 'error',
    title: 'Error de sincronización',
    description: 'No se pudieron sincronizar los datos...',
    timestamp: 'hace 8 horas',
    isNew: false,
  },
  {
    id: '15',
    type: 'info',
    title: 'Nuevo recurso disponible',
    description: 'Se ha añadido un nuevo recurso...',
    timestamp: 'hace 9 horas',
    isNew: false,
  },
  {
    id: '16',
    type: 'document',
    title: 'Documento compartido',
    description: 'Ana ha compartido un documento contigo...',
    timestamp: 'hace 10 horas',
    isNew: false,
  },
  {
    id: '17',
    type: 'comment',
    title: 'Mención en comentario',
    description: 'Te han mencionado en un comentario...',
    timestamp: 'hace 11 horas',
    isNew: false,
    user: {
      name: 'Ana Silva',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  },
  {
    id: '18',
    type: 'meeting',
    title: 'Nueva sala de reunión',
    description: 'Se ha asignado una nueva sala para...',
    timestamp: 'hace 12 horas',
    isNew: false,
  },
  {
    id: '19',
    type: 'success',
    title: 'Tarea completada',
    description: 'Has completado todas las tareas asignadas...',
    timestamp: 'hace 13 horas',
    isNew: false,
  },
  {
    id: '20',
    type: 'warning',
    title: 'Actualización requerida',
    description: 'Se requiere actualizar la aplicación...',
    timestamp: 'hace 14 horas',
    isNew: false,
  },
];
