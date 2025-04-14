import React from 'react';
import {StyleSheet, View} from 'react-native';
import {STYLES} from '@/utils';

interface CaseMetaDotProps {
  color?: string;
  size?: number;
}

export const CaseMetaDot: React.FC<CaseMetaDotProps> = ({
  color = STYLES.colors.black[400],
  size = 5,
}) => {
  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: color,
          width: size,
          height: size,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    borderRadius: 200,
  },
});
