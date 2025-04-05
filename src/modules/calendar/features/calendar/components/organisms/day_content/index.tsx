import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {CalendarText} from '../../atoms/calendar_text';
import {EventItem} from '../../molecules/event_item';
import {NoEventsMessage} from '../../molecules/no_events_message';
import {toCamelCase} from '../../../utils/stringUtils';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time?: string;
  category?: string;
}

interface DayContentProps {
  date: Date;
  formatDate: (date: Date) => string;
  events: Event[];
}

export const DayContent: React.FC<DayContentProps> = ({
  date,
  formatDate,
  events,
}) => {
  return (
    <View style={styles.dayContentContainer}>
      <CalendarText variant="subtitle" style={styles.dateTitle}>
        {toCamelCase(formatDate(date))}
      </CalendarText>

      <View style={styles.placeholder}>
        <View style={styles.placeholderInset}>
          {events.length > 0 ? (
            <FlatList
              data={events}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <EventItem
                  title={item.title}
                  description={item.description}
                  time={item.time}
                  category={item.category}
                />
              )}
            />
          ) : (
            <NoEventsMessage />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dayContentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  dateTitle: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 0,
  },
});
