import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DocumentPlusIcon} from 'react-native-heroicons/outline';
import {STYLES} from '@/utils';

export const MultimediaUploader: React.FC = () => {
  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.label}>Multimedia</Text>
        <View>
          <TouchableOpacity style={styles.uploadButton}>
            <DocumentPlusIcon size={32} color={STYLES.colors.black[400]} />
            <Text style={styles.uploadText}>
              Pulsa aquí para subir un archivo multimedia
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 4,
    gap: 8,
  },
  uploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: STYLES.colors.black[200],
    borderRadius: 10,
    gap: 8,
  },
  uploadText: {
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    textAlign: 'center',
  },
  label: {
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.medium,
    fontSize: 14,
    marginBottom: 8,
  },
});
