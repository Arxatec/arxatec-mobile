import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Switch,
  Image,
} from 'react-native';
import {
  CalendarIcon,
  ShareIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  PhotoIcon,
  ArrowLeftIcon,
  CalendarDaysIcon,
} from 'react-native-heroicons/solid';
import {STYLES} from '@/utils';
import {CustomAvatar} from '@/components/atoms';
import {PageContainer} from '@/components/layout';
import {useAppNavigation} from '@/hooks';
import {Messages} from '@/navigation/routes';

const mediaDummy = Array.from({length: 8}, (_, i) => ({
  id: i.toString(),
  uri: 'https://random.imagecdn.app/500/550',
}));

export default function InfoChat() {
  const {navigateTo} = useAppNavigation();
  const navigateToDashboard = () => navigateTo(Messages.ViewChat);
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);

  return (
    <PageContainer
      scrollEnabled={false}
      statusBarBackground={STYLES.colors.white[1]}
      translucent={false}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={navigateToDashboard}>
            <ArrowLeftIcon size={20} color={STYLES.colors.black[900]} />
          </TouchableOpacity>
          <Text style={styles.title}>Información</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <CustomAvatar
            avatar="https://randomuser.me/api/portraits/men/1.jpg"
            size={80}
            username="María López"
          />
          <Text style={styles.name}>María López</Text>
          <Text style={styles.role}>Abogado</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <CalendarDaysIcon color={STYLES.colors.blue[600]} size={24} />
              <Text style={styles.actionText}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <ShareIcon color={STYLES.colors.blue[600]} size={24} />
              <Text style={styles.actionText}>Compartir</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <DocumentTextIcon color={STYLES.colors.black[700]} size={18} />
            <Text style={styles.sectionTitle}>Descripción</Text>
          </View>
          <Text style={styles.sectionContent}>
            Cliente con caso de despido improcedente
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <InformationCircleIcon color={STYLES.colors.black[700]} size={18} />
            <Text style={styles.sectionTitle}>Información</Text>
          </View>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Email:</Text> yerik05vh@gmail.com
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>Celular:</Text> +57 312 345 6789
          </Text>
        </View>

        <View style={[styles.section, {padding: 0}]}>
          <View
            style={[
              styles.sectionHeaderWithLink,
              {paddingHorizontal: 16, paddingTop: 16},
            ]}>
            <View style={styles.sectionHeader}>
              <PhotoIcon color={STYLES.colors.black[700]} size={18} />
              <Text style={styles.sectionTitle}>Media (29)</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.link}>Mirar todo</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{
              paddingHorizontal: 8,
              paddingBottom: 16,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={mediaDummy}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Image source={{uri: item.uri}} style={styles.mediaItem} />
            )}
          />
        </View>

        <View style={styles.notificationRow}>
          <Text style={styles.notificationText}>Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor="#FFF"
            trackColor={{
              false: STYLES.colors.black[200],
              true: STYLES.colors.blue[600],
            }}
          />
        </View>
      </View>
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
    padding: 10,
  },
  container: {},
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 9,
  },
  name: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[900],
    marginTop: 8,
  },
  role: {
    fontSize: 14,
    color: STYLES.colors.black[500],
    fontFamily: STYLES.fonts.regular,
  },
  actionsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  actionButton: {
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: STYLES.colors.black[100],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  actionText: {
    fontSize: 14,
    color: STYLES.colors.black[900],
    fontFamily: STYLES.fonts.medium,
  },
  section: {
    marginBottom: 4,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 9,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  sectionHeaderWithLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[700],
  },
  sectionContent: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    fontFamily: STYLES.fonts.regular,
  },
  infoText: {
    fontSize: 14,
    color: STYLES.colors.black[600],
    marginBottom: 4,
    fontFamily: STYLES.fonts.regular,
  },
  infoLabel: {
    fontFamily: STYLES.fonts.medium,
    color: STYLES.colors.black[700],
  },
  link: {
    color: STYLES.colors.black[500],
    fontSize: 13,
    fontFamily: STYLES.fonts.medium,
  },
  mediaItem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginLeft: 8,
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  notificationText: {
    fontSize: 14,
    color: STYLES.colors.black[800],
    fontFamily: STYLES.fonts.medium,
  },
});
