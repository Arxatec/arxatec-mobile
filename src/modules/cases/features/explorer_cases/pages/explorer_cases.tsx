import {CustomInput} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Cases} from '@/navigation/routes';
import {STYLES} from '@/utils';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {
  EllipsisVerticalIcon,
  FolderIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid';

type TabId = 'all' | 'job' | 'self' | 'family' | 'economy' | 'culture' | 'home';
const casesList = [
  {
    id: 1,
    title: 'Asesoramiento en derecho laboral',
    client: 'Maria Lopez',
    date: '20/10/2025',
    status: 'active',
  },
  {
    id: 2,
    title: 'Demanda por incumplimiento de contrato',
    client: 'Juan Pérez',
    date: '18/10/2025',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Reclamo por servicios profesionales',
    client: 'Ana Martínez',
    date: '15/10/2025',
    status: 'active',
  },
  {
    id: 4,
    title: 'Asesoría en propiedad intelectual',
    client: 'Carlos Rodríguez',
    date: '12/10/2025',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Defensa en caso de accidente laboral',
    client: 'Laura Sánchez',
    date: '10/10/2025',
    status: 'active',
  },
  {
    id: 6,
    title: 'Mediación en conflicto comercial',
    client: 'Roberto García',
    date: '08/10/2025',
    status: 'pending',
  },
  {
    id: 7,
    title: 'Asesoramiento en derecho de familia',
    client: 'Sofía Torres',
    date: '05/10/2025',
    status: 'active',
  },
  {
    id: 8,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 9,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 10,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 11,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
  {
    id: 12,
    title: 'Reclamo por daños y perjuicios',
    client: 'Miguel Ángel Ruiz',
    date: '03/10/2025',
    status: 'completed',
  },
];

interface TabItem {
  id: TabId;
  label: string;
}
const tabs: TabItem[] = [
  {id: 'all', label: 'Todos'},
  {id: 'job', label: 'Laboral'},
  {id: 'self', label: 'Personal'},
  {id: 'family', label: 'Familiar'},
  {id: 'culture', label: 'Cultura'},
  {id: 'economy', label: 'Economía'},
  {id: 'home', label: 'Vivienda'},
];

export default function ExplorerCases() {
  const {goBack} = useNavigation();
  const {navigateTo} = useAppNavigation();
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [modalVisible, setModalVisible] = useState(false);
  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
  };
  return (
    <PageContainer
      scrollEnabled={false}
      translucent={false}
      statusBarBackground={STYLES.colors.white[1]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={goBack}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[700]} />
          </TouchableOpacity>
          <Text style={styles.title}>Explorar casos</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.searchBox}>
            <View style={{paddingHorizontal: 16, paddingTop: 16}}>
              <View style={styles.inputContainer}>
                <CustomInput
                  startAdornment={
                    <MagnifyingGlassIcon
                      size={18}
                      color={STYLES.colors.black[400]}
                    />
                  }
                  placeholder="Buscar..."
                />
              </View>
              <View style={[styles.inputContainer, {marginTop: 4}]}>
                <CustomInput
                  startAdornment={
                    <MapPinIcon size={18} color={STYLES.colors.black[400]} />
                  }
                  placeholder="Ubicación"
                />
              </View>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsScrollContent}>
              {tabs.map(tab => (
                <TouchableOpacity
                  key={tab.id}
                  style={[
                    styles.tabButton,
                    activeTab === tab.id && styles.activeTabButton,
                  ]}
                  onPress={() => setActiveTab(tab.id)}>
                  <Text
                    style={[
                      styles.tabButtonText,
                      activeTab === tab.id && styles.activeTabButtonText,
                    ]}>
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        <View>
          {casesList.map(caseItem => (
            <TouchableOpacity
              key={caseItem.id}
              onPress={() => navigateTo(Cases.ViewCase)}
              style={styles.caseItemContainer}>
              <View style={styles.caseItem}>
                <View style={styles.caseItemContent}>
                  <View style={styles.caseIconContainer}>
                    <FolderIcon
                      size={20}
                      color={STYLES.colors.blue[600]}
                      strokeWidth={2}
                    />
                  </View>
                  <View style={styles.caseInfo}>
                    <Text style={styles.caseTitle}>{caseItem.title}</Text>
                    <View style={styles.caseMetaInfo}>
                      <Text style={styles.caseMetaText}>{caseItem.client}</Text>
                      <View style={styles.metaDot}></View>
                      <Text style={styles.caseMetaText}>{caseItem.date}</Text>
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
            {['Ver caso', 'Editar caso', 'Eliminar caso'].map((item, index) => (
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
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
    overflow: 'hidden',
  },

  searchBox: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  inputContainer: {
    height: 43,
  },
  tabsScrollContent: {
    flexDirection: 'row',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: STYLES.colors.blue[100],
  },
  tabButtonText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[600],
  },
  activeTabButtonText: {
    color: STYLES.colors.blue[600],
  },

  caseItemContainer: {
    marginTop: 4,
  },
  caseItem: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caseItemContent: {
    flexDirection: 'row',
  },
  caseIconContainer: {
    backgroundColor: STYLES.colors.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  caseInfo: {
    marginLeft: 8,
  },
  caseTitle: {
    fontFamily: STYLES.fonts.semi_bold,
    fontSize: 14,
    color: STYLES.colors.black[900],
  },
  caseMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  caseMetaText: {
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
