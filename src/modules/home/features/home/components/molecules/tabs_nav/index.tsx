import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TabButton} from '../../atoms';
import {TabId, TabItem} from '../../../types';
import {SectionTitle} from '../../atoms';

interface TabsNavProps {
  tabs: TabItem[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  title: string;
}

export const TabsNav: React.FC<TabsNavProps> = ({
  tabs,
  activeTab,
  onTabChange,
  title,
}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={{paddingHorizontal: 16}}>
        <SectionTitle title={title} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsScrollContent}>
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
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 10,
  },
  tabsScrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
