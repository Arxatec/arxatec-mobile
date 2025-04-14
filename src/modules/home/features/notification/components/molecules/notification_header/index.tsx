import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {NotificationText} from '../../atoms';

interface NotificationHeaderProps {
  onBackPress: () => void;
}

export const NotificationHeader = ({onBackPress}: NotificationHeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
        </TouchableOpacity>
        <Text style={styles.title}>Notificaciones</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontFamily: STYLES.fonts.bold,
    fontSize: 18,
    color: STYLES.colors.black[900],
  },
});
