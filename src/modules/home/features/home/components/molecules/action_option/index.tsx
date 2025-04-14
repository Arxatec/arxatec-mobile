import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {ArrowUpRightIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {OptionIcon} from '../../atoms';
import {ActionOption as ActionOptionType} from '../../../types';

interface ActionOptionProps {
  option: ActionOptionType;
}

export const ActionOption: React.FC<ActionOptionProps> = ({option}) => {
  return (
    <TouchableOpacity
      key={option.id}
      style={styles.option}
      onPress={option.action}>
      <View>
        <OptionIcon
          icon={<option.icon color="#FFF" size={20} />}
          backgroundColor={option.color}
        />
        <Text style={styles.optionText}>{option.title}</Text>
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
  optionText: {
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
    fontSize: 14,
    marginTop: 8,
  },
});
