import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {CaseTab} from '../../atoms';
import {TabId, TabItem} from '../../../types';

interface TabsBarProps {
  tabs: TabItem[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export const TabsBar: React.FC<TabsBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsScrollContent}>
      {tabs.map(tab => (
        <CaseTab
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onPress={onTabChange}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabsScrollContent: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 16,
  },
});
