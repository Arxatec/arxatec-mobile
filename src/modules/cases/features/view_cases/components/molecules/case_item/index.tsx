import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EllipsisVerticalIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {Case} from '../../../types';
import {CaseIcon, CaseMetaDot} from '../../atoms';

interface CaseItemProps {
  caseItem: Case;
  onPress: () => void;
  onOptionsPress: () => void;
}

export const CaseItem: React.FC<CaseItemProps> = ({
  caseItem,
  onPress,
  onOptionsPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.content}>
          <CaseIcon />
          <View style={styles.info}>
            <Text style={styles.title}>{caseItem.title}</Text>
            <View style={styles.metaInfo}>
              <Text style={styles.metaText}>{caseItem.client}</Text>
              <CaseMetaDot />
              <Text style={styles.metaText}>{caseItem.date}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onOptionsPress}>
          <EllipsisVerticalIcon size={24} color={STYLES.colors.black[900]} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
  },
  info: {
    marginLeft: 8,
  },
  title: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
});
