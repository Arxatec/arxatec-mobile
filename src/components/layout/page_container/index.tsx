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
  scrollEnabled?: boolean;
  statusBarBackground?: string;
  translucent?: boolean;
  marginTop?: number;
}

export const PageContainer: React.FC<Props> = ({
  children,
  paddingHorizontal = 16,
  scrollEnabled = true,
  statusBarBackground = 'transparent',
  translucent = true,
  marginTop = 48,
}) => {
  const contentStyle = {
    marginTop: translucent ? marginTop : 0,
    paddingHorizontal: paddingHorizontal,
  };

  return (
    <SafeAreaView style={styles.containerPage}>
      <StatusBar
        backgroundColor={statusBarBackground}
        translucent={translucent}
        barStyle="dark-content"
      />
      {scrollEnabled ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={contentStyle}>{children}</View>
        </ScrollView>
      ) : (
        <View style={[styles.contentContainer, contentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
    backgroundColor: STYLES.colors.white[1],
  },
  contentContainer: {
    flex: 1,
  },
});
