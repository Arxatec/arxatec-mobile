import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {STYLES} from '@/utils';

export const CaseHeader: React.FC = () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
        </TouchableOpacity>
        <Text style={styles.title}>Crear caso</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },
});
