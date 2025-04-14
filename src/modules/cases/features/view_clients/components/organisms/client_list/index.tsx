import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {ClientItem} from '../../molecules';
import {Client} from '../../../types';

interface ClientListProps {
  clients: Client[];
}

export const ClientList: React.FC<ClientListProps> = ({clients}) => {
  return (
    <FlatList
      data={clients}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ClientItem client={item} />}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    borderRadius: 16,
  },
});
