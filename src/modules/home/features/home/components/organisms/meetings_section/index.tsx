import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {MeetingCard} from '../../molecules';
import {Meeting} from '../../../types';
import {STYLES} from '@/utils';

interface MeetingsSectionProps {
  meetings: Meeting[];
  onSeeAllPress: () => void;
}

export const MeetingsSection: React.FC<MeetingsSectionProps> = ({
  meetings,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.meetingsContainer}>
      <View style={styles.container}>
        <View style={styles.meetingsSectionHeader}>
          <Text style={styles.sectionTitle}>Eventos de hoy</Text>
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={styles.seeAllText}>Mirar todos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 16}}>
        {meetings.map(meeting => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingsContainer: {
    marginBottom: 4,
    marginTop: 4,
  },
  container: {
    paddingHorizontal: 16,
  },
  meetingsSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[500],
  },
});
