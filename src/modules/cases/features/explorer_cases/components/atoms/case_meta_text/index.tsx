import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {STYLES} from '@/utils';

interface CaseMetaTextProps {
  children: React.ReactNode;
  showDot?: boolean;
}

export const CaseMetaText: React.FC<CaseMetaTextProps> = ({
  children,
  showDot = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.caseMetaText}>{children}</Text>
      {showDot && <View style={styles.metaDot} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  caseMetaText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
  metaDot: {
    width: 5,
    height: 5,
    backgroundColor: STYLES.colors.black[400],
    borderRadius: 200,
  },
});
