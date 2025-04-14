import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {FolderIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {CaseItem as CaseItemType} from '../../../types';

interface CaseItemProps {
  item: CaseItemType;
  onPress: () => void;
}

export const CaseItem: React.FC<CaseItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.caseItemContainer}>
      <View style={styles.caseItem}>
        <View style={styles.caseItemContent}>
          <View style={styles.caseIconContainer}>
            <FolderIcon
              size={20}
              color={STYLES.colors.blue[600]}
              strokeWidth={2}
            />
          </View>
          <View style={styles.caseInfo}>
            <Text style={styles.caseTitle}>{item.title}</Text>
            <View style={styles.caseMetaInfo}>
              <Text style={styles.caseMetaText}>{item.client}</Text>
              <View style={styles.metaDot}></View>
              <Text style={styles.caseMetaText}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  caseItemContainer: {
    marginTop: 4,
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
  caseIconContainer: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  caseInfo: {
    marginLeft: 8,
  },
  caseTitle: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  caseMetaInfo: {
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
