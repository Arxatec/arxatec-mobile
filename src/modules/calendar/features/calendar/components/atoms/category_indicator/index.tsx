import React from 'react';
import {View, StyleSheet} from 'react-native';

interface CategoryIndicatorProps {
  color: string;
}

export const CategoryIndicator: React.FC<CategoryIndicatorProps> = ({
  color,
}) => {
  return <View style={[styles.categoryIndicator, {backgroundColor: color}]} />;
};

const styles = StyleSheet.create({
  categoryIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 8,
  },
});
