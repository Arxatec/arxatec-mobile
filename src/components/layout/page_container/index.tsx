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
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>{children}</View>
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
    paddingHorizontal: 16,
    marginTop: 40,
  },
});
