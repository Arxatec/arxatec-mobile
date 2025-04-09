import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {STYLES} from '@/utils';

export interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
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
  title: {
    fontSize: 20,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
});
