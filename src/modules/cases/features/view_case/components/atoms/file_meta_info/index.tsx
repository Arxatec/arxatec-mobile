import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';

interface FileMetaInfoProps {
  fileSize: string;
  uploadDate: string;
}

export const FileMetaInfo: React.FC<FileMetaInfoProps> = ({
  fileSize,
  uploadDate,
}) => {
  return (
    <View style={styles.fileMetaInfo}>
      <Text style={styles.fileMetaText}>{fileSize}</Text>
      <View style={styles.metaDot}></View>
      <Text style={styles.fileMetaText}>{uploadDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fileMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  fileMetaText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
  metaDot: {
    width: 5,
    height: 5,
    backgroundColor: STYLES.colors.black[400],
    borderRadius: 200,
  },
});
