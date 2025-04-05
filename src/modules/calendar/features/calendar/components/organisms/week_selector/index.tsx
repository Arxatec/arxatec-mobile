import React, {useRef} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import moment from 'moment';
import {DayCell} from '../../molecules/day_cell';
import {toCamelCase} from '../../../utils/stringUtils';

const {width} = Dimensions.get('window');

interface WeekData {
  weekday: string;
  date: Date;
}

interface WeekSelectorProps {
  weeks: WeekData[][];
  value: Date;
  setValue: (date: Date) => void;
  week: number;
  setWeek: (week: number) => void;
  getEventsForDay: (date: Date) => any[];
}

export const WeekSelector: React.FC<WeekSelectorProps> = ({
  weeks,
  value,
  setValue,
  week,
  setWeek,
  getEventsForDay,
}) => {
  const swiper = useRef<Swiper>(null);

  return (
    <View style={styles.picker}>
      <Swiper
        index={1}
        ref={swiper}
        loop={false}
        showsPagination={false}
        onIndexChanged={(ind: number) => {
          if (ind === 1) {
            return;
          }

          const index = ind - 1;
          setValue(moment(value).add(index, 'week').toDate());

          setTimeout(() => {
            setWeek(week + index);
            swiper.current?.scrollTo(1, false);
          }, 10);
        }}>
        {weeks.map((dates, index) => (
          <View style={styles.itemRow} key={index}>
            {dates.map((item, dateIndex) => {
              const isActive =
                value.toDateString() === item.date.toDateString();
              const hasEvents = getEventsForDay(item.date).length > 0;

              return (
                <DayCell
                  key={dateIndex}
                  date={item.date}
                  weekday={toCamelCase(item.weekday).slice(0, 3)}
                  isActive={isActive}
                  hasEvents={hasEvents}
                  onPress={() => setValue(item.date)}
                />
              );
            })}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    maxHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});
