import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils/styles-utils';
import {CalendarText} from '../../atoms/calendar_text';
import {CategoryIndicator} from '../../atoms/category_indicator';

// Función utilitaria para asignar colores a las categorías
export const getCategoryColor = (category?: string) => {
  switch (category) {
    case 'cliente':
      return STYLES.colors.blue[300];
    case 'tribunal':
      return STYLES.colors.blue[200];
    case 'capacitación':
      return STYLES.colors.blue[600];
    case 'administrativo':
      return STYLES.colors.blue[700];
    case 'investigación':
      return STYLES.colors.blue[800];
    default:
      return STYLES.colors.black[400];
  }
};

interface EventItemProps {
  title: string;
  description: string;
  time?: string;
  category?: string;
}

export const EventItem: React.FC<EventItemProps> = ({
  title,
  description,
  time,
  category,
}) => {
  return (
    <View style={styles.eventItem}>
      <View style={styles.eventTimeContainer}>
        <CalendarText variant="eventTime">{time}</CalendarText>
      </View>
      <View style={styles.eventContent}>
        <CategoryIndicator color={getCategoryColor(category)} />
        <View style={styles.eventDetails}>
          <CalendarText variant="eventTitle">{title}</CalendarText>
          <CalendarText variant="eventDescription">{description}</CalendarText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventItem: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 4,
  },
  eventTimeContainer: {
    width: 60,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventContent: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: STYLES.colors.black[100],
    padding: 10,
  },
  eventDetails: {
    flex: 1,
  },
});
