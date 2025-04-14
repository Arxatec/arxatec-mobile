import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {BackButton, ClientList} from '../components';
import {clients} from '../types/client-data';

export default function ViewClients() {
  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <BackButton />
          <Text style={styles.title}>Tus clientes</Text>
        </View>
      </View>

      <ClientList clients={clients} />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },
});
