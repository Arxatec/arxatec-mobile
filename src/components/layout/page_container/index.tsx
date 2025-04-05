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
  paddingHorizontal?: number;
}

export const PageContainer: React.FC<Props> = ({
  children,
  paddingHorizontal = 32,
}) => {
  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 16, paddingHorizontal: paddingHorizontal}}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
  },
});
