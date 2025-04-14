import {PageContainer} from '@/components/layout';
import {Cases, Community, Home as HomeRoutes} from '@/navigation/routes.ts';
import {STYLES} from '@/utils';
import {
  SparklesIcon,
  FolderPlusIcon,
  CalendarIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/solid';
import {useState} from 'react';
import {useAppNavigation} from '@/hooks';
import {
  HeaderSection,
  StatsSection,
  MeetingsSection,
  CasesSection,
  ActionOptionsSection,
} from '../components/organisms';
import {
  TabId,
  TabItem,
  CardDataMap,
  Meeting,
  CaseItem,
  ActionOption,
} from '../types';
import {ScrollView} from 'react-native';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('earnings');
  const {navigateTo} = useAppNavigation();

  const navigateToSettings = () => navigateTo(HomeRoutes.Settings);
  const navigateToNotification = () => navigateTo(HomeRoutes.Notification);

  const caseOptions: ActionOption[] = [
    {
      id: 3,
      title: 'Asistente virtual',
      icon: SparklesIcon,
      color: STYLES.colors.sky[500],
      action: () => navigateTo(Cases.ViewClients),
    },
    {
      id: 2,
      title: 'Crear caso',
      icon: FolderPlusIcon,
      color: STYLES.colors.cyan[500],
      action: () => navigateTo(Cases.ExplorerCases),
    },
    {
      id: 5,
      title: 'Chatear con cliente',
      icon: ChatBubbleLeftRightIcon,
      color: STYLES.colors.blue[600],
      action: () => navigateTo(Community.ViewPosts),
    },
    {
      id: 1,
      title: 'Agendar reunión',
      icon: CalendarIcon,
      color: STYLES.colors.emerald[500],
      action: () => navigateTo(Cases.CreateCase),
    },
    {
      id: 4,
      title: 'Crear post',
      icon: GlobeAltIcon,
      color: STYLES.colors.teal[500],
      action: () => navigateTo(Community.CreatePost),
    },
  ];

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

  const casesList: CaseItem[] = [
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
  ];

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  const handleCasePress = () => {
    navigateTo(Cases.ViewCase);
  };

  const handleSeeAllPress = () => {
    // Implementar navegación a la vista de todos los casos/reuniones
  };

  return (
    <PageContainer
      paddingHorizontal={0}
      statusBarBackground={STYLES.colors.white[1]}
      scrollEnabled={false}
      translucent={false}>
      <HeaderSection
        username="Rafael"
        avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
        onSettingsPress={navigateToSettings}
        onNotificationPress={navigateToNotification}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ActionOptionsSection options={caseOptions} />

        <StatsSection
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          cardData={cardData}
        />

        <MeetingsSection
          meetings={upcomingMeetings}
          onSeeAllPress={handleSeeAllPress}
        />

        <CasesSection
          cases={casesList}
          onCasePress={handleCasePress}
          onSeeAllPress={handleSeeAllPress}
        />
      </ScrollView>
    </PageContainer>
  );
}
