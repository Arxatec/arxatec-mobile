import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';

interface HeaderProps {
  onBackPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({onBackPress}) => {
  return (
    <View style={styles.fixedHeader}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
          <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedHeader: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
});
