import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PrimaryButton} from '@/components/atoms';

export const CreateButton: React.FC = () => {
  return (
    <View style={styles.buttonContainer}>
      <PrimaryButton
        title="Crear caso"
        style={{width: 'auto', paddingHorizontal: 24}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
  },
});
