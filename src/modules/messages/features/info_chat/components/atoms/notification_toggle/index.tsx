import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {STYLES} from '@/utils';

interface NotificationToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const NotificationToggle: React.FC<NotificationToggleProps> = ({
  value,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notificaciones</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor="#FFF"
        trackColor={{
          false: STYLES.colors.black[200],
          true: STYLES.colors.blue[600],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    color: STYLES.colors.black[800],
    fontFamily: STYLES.fonts.medium,
  },
});
