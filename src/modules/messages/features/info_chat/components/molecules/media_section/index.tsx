import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {PhotoIcon} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {SectionTitle} from '../../atoms/section_title';
import {MediaItem} from '../../atoms/media_item';
import {MediaItem as MediaItemType} from '../../../types';

interface MediaSectionProps {
  media: MediaItemType[];
  onViewAll?: () => void;
  onItemPress?: (item: MediaItemType) => void;
}

export const MediaSection: React.FC<MediaSectionProps> = ({
  media,
  onViewAll,
  onItemPress,
}) => {
  return (
    <View style={[styles.section, {padding: 0}]}>
      <View
        style={[
          styles.sectionHeaderWithLink,
          {paddingHorizontal: 16, paddingTop: 16},
        ]}>
        <View style={styles.header}>
          <SectionTitle
            icon={<PhotoIcon color={STYLES.colors.black[700]} size={18} />}
            title={`Media (${media.length})`}
          />
        </View>
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.link}>Mirar todo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={media}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MediaItem item={item} onPress={onItemPress} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 9,
  },
  sectionHeaderWithLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: STYLES.colors.black[500],
    fontSize: 13,
    fontFamily: STYLES.fonts.medium,
  },
  flatList: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
});
