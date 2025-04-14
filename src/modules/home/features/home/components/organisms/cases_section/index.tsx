import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {CaseItem} from '../../molecules';
import {CaseItem as CaseItemType} from '../../../types';
import {STYLES} from '@/utils';

interface CasesSectionProps {
  cases: CaseItemType[];
  onCasePress: () => void;
  onSeeAllPress: () => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({
  cases,
  onCasePress,
  onSeeAllPress,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Tus casos recientes</Text>
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={styles.seeAllText}>Mirar todos</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingHorizontal: 16}}>
        {cases.map(caseItem => (
          <CaseItem key={caseItem.id} item={caseItem} onPress={onCasePress} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
