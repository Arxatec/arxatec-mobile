import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CaseOption as CaseOptionType} from '../../../types';
import {CaseOption} from '../../molecules';

interface CaseOptionsScrollerProps {
  options: CaseOptionType[];
}

export const CaseOptionsScroller: React.FC<CaseOptionsScrollerProps> = ({
  options,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {options.map(option => (
        <CaseOption key={option.id} option={option} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 6,
    alignSelf: 'flex-start',
  },
});
