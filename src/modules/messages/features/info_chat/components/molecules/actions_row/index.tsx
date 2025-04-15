import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CalendarDaysIcon, ShareIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {ActionButton} from '../../atoms/action_button';
import {ActionProps} from '../../../types';

interface ActionsRowProps {
  actions?: ActionProps[];
}

export const ActionsRow: React.FC<ActionsRowProps> = ({actions}) => {
  // Default actions si no se proporcionan
  const defaultActions: ActionProps[] = [
    {
      icon: <CalendarDaysIcon color={STYLES.colors.blue[600]} size={24} />,
      label: 'Agendar',
    },
    {
      icon: <ShareIcon color={STYLES.colors.blue[600]} size={24} />,
      label: 'Compartir',
    },
  ];

  const buttonsToRender = actions || defaultActions;

  return (
    <View style={styles.container}>
      {buttonsToRender.map((action, index) => (
        <ActionButton
          key={`action-${index}`}
          icon={action.icon}
          label={action.label}
          onPress={action.onPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});
