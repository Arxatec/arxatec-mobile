import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SearchPanel, TabsBar} from '../../molecules';
import {TabId, TabItem, DropdownOption} from '../../../types';

interface SearchBoxProps {
  tabs: TabItem[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  typeOptions: DropdownOption[];
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  tabs,
  activeTab,
  onTabChange,
  selectedType,
  onTypeChange,
  typeOptions,
}) => {
  return (
    <View style={styles.searchBox}>
      <SearchPanel
        selectedType={selectedType}
        onTypeChange={onTypeChange}
        typeOptions={typeOptions}
      />
      <TabsBar tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingBottom: 16,
    marginBottom: 4,
  },
});
