import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {CardData} from '../../../types';

interface StatCardProps {
  data: CardData;
}

export const StatCard: React.FC<StatCardProps> = ({data}) => {
  return (
    <View style={styles.paymentCard}>
      <Text style={styles.paymentCardTitle}>{data.title}</Text>
      <Text style={styles.paymentAmount}>{data.amount}</Text>
      <Text style={styles.updateText}>{data.update}</Text>

      <TouchableOpacity style={styles.viewPricingButton}>
        <Text style={styles.viewPricingText}>{data.button}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentCard: {
    backgroundColor: STYLES.colors.blue[600],
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },
  paymentCardTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.white[1],
    opacity: 0.8,
  },
  paymentAmount: {
    fontSize: 28,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.white[1],
    marginTop: 4,
  },
  updateText: {
    fontSize: 12,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.white[1],
    opacity: 0.7,
    marginTop: 2,
  },
  viewPricingButton: {
    marginTop: 16,
    backgroundColor: STYLES.colors.white[1],
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  viewPricingText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
  },
});
