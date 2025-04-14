import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowUpRightIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {CaseOption as CaseOptionType} from '../../../types';

interface CaseOptionProps {
  option: CaseOptionType;
}

export const CaseOption: React.FC<CaseOptionProps> = ({option}) => {
  return (
    <TouchableOpacity style={styles.option} onPress={option.action}>
      <View>
        <View style={[styles.iconContainer, {backgroundColor: option.color}]}>
          <option.icon color="#FFF" size={20} />
        </View>
        <Text style={styles.text}>{option.title}</Text>
      </View>
      <ArrowUpRightIcon
        size={16}
        color={STYLES.colors.black[500]}
        strokeWidth={2}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: 250,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
    fontSize: 14,
    marginTop: 8,
  },
});
