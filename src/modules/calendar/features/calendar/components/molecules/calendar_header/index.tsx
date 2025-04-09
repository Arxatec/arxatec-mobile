import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {CalendarText} from '../../atoms/calendar_text';
import {PlusIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {Calendar} from '@/navigation/routes';
import {useAppNavigation} from '@/hooks';

export const CalendarHeader: React.FC = () => {
  const {navigateTo} = useAppNavigation();
  const navigateToCreateEvent = () => navigateTo(Calendar.CreateEvent);
  return (
    <View style={styles.containerHeader}>
      <View style={styles.header}>
        <CalendarText variant="title">Calendario</CalendarText>
        <TouchableOpacity onPress={navigateToCreateEvent}>
          <PlusIcon
            size={20}
            strokeWidth={2}
            color={STYLES.colors.black[900]}
          />
        </TouchableOpacity>
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
