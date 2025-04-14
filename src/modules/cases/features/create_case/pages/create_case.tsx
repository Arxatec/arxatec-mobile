import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {
  CaseHeader,
  CaseForm,
  ClientForm,
  MultimediaUploader,
  CreateButton,
} from '../components';

export default function CreateCase() {
  const [selectedType, setSelectedType] = useState('');

  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <CaseHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CaseForm
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        <ClientForm />
        <MultimediaUploader />
        <CreateButton />
      </ScrollView>
    </PageContainer>
  );
}
