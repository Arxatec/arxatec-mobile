import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {CaseItem} from '../../molecules';
import {CaseItem as CaseItemType} from '../../../types';

interface CasesListProps {
  cases: CaseItemType[];
  onCasePress: (caseId: number) => void;
  onOptionsPress: () => void;
}

export const CasesList: React.FC<CasesListProps> = ({
  cases,
  onCasePress,
  onOptionsPress,
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <View>
        {cases.map(caseItem => (
          <CaseItem
            key={caseItem.id}
            caseItem={caseItem}
            onPress={() => onCasePress(caseItem.id)}
            onOptionsPress={onOptionsPress}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
  },
});
