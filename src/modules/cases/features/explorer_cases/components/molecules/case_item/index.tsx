import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {CaseIcon, CaseMetaText, CaseTitle, OptionsButton} from '../../atoms';
import {CaseItem as CaseItemType} from '../../../types';

interface CaseItemProps {
  caseItem: CaseItemType;
  onPress: () => void;
  onOptionsPress: () => void;
}

export const CaseItem: React.FC<CaseItemProps> = ({
  caseItem,
  onPress,
  onOptionsPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.caseItemContainer}>
      <View style={styles.caseItem}>
        <View style={styles.caseItemContent}>
          <CaseIcon />
          <View style={styles.caseInfo}>
            <CaseTitle title={caseItem.title} />
            <View style={styles.caseMetaInfo}>
              <CaseMetaText showDot>{caseItem.client}</CaseMetaText>
              <CaseMetaText>{caseItem.date}</CaseMetaText>
            </View>
          </View>
        </View>
        <OptionsButton onPress={onOptionsPress} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caseItemContainer: {
    marginBottom: 4,
  },
  caseItem: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caseItemContent: {
    flexDirection: 'row',
  },
  caseInfo: {
    marginLeft: 8,
  },
  caseMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
