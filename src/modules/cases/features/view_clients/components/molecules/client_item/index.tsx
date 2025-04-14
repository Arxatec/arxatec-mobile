import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {ClientAvatar} from '../../atoms';
import {Client} from '../../../types';

interface ClientItemProps {
  client: Client;
}

export const ClientItem: React.FC<ClientItemProps> = ({client}) => {
  return (
    <View style={styles.clientItem}>
      <ClientAvatar avatar={client.avatar} username={client.name} size={50} />
      <View style={styles.clientInfo}>
        <Text style={styles.clientName}>{client.name}</Text>
        <Text style={styles.clientEmail}>{client.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 4,
  },
  clientInfo: {
    marginLeft: 16,
  },
  clientName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[800],
  },
  clientEmail: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[600],
  },
});
