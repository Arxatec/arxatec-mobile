import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Case} from '../../../types';
import {CaseItem} from '../../molecules';

interface CaseListProps {
  cases: Case[];
  onCasePress: () => void;
  onOptionsPress: () => void;
}

export const CaseList: React.FC<CaseListProps> = ({
  cases,
  onCasePress,
  onOptionsPress,
}) => {
  return (
    <View style={styles.container}>
      {cases.map(caseItem => (
        <CaseItem
          key={caseItem.id}
          caseItem={caseItem}
          onPress={onCasePress}
          onOptionsPress={onOptionsPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
