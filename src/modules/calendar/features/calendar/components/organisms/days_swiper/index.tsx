import React, {useRef} from 'react';
import Swiper from 'react-native-swiper';
import moment from 'moment';
import {DayContent} from '../day_content';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time?: string;
  category?: string;
}

interface DaysSwiperProps {
  days: Date[];
  value: Date;
  setValue: (date: Date) => void;
  week: number;
  setWeek: (week: number) => void;
  formatDate: (date: Date) => string;
  getEventsForDay: (date: Date) => Event[];
}

export const DaysSwiper: React.FC<DaysSwiperProps> = ({
  days,
  value,
  setValue,
  week,
  setWeek,
  formatDate,
  getEventsForDay,
}) => {
  const contentSwiper = useRef<Swiper>(null);

  return (
    <Swiper
      index={1}
      ref={contentSwiper}
      loop={false}
      showsPagination={false}
      onIndexChanged={(ind: number) => {
        if (ind === 1) {
          return;
        }

        setTimeout(() => {
          const nextValue = moment(value).add(ind - 1, 'days');

          // Adjust week picker if needed
          if (moment(value).week() !== nextValue.week()) {
            setWeek(moment(value).isBefore(nextValue) ? week + 1 : week - 1);
          }

          setValue(nextValue.toDate());
          contentSwiper.current?.scrollTo(1, false);
        }, 10);
      }}>
      {days.map((day, index) => {
        const dayEvents = getEventsForDay(day);
        return (
          <DayContent
            key={index}
            date={day}
            formatDate={formatDate}
            events={dayEvents}
          />
        );
      })}
    </Swiper>
  );
};
