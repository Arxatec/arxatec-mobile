import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {MediaItem as MediaItemType} from '../../../types';

interface MediaItemProps {
  item: MediaItemType;
  onPress?: (item: MediaItemType) => void;
}

export const MediaItem: React.FC<MediaItemProps> = ({item, onPress}) => {
  const handlePress = () => {
    if (onPress) {
      onPress(item);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 8,
  },
});
