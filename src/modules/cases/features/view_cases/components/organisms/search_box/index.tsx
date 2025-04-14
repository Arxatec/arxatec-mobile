import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {STYLES} from '@/utils';
import {TabId, TabItem} from '../../../types';
import {CaseSearch} from '../../molecules';
import {TabButton} from '../../atoms';

interface SearchBoxProps {
  searchValue: string;
  onSearchChange: (text: string) => void;
  tabs: TabItem[];
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchValue,
  onSearchChange,
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.searchContainer}>
          <CaseSearch value={searchValue} onChangeText={onSearchChange} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onPress={onTabChange}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 4,
  },
  box: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 16,
  },
});
