import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ActionOption} from '../../molecules';
import {ActionOption as ActionOptionType} from '../../../types';

interface ActionOptionsSectionProps {
  options: ActionOptionType[];
}

export const ActionOptionsSection: React.FC<ActionOptionsSectionProps> = ({
  options,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}>
      {options.map(option => (
        <ActionOption key={option.id} option={option} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 6,
    alignSelf: 'flex-start',
  },
});
