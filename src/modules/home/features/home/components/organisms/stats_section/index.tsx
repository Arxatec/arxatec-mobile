import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TabsNav} from '../../molecules';
import {TabId, TabItem, CardDataMap} from '../../../types';
import {StatCard} from '../../atoms';

interface StatsSectionProps {
  tabs: TabItem[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  cardData: CardDataMap;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  tabs,
  activeTab,
  onTabChange,
  cardData,
}) => {
  return (
    <>
      <View style={[styles.container, {marginTop: 4}]}>
        <TabsNav
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
          title="Estadisticas"
        />
      </View>
      <View style={styles.container}>
        <StatCard data={cardData[activeTab]} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
