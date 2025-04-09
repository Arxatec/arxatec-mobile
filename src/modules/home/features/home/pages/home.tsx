import {PageContainer} from '@/components/layout';
import {Home as HomeRoutes} from '@/navigation/routes.ts';
import {STYLES} from '@/utils';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CustomAvatar} from '@/components/atoms/custom_avatar';
import {BellIcon, Cog6ToothIcon} from 'react-native-heroicons/solid';
import {useState} from 'react';
import {useAppNavigation} from '@/hooks';

interface TabItem {
  id: TabId;
  label: string;
}

type TabId = 'clients' | 'earnings' | 'closed' | 'visits';

interface CardData {
  title: string;
  amount: string;
  update: string;
  button: string;
}

type CardDataMap = {
  [key in TabId]: CardData;
};

interface Meeting {
  id: string;
  date: string;
  time: string;
  title: string;
  location: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('earnings');
  const {navigateTo} = useAppNavigation();

  const navigateToSettings = () => navigateTo(HomeRoutes.Settings);
  const navigateToNotification = () => navigateTo(HomeRoutes.Notification);

  const tabs: TabItem[] = [
    {id: 'earnings', label: 'Ganancias'},
    {id: 'clients', label: 'Total de clientes'},
    {id: 'closed', label: 'Casos cerrados'},
    {id: 'visits', label: 'Visitas hacia tu perfil'},
  ];

  const cardData: CardDataMap = {
    clients: {
      title: 'Total de clientes',
      amount: '84',
      button: 'Ver clientes',
      update: 'actualizado 6/01/2025',
    },
    earnings: {
      title: 'Ganancias',
      amount: '$2,456.56',
      update: 'actualizado 6/01/2025',
      button: 'Ver ganancias',
    },
    closed: {
      title: 'Casos cerrados',
      amount: '24',
      button: 'Ver casos',
      update: 'actualizado 5/01/2025',
    },
    visits: {
      title: 'Visitas a tu perfil',
      amount: '356',
      update: 'actualizado hoy',
      button: 'Ver tu perfil público',
    },
  };

  const upcomingMeetings: Meeting[] = [
    {
      id: '101',
      date: '10 Abr, 2025',
      time: '10:00 AM',
      title: 'Revisión de Casos Pendientes',
      location: 'Sala Legal A',
    },
    {
      id: '102',
      date: '12 Abr, 2025',
      time: '4:00 PM',
      title: 'Auditoría de Contratos Empresariales',
      location: 'Oficina de Arxatec',
    },
    {
      id: '103',
      date: '15 Abr, 2025',
      time: '11:30 AM',
      title: 'Estrategia de Defensa Penal',
      location: 'Sala de Reuniones 2',
    },
    {
      id: '104',
      date: '18 Abr, 2025',
      time: '9:00 AM',
      title: 'Capacitación en Derecho Digital',
      location: 'Sala Virtual LegalTech',
    },
    {
      id: '105',
      date: '22 Abr, 2025',
      time: '3:00 PM',
      title: 'Planificación de Juicio Oral',
      location: 'Tribunal de Distrito',
    },
    {
      id: '106',
      date: '25 Abr, 2025',
      time: '12:00 PM',
      title: 'Revisión de Políticas de Privacidad',
      location: 'Sala Legal B',
    },
    {
      id: '107',
      date: '28 Abr, 2025',
      time: '5:00 PM',
      title: 'Negociación de Acuerdo Extrajudicial',
      location: 'Sala de Mediación 3',
    },
    {
      id: '108',
      date: '30 Abr, 2025',
      time: '8:30 AM',
      title: 'Análisis de Jurisprudencia Reciente',
      location: 'Centro de Estudios Jurídicos',
    },
  ];

  return (
    <PageContainer
      paddingHorizontal={0}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <CustomAvatar
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
              size={40}
              username="Amirnov"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Hola, Bienvenido</Text>
              <Text style={styles.username}>Rafael</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={navigateToSettings}>
              <Cog6ToothIcon size={18} color={STYLES.colors.black[500]} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={navigateToNotification}>
              <BellIcon size={18} color={STYLES.colors.black[500]} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.container, {marginTop: 4}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.dashboardTitle}>Estadisticas</Text>

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
      <View style={styles.container}>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentCardTitle}>
            {cardData[activeTab].title}
          </Text>
          <Text style={styles.paymentAmount}>{cardData[activeTab].amount}</Text>
          <Text style={styles.updateText}>{cardData[activeTab].update}</Text>

          <TouchableOpacity style={styles.viewPricingButton}>
            <Text style={styles.viewPricingText}>
              {cardData[activeTab].button}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.meetingsContainer}>
        <View style={styles.container}>
          <View style={styles.meetingsSectionHeader}>
            <Text style={styles.sectionTitle}>Eventos de hoy</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Mirar todos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 16}}>
          {upcomingMeetings.map(meeting => (
            <View key={meeting.id} style={styles.meetingCard}>
              <View style={styles.meetingDateContainer}>
                <Text style={styles.meetingDate}>
                  {meeting.date} • {meeting.time}
                </Text>
              </View>
              <Text style={styles.meetingTitle}>{meeting.title}</Text>
              <Text style={styles.meetingLocation}>{meeting.location}</Text>
              <Text style={styles.meetingLocation}>ID #{meeting.id}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  titleContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeContainer: {
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: STYLES.colors.black[700],
    fontFamily: STYLES.fonts.medium,
  },
  username: {
    fontSize: 16,
    color: STYLES.colors.black[900],
    fontFamily: STYLES.fonts.semi_bold,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: STYLES.colors.white[1],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: STYLES.colors.black[100],
  },

  dashboardTitle: {
    paddingHorizontal: 16,
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginBottom: 16,
  },
  tabsScrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 7,
    marginRight: 8,
  },
  activeTabButton: {
    backgroundColor: STYLES.colors.blue[600],
  },
  tabButtonText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[600],
  },
  activeTabButtonText: {
    color: STYLES.colors.white[1],
  },
  paymentCard: {
    backgroundColor: STYLES.colors.blue[600],
    borderRadius: 12,
    padding: 16,
    marginTop: 4,
  },
  paymentCardTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.white[1],
    opacity: 0.8,
  },
  paymentAmount: {
    fontSize: 28,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.white[1],
    marginTop: 4,
  },
  updateText: {
    fontSize: 12,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.white[1],
    opacity: 0.7,
    marginTop: 2,
  },
  viewPricingButton: {
    marginTop: 16,
    backgroundColor: STYLES.colors.white[1],
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  viewPricingText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[900],
  },
  meetingsContainer: {
    marginBottom: 4,
    marginTop: 4,
  },
  meetingsSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[500],
  },
  meetingCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginRight: 4,
    width: 250,
  },
  meetingDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  meetingDate: {
    fontSize: 12,
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[500],
  },
  expandButton: {
    padding: 4,
  },
  meetingTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginBottom: 4,
  },
  meetingLocation: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    color: STYLES.colors.black[500],
    marginTop: 4,
  },
});
