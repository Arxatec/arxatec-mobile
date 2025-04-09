import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {
  BellIcon,
  CalendarDaysIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  DocumentIcon,
  ChatBubbleLeftIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {CustomAvatar} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';

interface Notification {
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

const notifications: Notification[] = [
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

const getIconByType = (type: Notification['type']) => {
  switch (type) {
    case 'success':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.teal[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <CheckCircleIcon size={20} color={STYLES.colors.teal[600]} />
        </View>
      );
    case 'error':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.rose[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <ExclamationCircleIcon size={20} color={STYLES.colors.rose[500]} />
        </View>
      );
    case 'info':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.blue[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <InformationCircleIcon size={20} color={STYLES.colors.blue[600]} />
        </View>
      );
    case 'warning':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.sky[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <ExclamationTriangleIcon size={20} color={STYLES.colors.sky[600]} />
        </View>
      );
    case 'document':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.black[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <DocumentIcon size={20} color={STYLES.colors.black[500]} />
        </View>
      );
    case 'comment':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.blue[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <ChatBubbleLeftIcon size={20} color={STYLES.colors.blue[400]} />
        </View>
      );
    case 'meeting':
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.purple[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <CalendarDaysIcon size={20} color={STYLES.colors.purple[600]} />
        </View>
      );
    default:
      return (
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: STYLES.colors.black[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <BellIcon size={20} color={STYLES.colors.black[400]} />
        </View>
      );
  }
};

export default function Notification() {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(Home.Dashboard);

  const renderItem = ({item}: {item: Notification}) => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        {item.user ? (
          <CustomAvatar
            avatar={item.user.avatar}
            size={45}
            username={item.user.name}
          />
        ) : (
          getIconByType(item.type)
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleNotification}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={1} lineBreakMode="tail">
          {item.description}
        </Text>
      </View>
      <View style={styles.metaContainer}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        {item.isNew && <View style={styles.dot} />}
      </View>
    </View>
  );

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToDashboard}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
          </TouchableOpacity>
          <Text style={styles.title}>Notificaciones</Text>
        </View>
      </View>
      <FlatList
        style={{borderRadius: 10}}
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  listContainer: {
    paddingVertical: 0,
  },
  notificationItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  titleNotification: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  description: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    marginTop: 4,
    color: STYLES.colors.black[500],
  },
  metaContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 4,
  },
  timestamp: {
    fontSize: 12,
    color: STYLES.colors.black[400],
    fontFamily: STYLES.fonts.regular,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: STYLES.colors.blue[600],
  },
});
