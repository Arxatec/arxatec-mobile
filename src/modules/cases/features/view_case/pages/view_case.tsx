import {CustomAvatar} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {STYLES} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  PlayCircleIcon,
  ScaleIcon,
} from 'react-native-heroicons/solid';
const fileList = [
  {
    id: 1,
    fileName: 'Contrato laboral',
    uploadDate: '20/10/2025',
    fileSize: '2.5 MB',
  },
  {
    id: 2,
    fileName: 'Demanda civil',
    uploadDate: '18/10/2025',
    fileSize: '1.8 MB',
  },
  {
    id: 3,
    fileName: 'Factura ervicios',
    uploadDate: '15/10/2025',
    fileSize: '500 KB',
  },
];

const caseInfo = [
  {
    id: 3,
    label: 'Tipo de caso',
    value: 'Contrato laboral',
    icon: <ScaleIcon size={20} color={STYLES.colors.cyan[500]} />,
    color: STYLES.colors.cyan[100],
  },
  {
    id: 2,
    label: 'Estado caso',
    value: 'Activo',
    icon: <PlayCircleIcon size={20} color={STYLES.colors.sky[500]} />,
    color: STYLES.colors.sky[100],
  },
  {
    id: 1,
    label: 'Creación',
    value: '10/10/2025',
    icon: <CalendarDaysIcon size={20} color={STYLES.colors.blue[500]} />,
    color: STYLES.colors.blue[100],
  },
];
export default function ViewCase() {
  const {goBack} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
  };
  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}
      scrollEnabled={false}
      paddingHorizontal={0}>
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginBottom: 4,
            paddingHorizontal: 16,
            gap: 5,
          }}>
          {caseInfo.map(item => (
            <View
              key={item.id}
              style={{
                backgroundColor: '#FFF',
                borderRadius: 8,
                padding: 16,
                width: 200,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <View
                  style={{
                    backgroundColor: item.color,
                    padding: 10,
                    borderRadius: 8,
                  }}>
                  {item.icon}
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: STYLES.fonts.semi_bold,
                      fontSize: 14,
                      color: STYLES.colors.black[900],
                    }}>
                    {item.label}
                  </Text>
                  <Text
                    style={{
                      fontFamily: STYLES.fonts.regular,
                      fontSize: 14,
                      color: STYLES.colors.black[500],
                    }}>
                    {item.value}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 8,
              padding: 16,
            }}>
            <View style={styles.profileInfo}>
              <CustomAvatar
                avatar="https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
                size={45}
                username="Rafael Aguirre"
              />
              <View style={styles.profileTextContainer}>
                <Text style={styles.profileName}>Jorge Briseño</Text>
                <Text style={styles.profileEmail}>jorgebirseno@gmail.com</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 8,
              padding: 16,
              marginTop: 4,
            }}>
            <Text style={styles.titleFile}>
              Asesoramiento legal para AirCorp
            </Text>
            <Text style={styles.descriptionFile}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              inventore beatae quos vero ducimus nulla quaerat enim quasi minus
              animi totam nihil ea quisquam officia, numquam placeat eius
              molestiae libero, Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia eaque quam dignissimos quibusdam molestiae
              debitis perferendis tempora illo hic. Earum ipsam minus eos
              sapiente, vero illo id cumque reprehenderit facere!
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              borderRadius: 8,
              padding: 16,
              marginTop: 4,
              marginBottom: 4,
            }}>
            <Text
              style={{
                fontFamily: STYLES.fonts.semi_bold,
                fontSize: 16,
              }}>
              Archivos adjuntos
            </Text>
          </View>
          {fileList.map(fileItem => (
            <TouchableOpacity
              key={fileItem.id}
              style={styles.fileItemContainer}>
              <View style={styles.fileItem}>
                <View style={styles.fileItemContent}>
                  <View style={styles.fileIconContainer}>
                    <DocumentTextIcon
                      size={20}
                      color={STYLES.colors.blue[600]}
                      strokeWidth={2}
                    />
                  </View>
                  <View style={styles.fileInfo}>
                    <Text style={styles.fileTitle}>{fileItem.fileName}</Text>
                    <View style={styles.fileMetaInfo}>
                      <Text style={styles.fileMetaText}>
                        {fileItem.fileSize}
                      </Text>
                      <View style={styles.metaDot}></View>
                      <Text style={styles.fileMetaText}>
                        {fileItem.uploadDate}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <EllipsisVerticalIcon
                    size={24}
                    color={STYLES.colors.black[900]}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {['Descargar', 'Eliminar archivo'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalItem}
                onPress={() => handleOptionSelected(item)}>
                <Text style={styles.modalText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  fixedHeader: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  titleFile: {
    fontFamily: STYLES.fonts.bold,
    fontSize: 16,
    color: STYLES.colors.black[900],
  },
  descriptionFile: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    marginTop: 8,
    color: STYLES.colors.black[500],
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
  },
  profileEmail: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    marginTop: 2,
    fontFamily: STYLES.fonts.regular,
  },
  fileItemContainer: {
    padding: 14,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 4,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fileItemContent: {
    flexDirection: 'row',
  },
  fileIconContainer: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  fileInfo: {
    marginLeft: 8,
  },
  fileTitle: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  fileMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  fileMetaText: {
    fontFamily: STYLES.fonts.regular,
    fontSize: 14,
    color: STYLES.colors.black[600],
  },
  metaDot: {
    width: 5,
    height: 5,
    backgroundColor: STYLES.colors.black[400],
    borderRadius: 200,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalText: {
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[900],
    fontSize: 14,
  },
});
