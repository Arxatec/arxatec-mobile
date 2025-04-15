import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface SectionTitleProps {
  icon: React.ReactNode;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({icon, title}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[700],
  },
});
