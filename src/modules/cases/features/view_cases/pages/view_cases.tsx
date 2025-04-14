import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Cases} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {
  FolderPlusIcon,
  FolderOpenIcon,
  UsersIcon,
} from 'react-native-heroicons/solid';

import {CaseHeader} from '../components/molecules';
import {
  CaseList,
  CaseOptionsScroller,
  SearchBox,
} from '../components/organisms';
import {ModalActions} from '../components/molecules';
import {casesList, tabs} from '../utils';
import {CaseOption, TabId} from '../types';

export default function ViewCases() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [searchText, setSearchText] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const {navigateTo} = useAppNavigation();

  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
  };

  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  const handleCasePress = () => {
    navigateTo(Cases.ViewCase);
  };

  const handleOptionsPress = () => {
    setModalVisible(true);
  };

  const caseOptions: CaseOption[] = [
    {
      id: 2,
      title: 'Explorar casos',
      icon: FolderOpenIcon,
      color: STYLES.colors.purple[600],
      action: () => navigateTo(Cases.ExplorerCases),
    },
    {
      id: 1,
      title: 'Agregar caso',
      icon: FolderPlusIcon,
      color: STYLES.colors.blue[600],
      action: () => navigateTo(Cases.CreateCase),
    },
    {
      id: 3,
      title: 'Mis clientes',
      icon: UsersIcon,
      color: STYLES.colors.sky[500],
      action: () => navigateTo(Cases.ViewClients),
    },
  ];

  const modalOptions = ['Ver caso', 'Editar caso', 'Eliminar caso'];

  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}
      scrollEnabled={false}
      paddingHorizontal={0}>
      <View style={styles.fixedHeader}>
        <CaseHeader />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CaseOptionsScroller options={caseOptions} />

        <SearchBox
          searchValue={searchText}
          onSearchChange={handleSearchChange}
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        <CaseList
          cases={casesList}
          onCasePress={handleCasePress}
          onOptionsPress={handleOptionsPress}
        />
      </ScrollView>

      <ModalActions
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        options={modalOptions}
        onOptionSelected={handleOptionSelected}
      />
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  fixedHeader: {
    backgroundColor: STYLES.colors.white[1],
    paddingBottom: 4,
  },
  content: {
    flex: 1,
    borderRadius: 10,
  },
});
