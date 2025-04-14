import React, {useState} from 'react';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Cases} from '@/navigation/routes';
import {STYLES} from '@/utils';

import {Header, CasesList, OptionsModal, SearchBox} from '../components';
import {TabId, ModalOption} from '../types';
import {casesList, tabs, typeOptions} from '../utils';

export default function ExplorerCases() {
  const {navigateTo} = useAppNavigation();
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  const handleCasePress = (caseId: number) => {
    navigateTo(Cases.ViewCase);
  };

  const handleOptionsPress = () => {
    setModalVisible(true);
  };

  const modalOptions: ModalOption[] = [
    {
      label: 'Ver caso',
      onPress: () => navigateTo(Cases.ViewCase),
    },
    {
      label: 'Editar caso',
      onPress: () => {},
    },
    {
      label: 'Eliminar caso',
      onPress: () => {},
    },
  ];

  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <Header />

      <SearchBox
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        typeOptions={typeOptions}
      />

      <CasesList
        cases={casesList}
        onCasePress={handleCasePress}
        onOptionsPress={handleOptionsPress}
      />

      <OptionsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        options={modalOptions}
      />
    </PageContainer>
  );
}
