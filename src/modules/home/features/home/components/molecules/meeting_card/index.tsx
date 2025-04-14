import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Meeting} from '../../../types';
import {STYLES} from '@/utils';

interface MeetingCardProps {
  meeting: Meeting;
}

export const MeetingCard: React.FC<MeetingCardProps> = ({meeting}) => {
  return (
    <View key={meeting.id} style={styles.meetingCard}>
      <View style={styles.meetingDateContainer}>
        <Text style={styles.meetingDate}>
          {meeting.date} • {meeting.time}
        </Text>
      </View>
      <Text style={styles.meetingTitle}>{meeting.title}</Text>
      <Text style={styles.meetingLocation}>{meeting.location}</Text>
      <Text style={styles.meetingLocation}>ID #{meeting.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginRight: 4,
    width: 250,
  },
  meetingDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  meetingDate: {
    fontSize: 12,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[500],
  },
  meetingTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginBottom: 4,
  },
  meetingLocation: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[500],
    marginTop: 4,
  },
});
