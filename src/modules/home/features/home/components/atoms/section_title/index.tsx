import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return <Text style={styles.sectionTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
  },
});
