import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {STYLES} from '@/utils';
import {FileItem} from '../../molecules';
import {FileItemType} from '../../../types';

interface FileListProps {
  files: FileItemType[];
  onOptionsPress: (fileId: number) => void;
}

export const FileList: React.FC<FileListProps> = ({files, onOptionsPress}) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Archivos adjuntos</Text>
      </View>
      {files.map(fileItem => (
        <TouchableOpacity key={fileItem.id} style={styles.fileItemContainer}>
          <FileItem
            fileName={fileItem.fileName}
            fileSize={fileItem.fileSize}
            uploadDate={fileItem.uploadDate}
            onOptionsPress={() => onOptionsPress(fileItem.id)}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginTop: 4,
    marginBottom: 4,
  },
  headerText: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 16,
  },
  fileItemContainer: {
    padding: 14,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 4,
  },
});
