import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';
import {SettingsText} from '../../atoms/settings_text';

interface SettingsHeaderProps {
  onBackPress: () => void;
}

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  onBackPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
        </TouchableOpacity>
        <SettingsText variant="title">Configuración</SettingsText>
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
