import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface CaseInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

export const CaseInfoItem: React.FC<CaseInfoItemProps> = ({
  icon,
  label,
  value,
  color,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        {icon}
      </View>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
  },
  label: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  value: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[500],
  },
});
