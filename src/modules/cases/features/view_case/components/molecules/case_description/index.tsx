import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface CaseDescriptionProps {
  title: string;
  description: string;
}

export const CaseDescription: React.FC<CaseDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleFile}>{title}</Text>
      <Text style={styles.descriptionFile}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  titleFile: {
    fontFamily: STYLES.fonts.bold,
    fontSize: 16,
    color: STYLES.colors.black[900],
  },
  descriptionFile: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    marginTop: 8,
    color: STYLES.colors.black[500],
  },
});
