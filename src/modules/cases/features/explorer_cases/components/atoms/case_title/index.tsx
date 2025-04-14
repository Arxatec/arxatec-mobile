import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {STYLES} from '@/utils';

interface CaseTitleProps {
  title: string;
}

export const CaseTitle: React.FC<CaseTitleProps> = ({title}) => {
  return <Text style={styles.caseTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  caseTitle: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
});
