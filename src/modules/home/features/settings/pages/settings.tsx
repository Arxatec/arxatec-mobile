import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {STYLES} from '@/utils';
import {PageContainer} from '@/components/layout';
import {ArrowLeftIcon, ChevronRightIcon} from 'react-native-heroicons/outline';
import {CustomAvatar} from '@/components/atoms';
import {useAppNavigation} from '@/hooks';
import {Home} from '@/navigation/routes';
import {
  PencilIcon,
  LockClosedIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from 'react-native-heroicons/solid';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  showArrow?: boolean;
  showSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  onPress?: () => void;
  color?: string;
  textColor?: string;
  hasSubtitle?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  subtitle,
  showArrow = true,
  showSwitch = false,
  switchValue = false,
  onSwitchChange,
  onPress,
  color,
  textColor,
  hasSubtitle = true,
}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        <View
          style={[
            styles.iconContainer,
            color ? {backgroundColor: color} : null,
          ]}>
          {icon}
        </View>
        <View style={styles.menuItemTextContainer}>
          <Text
            style={[
              styles.menuItemTitle,
              textColor ? {color: textColor} : null,
            ]}>
            {title}
          </Text>
          {hasSubtitle && (
            <Text style={styles.menuItemSubtitle}>{subtitle}</Text>
          )}
        </View>
      </View>
      {showArrow && !showSwitch && (
        <ChevronRightIcon size={18} color={STYLES.colors.black[500]} />
      )}
      {showSwitch && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{
            false: STYLES.colors.black[200],
            true: STYLES.colors.blue[600],
          }}
          thumbColor="#FFFFFF"
        />
      )}
    </TouchableOpacity>
  );
};

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({children}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};

const ProfileHeader: React.FC = () => {
  return (
    <View>
      <View style={styles.profileInfo}>
        <CustomAvatar
          avatar="https://images.pexels.com/photos/4975660/pexels-photo-4975660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          size={45}
          username="Rafael Aguirre"
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Rafael Aguirre</Text>
          <Text style={styles.profileEmail}>rafaelaguirre@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default function Settings() {
  const {navigateTo} = useAppNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const navigateToDashboard = () => navigateTo(Home.Dashboard);

  const handleToggleNotifications = (value: boolean) => {
    setNotificationsEnabled(value);
  };

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
          <Text style={styles.title}>Configuración</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <ProfileHeader />
        </View>

        <Section>
          <MenuItem
            icon={<PencilIcon size={18} color={STYLES.colors.black[500]} />}
            title="Editar perfil"
            subtitle="Cambia tu foto de perfil, número, ubicación"
            onPress={() => {}}
          />
          <MenuItem
            icon={<LockClosedIcon size={18} color={STYLES.colors.black[500]} />}
            title="Cambiar contraseña"
            subtitle="Para una cuenta más segura"
            onPress={() => {}}
          />
          <MenuItem
            icon={
              <DocumentTextIcon size={18} color={STYLES.colors.black[500]} />
            }
            title="Terminos y condiciones"
            subtitle="Protegemos tu cuenta ahora"
            onPress={() => {}}
          />
          <MenuItem
            icon={<CreditCardIcon size={18} color={STYLES.colors.black[500]} />}
            title="Añadir cuenta"
            subtitle="Añade tu metodo de pago favorito"
            onPress={() => {}}
          />
        </Section>

        <Section>
          <MenuItem
            icon={<BellIcon size={18} color={STYLES.colors.black[500]} />}
            title="Notification"
            subtitle="Customize your notification preferences"
            showArrow={false}
            showSwitch={true}
            switchValue={notificationsEnabled}
            onSwitchChange={handleToggleNotifications}
          />
          <MenuItem
            icon={
              <QuestionMarkCircleIcon
                size={18}
                color={STYLES.colors.black[500]}
              />
            }
            title="Preguntas frecuentes"
            subtitle="Quieres saber más sobre nosotros"
            onPress={() => {}}
          />
          <MenuItem
            icon={<ArrowRightOnRectangleIcon size={20} color="#ef4444" />}
            title="Cerrar sessión"
            hasSubtitle={false}
            onPress={() => {}}
            color="#fee2e2"
            textColor="#ef4444"
            showArrow={false}
          />
        </Section>
      </ScrollView>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
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
  title: {
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    color: STYLES.colors.black[800],
  },

  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 4,
    padding: 16,
  },
  section: {
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: STYLES.fonts.medium,
    marginBottom: 4,
    paddingLeft: 4,
  },
  sectionContent: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: STYLES.colors.black[50],
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: STYLES.colors.black[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemTextContainer: {
    marginLeft: 16,
  },
  menuItemTitle: {
    fontSize: 14,
    fontFamily: STYLES.fonts.semi_bold,
    color: STYLES.colors.black[700],
  },
  menuItemSubtitle: {
    fontSize: 12,
    color: STYLES.colors.black[500],
    marginTop: 2,
    fontFamily: STYLES.fonts.regular,
  },
  arrowIcon: {
    fontSize: 24,
    color: STYLES.colors.black[300],
  },
});
