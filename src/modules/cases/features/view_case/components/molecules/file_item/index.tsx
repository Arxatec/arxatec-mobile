import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {EllipsisVerticalIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {FileIcon, FileMetaInfo} from '../../atoms';

interface FileItemProps {
  fileName: string;
  fileSize: string;
  uploadDate: string;
  onOptionsPress: () => void;
}

export const FileItem: React.FC<FileItemProps> = ({
  fileName,
  fileSize,
  uploadDate,
  onOptionsPress,
}) => {
  return (
    <View style={styles.fileItem}>
      <View style={styles.fileItemContent}>
        <FileIcon />
        <View style={styles.fileInfo}>
          <Text style={styles.fileTitle}>{fileName}</Text>
          <FileMetaInfo fileSize={fileSize} uploadDate={uploadDate} />
        </View>
      </View>
      <TouchableOpacity onPress={onOptionsPress}>
        <EllipsisVerticalIcon size={24} color={STYLES.colors.black[900]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fileItemContent: {
    flexDirection: 'row',
  },
  fileInfo: {
    marginLeft: 8,
  },
  fileTitle: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
});
