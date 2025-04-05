import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {STYLES} from '@/utils/styles-utils';
import {CalendarText} from '../../atoms/calendar_text';
import {EventDot} from '../../atoms/event_dot';

interface DayCellProps {
  date: Date;
  weekday: string;
  isActive: boolean;
  hasEvents: boolean;
  onPress: () => void;
}

export const DayCell: React.FC<DayCellProps> = ({
  date,
  weekday,
  isActive,
  hasEvents,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.item,
          isActive && {
            backgroundColor: STYLES.colors.blue[600],
          },
        ]}>
        <CalendarText variant="weekday" active={isActive}>
          {weekday}
        </CalendarText>
        <CalendarText variant="date" active={isActive}>
          {date.getDate()}
        </CalendarText>
        {hasEvents && <EventDot />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 2,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
