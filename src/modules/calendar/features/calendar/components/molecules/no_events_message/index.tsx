import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CalendarText} from '../../atoms/calendar_text';

export const NoEventsMessage: React.FC = () => {
  return (
    <View style={styles.noEventsContainer}>
      <CalendarText variant="noEvents">
        No hay eventos para este día
      </CalendarText>
    </View>
  );
};

const styles = StyleSheet.create({
  noEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
});
