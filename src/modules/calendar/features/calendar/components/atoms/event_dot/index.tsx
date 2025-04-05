import React from 'react';
import {View, StyleSheet} from 'react-native';
import {STYLES} from '@/utils/styles-utils';

interface EventDotProps {
  color?: string;
}

export const EventDot: React.FC<EventDotProps> = ({
  color = STYLES.colors.blue[600],
}) => {
  return <View style={[styles.eventDot, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  eventDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
});
