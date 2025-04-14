import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {CaseInfoItem} from '../../atoms';
import {CaseInfoItemType} from '../../../types';

interface CaseInfoCarouselProps {
  caseInfoItems: CaseInfoItemType[];
}

export const CaseInfoCarousel: React.FC<CaseInfoCarouselProps> = ({
  caseInfoItems,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {caseInfoItems.map(item => (
        <CaseInfoItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          value={item.value}
          color={item.color}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    paddingHorizontal: 16,
    gap: 5,
  },
});
