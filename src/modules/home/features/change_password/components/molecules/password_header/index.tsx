import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BackButton, HeaderTitle} from '../../atoms';
import {STYLES} from '@/utils';

interface PasswordHeaderProps {
  title: string;
  onBackPress: () => void;
}

export const PasswordHeader: React.FC<PasswordHeaderProps> = ({
  title,
  onBackPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <BackButton onPress={onBackPress} />
        <HeaderTitle title={title} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
});
