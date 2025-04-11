import {CustomInput} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Cases} from '@/navigation/routes';
import {STYLES} from '@/utils';
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
  ArrowUpRightIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {
  DocumentTextIcon,
  DocumentMagnifyingGlassIcon,
  DocumentPlusIcon,
  UsersIcon,
  FolderIcon,
  FolderPlusIcon,
  FolderOpenIcon,
} from 'react-native-heroicons/solid';

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

type TabId = 'all' | 'job' | 'self' | 'family' | 'economy' | 'culture' | 'home';

const tabs: TabItem[] = [
  {id: 'all', label: 'Todos'},
  {id: 'job', label: 'Laboral'},
  {id: 'self', label: 'Personal'},
  {id: 'family', label: 'Familiar'},
  {id: 'culture', label: 'Cultura'},
  {id: 'economy', label: 'Economía'},
  {id: 'home', label: 'Vivienda'},
];

export default function ViewCases() {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [modalVisible, setModalVisible] = useState(false);
  const {navigateTo} = useAppNavigation();
  const handleOptionSelected = (option: string) => {
    setModalVisible(false);
  };
  const caseOptions = [
    {
      id: 2,
      title: 'Explorar casos',
      icon: FolderOpenIcon,
      color: STYLES.colors.purple[600],
      action: () => {},
    },
    {
      id: 1,
      title: 'Agregar caso',
      icon: FolderPlusIcon,
      color: STYLES.colors.blue[600],
      action: () => {},
    },
    {
      id: 3,
      title: 'Mis clientes',
      icon: UsersIcon,
      color: STYLES.colors.sky[500],
      action: () => {},
    },
  ];

  return (
    <PageContainer
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}
      scrollEnabled={false}
      paddingHorizontal={0}>
      <View style={styles.fixedHeader}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Mis casos</Text>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollableContent}
        showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {caseOptions.map(option => (
            <TouchableOpacity key={option.id} style={styles.option}>
              <View>
                <View
                  style={[
                    styles.optionIconContainer,
                    {backgroundColor: option.color},
                  ]}>
                  <option.icon color="#FFF" size={20} />
                </View>
                <Text style={styles.optionText}>{option.title}</Text>
              </View>
              <ArrowUpRightIcon
                size={16}
                color={STYLES.colors.black[500]}
                strokeWidth={2}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.searchContainer}>
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

        <View style={styles.casesContainer}>
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
  fixedHeader: {
    backgroundColor: STYLES.colors.white[1],
    paddingBottom: 4,
  },
  headerContainer: {
    paddingHorizontal: 16,
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
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  scrollableContent: {
    flex: 1,
    borderRadius: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 6,
    alignSelf: 'flex-start',
  },
  option: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: 250,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: STYLES.colors.blue[600],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  optionText: {
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
    fontSize: 14,
    marginTop: 8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 4,
  },
  searchBox: {
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingBottom: 16,
  },
  inputContainer: {
    height: 42,
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
  casesContainer: {
    paddingHorizontal: 16,
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
