import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {BackButton} from '../../atoms/back_button';

interface HeaderSectionProps {
  title: string;
  onBackPress: () => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  onBackPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BackButton onPress={onBackPress} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
});
