import {STYLES} from '@/utils';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const PageContainer: React.FC<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, {marginTop: 16}]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
  },
  container: {
    paddingHorizontal: 32,
  },
});
