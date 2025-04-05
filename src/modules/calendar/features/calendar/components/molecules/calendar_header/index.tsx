import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CalendarText} from '../../atoms/calendar_text';

export const CalendarHeader: React.FC = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.header}>
        <CalendarText variant="title">Calendario</CalendarText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    paddingHorizontal: 16,
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
});
