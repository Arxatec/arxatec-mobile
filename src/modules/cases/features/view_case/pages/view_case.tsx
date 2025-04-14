import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import {
  Header,
  ProfileInfo,
  CaseDescription,
  CaseInfoCarousel,
  FileList,
  OptionsModal,
} from '../components';
import {CASE_INFO_ITEMS, FILE_LIST} from '../data';

export default function ViewCase() {
  const {goBack} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState<number | null>(null);

  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
  };

  const handleOptionsPress = (fileId: number) => {
    setSelectedFileId(fileId);
    setModalVisible(true);
  };

  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}
      scrollEnabled={false}
      paddingHorizontal={0}>
      <Header onBackPress={goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CaseInfoCarousel caseInfoItems={CASE_INFO_ITEMS} />

        <View style={{paddingHorizontal: 16}}>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 8,
              padding: 16,
            }}>
            <ProfileInfo
              avatar="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              username="Jorge Briseño"
              email="jorgebirseno@gmail.com"
            />
          </View>

          <CaseDescription
            title="Asesoramiento legal para AirCorp"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              inventore beatae quos vero ducimus nulla quaerat enim quasi minus
              animi totam nihil ea quisquam officia, numquam placeat eius
              molestiae libero, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia eaque quam dignissimos quibusdam molestiae
              debitis perferendis tempora illo hic. Earum ipsam minus eos
              sapiente, vero illo id cumque reprehenderit facere!"
          />

          <FileList files={FILE_LIST} onOptionsPress={handleOptionsPress} />
        </View>
      </ScrollView>

      <OptionsModal
        visible={modalVisible}
        options={['Descargar', 'Eliminar archivo']}
        onClose={() => setModalVisible(false)}
        onOptionSelected={handleOptionSelected}
      />
    </PageContainer>
  );
}
