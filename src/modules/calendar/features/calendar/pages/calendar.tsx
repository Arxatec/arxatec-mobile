import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/es';

import {STYLES} from '@/utils/styles-utils';
import {Event} from '../types';
import {generateEvents} from '../utils/eventUtils';
import {CalendarHeader} from '../components/molecules';
import {DaysSwiper, WeekSelector} from '../components/organisms';
import {PlusIcon} from 'react-native-heroicons/outline';

// Datos de eventos
const eventsData: Event[] = generateEvents();

export default function Calendar() {
  const [week, setWeek] = useState(0);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    moment.locale('es');
  }, []);

  /**
   * Create an array of weekdays for previous, current, and next weeks.
   */
  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({length: 7}).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  /**
   * Create an array of days for yesterday, today, and tomorrow.
   */
  const days = React.useMemo(() => {
    return [
      moment(value).subtract(1, 'day').toDate(),
      value,
      moment(value).add(1, 'day').toDate(),
    ];
  }, [value]);

  const formatDate = (date: Date) => {
    return moment(date).format('dddd, D [de] MMMM [de] YYYY');
  };

  // Filtrar eventos para el día seleccionado
  const getEventsForDay = (day: Date) => {
    return eventsData.filter(
      event =>
        moment(event.date).format('YYYY-MM-DD') ===
        moment(day).format('YYYY-MM-DD'),
    );
  };

  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor={STYLES.colors.white[1]}
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.container}>
        <CalendarHeader />

        <WeekSelector
          weeks={weeks}
          value={value}
          setValue={setValue}
          week={week}
          setWeek={setWeek}
          getEventsForDay={getEventsForDay}
        />

        <DaysSwiper
          days={days}
          value={value}
          setValue={setValue}
          week={week}
          setWeek={setWeek}
          formatDate={formatDate}
          getEventsForDay={getEventsForDay}
        />
      </View>

      <TouchableOpacity style={styles.floatingButton}>
        <PlusIcon size={20} color="#FFF"></PlusIcon>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
  },
  container: {
    flex: 1,
  },
  floatingButton: {
    backgroundColor: STYLES.colors.blue[600],
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
});
